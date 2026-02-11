// ============================================================
// Scourie - Europe Trip Planner App
// ============================================================

(function () {
    "use strict";

    // --- State ---
    let mainMap = null;
    let dashMap = null;
    let tripModalMap = null;
    let currentView = "dashboard";
    let mapLayers = { destinations: [], routes: [], weather: [] };

    // --- Navigation ---
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });

    function switchView(view) {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        document.querySelector(`[data-view="${view}"]`).classList.add("active");
        document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
        document.getElementById(view).classList.add("active");
        currentView = view;

        if (view === "map") {
            setTimeout(() => initMainMap(), 100);
        }
        if (view === "dashboard") {
            setTimeout(() => initDashboardMap(), 100);
        }
    }

    // --- Dashboard ---
    function initDashboard() {
        renderCalendar();
        renderUpcoming();
        initDashboardMap();
    }

    function renderCalendar() {
        const months = ["April", "May", "June", "July", "August"];
        const monthKeys = ["apr", "may", "jun", "jul", "aug"];
        const grid = document.getElementById("calendar-grid");
        grid.innerHTML = "";

        months.forEach((month, i) => {
            const div = document.createElement("div");
            div.className = "calendar-month";
            const trips = TRIPS.filter(t => t.month === monthKeys[i]);
            div.innerHTML = `<h3>${month}</h3><div class="month-trips">
                ${trips.map(t => `<div class="month-trip-chip" data-trip="${t.id}">${t.destination}<br><small>${t.dates.split("–")[0].replace("Thu ", "")}</small></div>`).join("")}
                ${trips.length === 0 ? '<div style="color:var(--text-muted);font-size:0.75rem;text-align:center;">No trips</div>' : ""}
            </div>`;
            grid.appendChild(div);
        });

        grid.querySelectorAll(".month-trip-chip").forEach(chip => {
            chip.addEventListener("click", () => {
                const trip = TRIPS.find(t => t.id === parseInt(chip.dataset.trip));
                if (trip) openTripModal(trip);
            });
        });
    }

    function renderUpcoming() {
        const list = document.getElementById("upcoming-list");
        list.innerHTML = TRIPS.slice(0, 5).map(t => `
            <div class="upcoming-item" data-trip="${t.id}" style="cursor:pointer;">
                <div>
                    <div class="trip-name">${t.destination}</div>
                    <div class="trip-dates">${t.dates}</div>
                </div>
                <div class="trip-tag">${t.tags[0]}</div>
            </div>
        `).join("");

        list.querySelectorAll(".upcoming-item").forEach(item => {
            item.addEventListener("click", () => {
                const trip = TRIPS.find(t => t.id === parseInt(item.dataset.trip));
                if (trip) openTripModal(trip);
            });
        });
    }

    function initDashboardMap() {
        const container = document.getElementById("dashboard-map");
        if (!container) return;

        if (dashMap) {
            dashMap.invalidateSize();
            return;
        }

        dashMap = L.map("dashboard-map", {
            scrollWheelZoom: false,
            attributionControl: true
        }).setView([54, 5], 4);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/">OSM</a>',
            maxZoom: 18
        }).addTo(dashMap);

        // Inverness marker
        addMarker(dashMap, INVERNESS.lat, INVERNESS.lng, "INV", "inverness-marker", 30,
            `<h4>Inverness</h4><p>Home base — all trips depart from here</p>`);

        // Draw routes to each trip destination
        TRIPS.forEach((trip, i) => {
            const color = ROUTE_COLORS[i % ROUTE_COLORS.length];
            L.polyline(
                [[INVERNESS.lat, INVERNESS.lng], trip.coords],
                { color: color, weight: 2, opacity: 0.6, dashArray: "6 4" }
            ).addTo(dashMap);

            addMarker(dashMap, trip.coords[0], trip.coords[1], (i + 1).toString(), "trip-route-marker", 24,
                `<h4>${trip.destination}</h4><p>${trip.dates}</p><p class="popup-score">${trip.tags.join(", ")}</p>`);
        });
    }

    // --- Destinations ---
    function renderDestinations() {
        const grid = document.getElementById("destinations-grid");
        const sortBy = document.getElementById("sort-destinations").value;
        const region = document.getElementById("filter-region").value;

        let filtered = [...DESTINATIONS];
        if (region !== "all") {
            filtered = filtered.filter(d => d.region === region);
        }

        filtered.sort((a, b) => b[sortBy] - a[sortBy]);

        grid.innerHTML = filtered.map((d, idx) => `
            <div class="dest-card" data-dest="${d.id}">
                <div class="dest-card-img" style="background:${d.image};">
                    <div class="dest-rank">${idx + 1}</div>
                    <div class="dest-region-tag">${d.region}</div>
                </div>
                <div class="dest-card-body">
                    <h3>${d.name}</h3>
                    <div class="dest-country">${d.country} &middot; ${d.avgTemp}</div>
                    <div class="dest-scores">
                        <div class="score-item">
                            <span>Weather</span>
                            <div class="score-bar"><div class="score-fill weather" style="width:${d.weather * 10}%"></div></div>
                        </div>
                        <div class="score-item">
                            <span>Culture</span>
                            <div class="score-bar"><div class="score-fill culture" style="width:${d.culture * 10}%"></div></div>
                        </div>
                        <div class="score-item">
                            <span>Access</span>
                            <div class="score-bar"><div class="score-fill access" style="width:${d.access * 10}%"></div></div>
                        </div>
                        <div class="score-item">
                            <span>Value</span>
                            <div class="score-bar"><div class="score-fill value" style="width:${d.value * 10}%"></div></div>
                        </div>
                    </div>
                    <div class="dest-overall">
                        <span class="overall-score">${d.overall}</span>
                        <span class="overall-label"> / 10 Overall</span>
                    </div>
                    <div class="dest-highlights">${d.highlights}</div>
                    <div class="best-months">Best: ${d.bestMonths.map(m => `<span>${m}</span>`).join("")}</div>
                </div>
            </div>
        `).join("");

        grid.querySelectorAll(".dest-card").forEach(card => {
            card.addEventListener("click", () => {
                const dest = DESTINATIONS.find(d => d.id === parseInt(card.dataset.dest));
                const trip = TRIPS.find(t => t.destId === dest.id);
                if (trip) {
                    switchView("trips");
                    setTimeout(() => openTripModal(trip), 200);
                }
            });
        });
    }

    document.getElementById("sort-destinations").addEventListener("change", renderDestinations);
    document.getElementById("filter-region").addEventListener("change", renderDestinations);

    // --- Trips ---
    function renderTrips() {
        const list = document.getElementById("trips-list");
        list.innerHTML = TRIPS.map(t => {
            const weatherClass = t.weatherBadge === "hot" ? "weather-hot" : t.weatherBadge === "warm" ? "weather-warm" : "weather-mild";
            return `
                <div class="trip-card month-${t.month}" data-trip="${t.id}">
                    <div class="trip-number">Trip ${t.id} of 12</div>
                    <div class="trip-weather-badge ${weatherClass}">${t.weatherLabel}</div>
                    <h3>${t.destination}</h3>
                    <div class="trip-dates">${t.dates}</div>
                    <div class="trip-desc">${t.summary}</div>
                    <div class="trip-tags">
                        ${t.tags.map(tag => `<span class="trip-tag">${tag}</span>`).join("")}
                    </div>
                </div>
            `;
        }).join("");

        list.querySelectorAll(".trip-card").forEach(card => {
            card.addEventListener("click", () => {
                const trip = TRIPS.find(t => t.id === parseInt(card.dataset.trip));
                if (trip) openTripModal(trip);
            });
        });
    }

    // --- Trip Modal ---
    function openTripModal(trip) {
        const modal = document.getElementById("trip-modal");
        const detail = document.getElementById("trip-detail");
        const dest = DESTINATIONS.find(d => d.id === trip.destId);

        detail.innerHTML = `
            <div class="trip-detail-header">
                <h2>Trip ${trip.id}: ${trip.destination}</h2>
                <div class="detail-dates">${trip.dates}</div>
            </div>
            <div class="trip-info-grid">
                <div class="info-box">
                    <h5>Getting There</h5>
                    <p>${trip.flights}</p>
                </div>
                <div class="info-box">
                    <h5>Est. Budget</h5>
                    <p>${trip.budget}</p>
                </div>
                <div class="info-box">
                    <h5>Weather</h5>
                    <p>${trip.weatherLabel}</p>
                </div>
                <div class="info-box">
                    <h5>Overall Score</h5>
                    <p>${dest ? dest.overall + " / 10" : "N/A"}</p>
                </div>
            </div>
            <div class="itinerary">
                <h3 style="color:var(--primary);margin-bottom:0.75rem;">4-Day Itinerary</h3>
                ${trip.itinerary.map(day => `
                    <div class="day-block">
                        <h4>${day.day}</h4>
                        <p>${day.detail}</p>
                    </div>
                `).join("")}
            </div>
        `;

        modal.classList.remove("hidden");

        // Init trip map
        setTimeout(() => {
            const mapContainer = document.getElementById("trip-map");
            if (tripModalMap) {
                tripModalMap.remove();
                tripModalMap = null;
            }

            tripModalMap = L.map("trip-map", {
                scrollWheelZoom: false
            }).setView([
                (INVERNESS.lat + trip.coords[0]) / 2,
                (INVERNESS.lng + trip.coords[1]) / 2
            ], 5);

            L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                attribution: '&copy; CARTO &copy; OSM',
                maxZoom: 18
            }).addTo(tripModalMap);

            // Inverness
            addMarker(tripModalMap, INVERNESS.lat, INVERNESS.lng, "INV", "inverness-marker", 30,
                `<h4>Inverness</h4><p>Departure point</p>`);

            // Destination
            addMarker(tripModalMap, trip.coords[0], trip.coords[1], trip.id.toString(), "trip-route-marker", 28,
                `<h4>${trip.destination}</h4><p>${trip.dates}</p>`);

            // Route arc
            const midLat = (INVERNESS.lat + trip.coords[0]) / 2 + 1.5;
            const midLng = (INVERNESS.lng + trip.coords[1]) / 2;
            const arcPoints = generateArc(
                [INVERNESS.lat, INVERNESS.lng],
                [trip.coords[0], trip.coords[1]],
                30
            );

            L.polyline(arcPoints, {
                color: ROUTE_COLORS[(trip.id - 1) % ROUTE_COLORS.length],
                weight: 3,
                opacity: 0.8,
                dashArray: "8 6"
            }).addTo(tripModalMap);

            // Fit bounds
            tripModalMap.fitBounds([
                [INVERNESS.lat, INVERNESS.lng],
                trip.coords
            ], { padding: [40, 40] });
        }, 200);
    }

    // Close modal
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.getElementById("trip-modal").classList.add("hidden");
        if (tripModalMap) {
            tripModalMap.remove();
            tripModalMap = null;
        }
    });

    document.getElementById("trip-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById("trip-modal").classList.add("hidden");
            if (tripModalMap) {
                tripModalMap.remove();
                tripModalMap = null;
            }
        }
    });

    // --- Map Explorer ---
    function initMainMap() {
        const container = document.getElementById("main-map");
        if (!container) return;

        if (mainMap) {
            mainMap.invalidateSize();
            return;
        }

        mainMap = L.map("main-map").setView([52, 8], 4);

        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/">OSM</a>',
            maxZoom: 18
        }).addTo(mainMap);

        updateMapFilter("all");

        // Map filter buttons
        document.querySelectorAll(".map-filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".map-filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                updateMapFilter(btn.dataset.filter);
            });
        });
    }

    function updateMapFilter(filter) {
        if (!mainMap) return;

        // Clear existing layers
        Object.values(mapLayers).flat().forEach(layer => mainMap.removeLayer(layer));
        mapLayers = { destinations: [], routes: [], weather: [] };

        const sidebar = document.getElementById("map-info");

        // Always show Inverness
        const invMarker = addMarker(mainMap, INVERNESS.lat, INVERNESS.lng, "INV", "inverness-marker", 30,
            `<h4>Inverness</h4><p>Home base — all trips depart from here</p>`);
        mapLayers.destinations.push(invMarker);

        if (filter === "all" || filter === "weather") {
            // Show all 25 destinations
            DESTINATIONS.forEach(d => {
                const trip = TRIPS.find(t => t.destId === d.id);
                const isTrip = !!trip;
                const markerClass = isTrip ? "trip-route-marker" : "custom-marker";
                const label = isTrip ? trip.id.toString() : d.overall.toFixed(0);

                let popupContent = `<h4>${d.name}, ${d.country}</h4>
                    <p>Overall: <span class="popup-score">${d.overall}/10</span></p>
                    <p>Weather: ${d.avgTemp}</p>
                    <p>${d.highlights}</p>`;

                if (filter === "weather") {
                    const tempColor = d.weather >= 9 ? "#ef5350" : d.weather >= 7.5 ? "#ffb74d" : "#66bb6a";
                    popupContent += `<p style="color:${tempColor};font-weight:700;">Weather Score: ${d.weather}/10</p>`;
                }

                if (isTrip) {
                    popupContent += `<p style="color:var(--accent);margin-top:4px;">Trip ${trip.id}: ${trip.dates}</p>`;
                }

                const marker = addMarker(mainMap, d.lat, d.lng, label, markerClass, 26, popupContent);
                mapLayers.destinations.push(marker);

                marker.on("click", () => {
                    sidebar.innerHTML = `
                        <h3>${d.name}, ${d.country}</h3>
                        <p><strong>Region:</strong> ${d.region} &middot; <strong>Temp:</strong> ${d.avgTemp}</p>
                        <p><strong>Scores:</strong> Weather ${d.weather} | Culture ${d.culture} | Access ${d.access} | Value ${d.value}</p>
                        <p><strong>Overall:</strong> ${d.overall}/10</p>
                        <p>${d.highlights}</p>
                        <p><strong>Best months:</strong> ${d.bestMonths.join(", ")}</p>
                        <p><strong>Travel:</strong> ${d.travel}</p>
                        ${isTrip ? `<p style="color:var(--accent);"><strong>Trip ${trip.id}:</strong> ${trip.dates} — ${trip.summary}</p>` : ""}
                    `;
                });
            });

            sidebar.innerHTML = `
                <h3>All 25 Destinations</h3>
                <p>Click any marker for details. Gold markers = planned trips. Blue markers = other top destinations.</p>
                <div class="map-legend">
                    <div class="legend-item"><div class="legend-dot" style="background:#ef5350;"></div> Inverness (Home)</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#ffb74d;"></div> Planned Trip</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#4fc3f7;"></div> Top Destination</div>
                </div>
            `;
        }

        if (filter === "trips" || filter === "all") {
            // Draw trip routes
            TRIPS.forEach((trip, i) => {
                const color = ROUTE_COLORS[i % ROUTE_COLORS.length];
                const arcPoints = generateArc(
                    [INVERNESS.lat, INVERNESS.lng],
                    trip.coords,
                    20
                );

                const line = L.polyline(arcPoints, {
                    color: color,
                    weight: filter === "trips" ? 3 : 2,
                    opacity: filter === "trips" ? 0.85 : 0.5,
                    dashArray: "8 5"
                }).addTo(mainMap);

                line.bindPopup(`<h4>Trip ${trip.id}: ${trip.destination}</h4><p>${trip.dates}</p>`);
                mapLayers.routes.push(line);
            });

            if (filter === "trips") {
                // Only show trip destinations
                TRIPS.forEach((trip, i) => {
                    const marker = addMarker(mainMap, trip.coords[0], trip.coords[1],
                        trip.id.toString(), "trip-route-marker", 26,
                        `<h4>Trip ${trip.id}: ${trip.destination}</h4><p>${trip.dates}</p><p>${trip.summary}</p>`);
                    mapLayers.routes.push(marker);

                    marker.on("click", () => {
                        document.getElementById("map-info").innerHTML = `
                            <h3>Trip ${trip.id}: ${trip.destination}</h3>
                            <p><strong>${trip.dates}</strong> &middot; ${trip.weatherLabel}</p>
                            <p>${trip.summary}</p>
                            <p><strong>Getting there:</strong> ${trip.flights}</p>
                            <p><strong>Budget:</strong> ${trip.budget}</p>
                            <p><strong>Tags:</strong> ${trip.tags.join(", ")}</p>
                        `;
                    });
                });

                sidebar.innerHTML = `
                    <h3>12 Trip Routes</h3>
                    <p>All routes from Inverness. Click a marker or route for details.</p>
                    <div class="map-legend">
                        <div class="legend-item"><div class="legend-dot" style="background:#ef5350;"></div> Inverness</div>
                        ${TRIPS.slice(0, 6).map((t, i) => `<div class="legend-item"><div class="legend-dot" style="background:${ROUTE_COLORS[i]};"></div> ${t.destination}</div>`).join("")}
                    </div>
                `;
            }
        }

        if (filter === "weather") {
            // Add weather circles
            DESTINATIONS.forEach(d => {
                const radius = d.weather * 15000;
                const color = d.weather >= 9 ? "#ef5350" : d.weather >= 7.5 ? "#ffb74d" : "#66bb6a";
                const circle = L.circle([d.lat, d.lng], {
                    radius: radius,
                    color: color,
                    fillColor: color,
                    fillOpacity: 0.15,
                    weight: 1
                }).addTo(mainMap);
                mapLayers.weather.push(circle);
            });

            sidebar.innerHTML = `
                <h3>Weather Overlay (Apr-Aug)</h3>
                <p>Circle size represents weather score. Color indicates temperature range.</p>
                <div class="map-legend">
                    <div class="legend-item"><div class="legend-dot" style="background:#ef5350;"></div> Hot (9+/10)</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#ffb74d;"></div> Warm (7.5-9)</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#66bb6a;"></div> Mild (&lt;7.5)</div>
                </div>
            `;
        }
    }

    // --- Helpers ---
    function addMarker(map, lat, lng, label, className, size, popupHTML) {
        const icon = L.divIcon({
            className: `custom-marker ${className}`,
            html: label,
            iconSize: [size, size]
        });

        const marker = L.marker([lat, lng], { icon: icon }).addTo(map);
        if (popupHTML) marker.bindPopup(popupHTML);
        return marker;
    }

    function generateArc(start, end, numPoints) {
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const t = i / numPoints;
            const lat = start[0] + (end[0] - start[0]) * t;
            const lng = start[1] + (end[1] - start[1]) * t;
            // Add a curve offset based on distance
            const dist = Math.sqrt(
                Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)
            );
            const offset = Math.sin(t * Math.PI) * dist * 0.15;
            points.push([lat + offset, lng]);
        }
        return points;
    }

    // --- Init ---
    renderDestinations();
    renderTrips();
    initDashboard();

})();
