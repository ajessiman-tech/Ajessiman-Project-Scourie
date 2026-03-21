// ============================================================
// Inverness origin point
// ============================================================
const INVERNESS = {
    name: "Inverness",
    country: "Scotland",
    lat: 57.4778,
    lng: -4.2247,
    airport: "INV"
};

// ============================================================
// Top 25 European Destinations (April - August)
// Scores out of 10
// ============================================================
const DESTINATIONS = [
    {
        id: 1,
        name: "Barcelona",
        country: "Spain",
        region: "southern",
        lat: 41.3874,
        lng: 2.1686,
        weather: 9.2,
        culture: 9.5,
        access: 7.5,
        value: 7.0,
        overall: 8.8,
        bestMonths: ["May", "Jun"],
        avgTemp: "18-28°C",
        highlights: "Gaudi architecture, La Rambla, beaches, world-class cuisine, vibrant nightlife",
        travel: "Fly INV→BCN (1 stop via LHR/AMS, ~4-5h). Budget airlines available.",
        image: "url('https://images.unsplash.com/photo-1583422409516-2895a77efed6?w=640&q=80&fit=crop')"
    },
    {
        id: 2,
        name: "Lisbon",
        country: "Portugal",
        region: "southern",
        lat: 38.7223,
        lng: -9.1393,
        weather: 9.0,
        culture: 9.0,
        access: 7.0,
        value: 8.5,
        overall: 8.6,
        bestMonths: ["Apr", "May", "Jun"],
        avgTemp: "16-28°C",
        highlights: "Tram 28, Belem Tower, pasteis de nata, Alfama, Sintra day trip, fado music",
        travel: "Fly INV→LIS (1 stop via LHR/EDI, ~5h). Excellent value destination.",
        image: "url('https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=640&q=80&fit=crop')"
    },
    {
        id: 3,
        name: "Amsterdam",
        country: "Netherlands",
        region: "western",
        lat: 52.3676,
        lng: 4.9041,
        weather: 7.5,
        culture: 9.3,
        access: 9.0,
        value: 6.5,
        overall: 8.5,
        bestMonths: ["Apr", "May"],
        avgTemp: "10-22°C",
        highlights: "Canals, Rijksmuseum, Van Gogh Museum, tulip season (April), cycling culture",
        travel: "Fly INV→AMS direct or 1 stop (~2-3h). KLM operates routes. Top connectivity.",
        image: "url('https://images.unsplash.com/photo-1534351590666-13e3e96b5571?w=640&q=80&fit=crop')"
    },
    {
        id: 4,
        name: "Rome",
        country: "Italy",
        region: "southern",
        lat: 41.9028,
        lng: 12.4964,
        weather: 8.8,
        culture: 10.0,
        access: 7.0,
        value: 7.0,
        overall: 8.5,
        bestMonths: ["Apr", "May"],
        avgTemp: "14-30°C",
        highlights: "Colosseum, Vatican, Pantheon, Trastevere, Roman Forum, gelato, ancient history",
        travel: "Fly INV→FCO (1 stop, ~5-6h). Ryanair via STN often cheapest.",
        image: "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=640&q=80&fit=crop')"
    },
    {
        id: 5,
        name: "Copenhagen",
        country: "Denmark",
        region: "northern",
        lat: 55.6761,
        lng: 12.5683,
        weather: 7.5,
        culture: 9.0,
        access: 8.0,
        value: 5.5,
        overall: 8.2,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "10-22°C",
        highlights: "Tivoli Gardens, Nyhavn, cycling culture, New Nordic cuisine, design district",
        travel: "Fly INV→CPH (1 stop via AMS/LHR, ~4h). Good connections.",
        image: "url('https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=640&q=80&fit=crop')"
    },
    {
        id: 6,
        name: "Dubrovnik",
        country: "Croatia",
        region: "southern",
        lat: 42.6507,
        lng: 18.0944,
        weather: 9.0,
        culture: 8.5,
        access: 6.0,
        value: 7.5,
        overall: 8.1,
        bestMonths: ["May", "Jun"],
        avgTemp: "16-29°C",
        highlights: "Old Town walls, Adriatic coast, Game of Thrones sites, island hopping, seafood",
        travel: "Fly INV→DBV (1-2 stops, ~6-7h). Best via LHR or Split.",
        image: "url('https://images.unsplash.com/photo-1555990793-da11153b2473?w=640&q=80&fit=crop')"
    },
    {
        id: 7,
        name: "Paris",
        country: "France",
        region: "western",
        lat: 48.8566,
        lng: 2.3522,
        weather: 8.0,
        culture: 9.8,
        access: 8.5,
        value: 6.0,
        overall: 8.1,
        bestMonths: ["May", "Jun"],
        avgTemp: "12-25°C",
        highlights: "Eiffel Tower, Louvre, Montmartre, Seine cruises, patisseries, Versailles",
        travel: "Fly INV→CDG/ORY (1 stop via LHR, ~4h). Eurostar option from London.",
        image: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=640&q=80&fit=crop')"
    },
    {
        id: 8,
        name: "Prague",
        country: "Czech Republic",
        region: "central",
        lat: 50.0755,
        lng: 14.4378,
        weather: 7.8,
        culture: 9.0,
        access: 7.5,
        value: 9.0,
        overall: 8.1,
        bestMonths: ["May", "Jun"],
        avgTemp: "11-25°C",
        highlights: "Charles Bridge, Old Town Square, Prague Castle, affordable beer, Gothic architecture",
        travel: "Fly INV→PRG (1 stop via AMS/LHR, ~5h). Very affordable once there.",
        image: "url('https://images.unsplash.com/photo-1541849546-216549ae216d?w=640&q=80&fit=crop')"
    },
    {
        id: 9,
        name: "Edinburgh",
        country: "Scotland",
        region: "northern",
        lat: 55.9533,
        lng: -3.1883,
        weather: 6.5,
        culture: 9.0,
        access: 10.0,
        value: 7.0,
        overall: 8.0,
        bestMonths: ["Jun", "Jul", "Aug"],
        avgTemp: "10-19°C",
        highlights: "Edinburgh Castle, Royal Mile, Arthur's Seat, Fringe Festival (Aug), whisky",
        travel: "Direct train INV→EDI (~3.5h). ScotRail. No flights needed!",
        image: "url('https://images.unsplash.com/photo-1595982842766-3959c2b0e466?w=640&q=80&fit=crop')"
    },
    {
        id: 10,
        name: "Reykjavik",
        country: "Iceland",
        region: "northern",
        lat: 64.1466,
        lng: -21.9426,
        weather: 6.0,
        culture: 8.0,
        access: 7.0,
        value: 5.0,
        overall: 7.9,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "5-14°C",
        highlights: "Midnight sun, Golden Circle, Blue Lagoon, whale watching, unique landscapes",
        travel: "Fly INV→KEF (1 stop via EDI/LHR, ~5h). Icelandair connections.",
        image: "url('https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=640&q=80&fit=crop')"
    },
    {
        id: 11,
        name: "Seville",
        country: "Spain",
        region: "southern",
        lat: 37.3891,
        lng: -5.9845,
        weather: 9.0,
        culture: 9.0,
        access: 6.5,
        value: 8.0,
        overall: 7.9,
        bestMonths: ["Apr", "May"],
        avgTemp: "18-36°C",
        highlights: "Alcazar, flamenco, tapas culture, Plaza de Espana, Feria de Abril",
        travel: "Fly INV→SVQ (1-2 stops, ~6h). Via Madrid or Lisbon.",
        image: "url('https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=640&q=80&fit=crop')"
    },
    {
        id: 12,
        name: "Vienna",
        country: "Austria",
        region: "central",
        lat: 48.2082,
        lng: 16.3738,
        weather: 7.8,
        culture: 9.2,
        access: 7.0,
        value: 7.0,
        overall: 7.8,
        bestMonths: ["May", "Jun"],
        avgTemp: "12-26°C",
        highlights: "Schonbrunn Palace, opera, coffeehouse culture, Belvedere, Danube cycling",
        travel: "Fly INV→VIE (1 stop via AMS/FRA, ~5-6h).",
        image: "url('https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=640&q=80&fit=crop')"
    },
    {
        id: 13,
        name: "Bergen",
        country: "Norway",
        region: "northern",
        lat: 60.3913,
        lng: 5.3221,
        weather: 6.5,
        culture: 7.5,
        access: 7.5,
        value: 5.0,
        overall: 7.7,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "8-18°C",
        highlights: "Fjords, Bryggen wharf, Floibanen funicular, hiking, seafood market",
        travel: "Fly INV→BGO (1 stop via AMS/OSL, ~4-5h). Norway in a Nutshell possible.",
        image: "url('https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=640&q=80&fit=crop')"
    },
    {
        id: 14,
        name: "Budapest",
        country: "Hungary",
        region: "central",
        lat: 47.4979,
        lng: 19.0402,
        weather: 8.0,
        culture: 8.5,
        access: 7.0,
        value: 9.0,
        overall: 7.7,
        bestMonths: ["May", "Jun"],
        avgTemp: "13-27°C",
        highlights: "Thermal baths, Parliament building, ruin bars, Danube cruises, Castle Hill",
        travel: "Fly INV→BUD (1 stop via LHR/AMS, ~5-6h). Very affordable.",
        image: "url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=640&q=80&fit=crop')"
    },
    {
        id: 15,
        name: "Bruges",
        country: "Belgium",
        region: "western",
        lat: 51.2094,
        lng: 3.2247,
        weather: 7.0,
        culture: 8.5,
        access: 8.0,
        value: 7.0,
        overall: 7.6,
        bestMonths: ["May", "Jun"],
        avgTemp: "10-21°C",
        highlights: "Medieval center, chocolate, canals, beer culture, Market Square, lace-making",
        travel: "Fly INV→BRU (1 stop, ~4h) then 1h train. Or via AMS.",
        image: "url('https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=640&q=80&fit=crop')"
    },
    {
        id: 16,
        name: "Cinque Terre",
        country: "Italy",
        region: "southern",
        lat: 44.1461,
        lng: 9.6439,
        weather: 8.5,
        culture: 8.0,
        access: 6.0,
        value: 7.0,
        overall: 7.5,
        bestMonths: ["May", "Jun"],
        avgTemp: "15-27°C",
        highlights: "Five colorful villages, hiking trails, Mediterranean views, seafood, limoncello",
        travel: "Fly INV→GEN or PSA (1-2 stops, ~6-7h) then train to villages.",
        image: "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=640&q=80&fit=crop')"
    },
    {
        id: 17,
        name: "Dublin",
        country: "Ireland",
        region: "western",
        lat: 53.3498,
        lng: -6.2603,
        weather: 6.5,
        culture: 8.5,
        access: 9.0,
        value: 7.0,
        overall: 7.5,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "10-19°C",
        highlights: "Temple Bar, Trinity College, Guinness Storehouse, literary pubs, coastal walks",
        travel: "Fly INV→DUB (1 stop via EDI, ~3h). Ryanair, very cheap.",
        image: "url('https://images.unsplash.com/photo-1549918864-48ac978761a4?w=640&q=80&fit=crop')"
    },
    {
        id: 18,
        name: "Split",
        country: "Croatia",
        region: "southern",
        lat: 43.5081,
        lng: 16.4402,
        weather: 9.0,
        culture: 8.0,
        access: 6.0,
        value: 8.0,
        overall: 7.5,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "17-30°C",
        highlights: "Diocletian's Palace, island ferries to Hvar & Brac, Adriatic beaches, Krka Falls",
        travel: "Fly INV→SPU (1-2 stops, ~6-7h). Via London or Munich.",
        image: "url('https://images.unsplash.com/photo-1555990538-1e7d0e094978?w=640&q=80&fit=crop')"
    },
    {
        id: 19,
        name: "Stockholm",
        country: "Sweden",
        region: "northern",
        lat: 59.3293,
        lng: 18.0686,
        weather: 7.0,
        culture: 8.5,
        access: 7.5,
        value: 5.5,
        overall: 7.4,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "10-22°C",
        highlights: "Gamla Stan, Vasa Museum, archipelago, midsummer, ABBA Museum, Nordic design",
        travel: "Fly INV→ARN (1 stop via AMS/LHR, ~5h). SAS connections.",
        image: "url('https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=640&q=80&fit=crop')"
    },
    {
        id: 20,
        name: "Santorini",
        country: "Greece",
        region: "southern",
        lat: 36.3932,
        lng: 25.4615,
        weather: 9.5,
        culture: 7.5,
        access: 5.5,
        value: 6.0,
        overall: 7.3,
        bestMonths: ["May", "Jun"],
        avgTemp: "18-29°C",
        highlights: "Caldera views, Oia sunset, volcanic beaches, wine tasting, blue-domed churches",
        travel: "Fly INV→JTR (2 stops, ~8-9h). Via Athens. Book early for summer.",
        image: "url('https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=640&q=80&fit=crop')"
    },
    {
        id: 21,
        name: "Krakow",
        country: "Poland",
        region: "eastern",
        lat: 50.0647,
        lng: 19.9450,
        weather: 7.5,
        culture: 8.5,
        access: 7.0,
        value: 9.5,
        overall: 7.3,
        bestMonths: ["May", "Jun"],
        avgTemp: "10-24°C",
        highlights: "Wawel Castle, Old Town, Wieliczka Salt Mine, vibrant food scene, Kazimierz district",
        travel: "Fly INV→KRK (1 stop via LHR, ~5h). Ryanair from Edinburgh.",
        image: "url('https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=640&q=80&fit=crop')"
    },
    {
        id: 22,
        name: "San Sebastian",
        country: "Spain",
        region: "southern",
        lat: 43.3183,
        lng: -1.9812,
        weather: 7.5,
        culture: 8.5,
        access: 6.5,
        value: 7.0,
        overall: 7.2,
        bestMonths: ["Jun", "Jul", "Aug"],
        avgTemp: "14-24°C",
        highlights: "Pintxos bars, La Concha beach, Basque cuisine, surf culture, old town",
        travel: "Fly INV→EAS or BIQ (1-2 stops, ~5-6h). Via Paris or Madrid.",
        image: "url('https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=640&q=80&fit=crop')"
    },
    {
        id: 23,
        name: "Tallinn",
        country: "Estonia",
        region: "eastern",
        lat: 59.4370,
        lng: 24.7536,
        weather: 7.0,
        culture: 7.5,
        access: 6.5,
        value: 9.0,
        overall: 7.1,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "8-21°C",
        highlights: "Medieval Old Town, digital nomad hub, craft beer, Kadriorg Park, Baltic charm",
        travel: "Fly INV→TLL (1-2 stops via HEL/RIX, ~6h).",
        image: "url('https://images.unsplash.com/photo-1530538095376-a4936b35b5f0?w=640&q=80&fit=crop')"
    },
    {
        id: 24,
        name: "Nice",
        country: "France",
        region: "southern",
        lat: 43.7102,
        lng: 7.2620,
        weather: 9.0,
        culture: 8.0,
        access: 7.0,
        value: 6.5,
        overall: 7.1,
        bestMonths: ["May", "Jun"],
        avgTemp: "15-27°C",
        highlights: "Promenade des Anglais, Old Town, Matisse Museum, day trips to Monaco and Cannes",
        travel: "Fly INV→NCE (1 stop via LHR/CDG, ~4-5h). easyJet options.",
        image: "url('https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=640&q=80&fit=crop')"
    },
    {
        id: 25,
        name: "Munich",
        country: "Germany",
        region: "central",
        lat: 48.1351,
        lng: 11.5820,
        weather: 7.5,
        culture: 8.5,
        access: 8.0,
        value: 6.5,
        overall: 7.0,
        bestMonths: ["Jun", "Jul"],
        avgTemp: "11-24°C",
        highlights: "Beer gardens, Marienplatz, English Garden, day trips to Neuschwanstein, BMW World",
        travel: "Fly INV→MUC (1 stop via AMS/FRA, ~4-5h). Lufthansa hub.",
        image: "url('https://images.unsplash.com/photo-1595867818082-083862f3d630?w=640&q=80&fit=crop')"
    }
];

// ============================================================
// 12 Weekend Trips (Thu-Sun), April - August
// All originating from Inverness, Scotland
// ============================================================
const TRIPS = [
    {
        id: 1,
        destination: "Amsterdam",
        destId: 3,
        month: "apr",
        dates: "Thu 3 Apr – Sun 6 Apr",
        weatherBadge: "mild",
        weatherLabel: "10-15°C",
        summary: "Tulip season in the Netherlands — catch Keukenhof gardens at peak bloom, cruise the canals, and explore world-class museums.",
        tags: ["Tulips", "Museums", "Canals", "Cycling"],
        itinerary: [
            {
                day: "Thursday – Travel & Canals",
                detail: "Morning flight from Inverness to Amsterdam Schiphol (via Edinburgh, arr. ~13:00). Check into hotel in Jordaan district. Afternoon canal cruise through the historic center. Evening: dinner at a traditional brown cafe in the Nine Streets area."
            },
            {
                day: "Friday – Keukenhof & Culture",
                detail: "Full-day excursion to Keukenhof Gardens (peak tulip season in early April). Over 7 million bulbs in bloom across 80 acres. Return to Amsterdam by late afternoon. Evening: visit the Rijksmuseum for extended Friday hours, then dinner in De Pijp neighborhood."
            },
            {
                day: "Saturday – Museums & Markets",
                detail: "Morning at the Van Gogh Museum (book timed entry). Walk through Vondelpark. Afternoon: Albert Cuyp Market for stroopwafels and local cheese. Visit the Anne Frank House (pre-booked). Evening: drinks at A'DAM Lookout tower for sunset panorama."
            },
            {
                day: "Sunday – Bikes & Departure",
                detail: "Rent bikes for a morning ride to Waterlooplein flea market and Eastern Docklands. Brunch at a canal-side cafe. Afternoon flight back to Inverness via Edinburgh, arriving by evening."
            }
        ],
        flights: "INV → AMS via EDI | ~3.5h total",
        budget: "£450-600 pp",
        coords: [52.3676, 4.9041]
    },
    {
        id: 2,
        destination: "Seville",
        destId: 11,
        month: "apr",
        dates: "Thu 17 Apr – Sun 20 Apr",
        weatherBadge: "warm",
        weatherLabel: "22-28°C",
        summary: "Experience Seville's legendary Feria de Abril atmosphere, flamenco, and Moorish architecture in the Andalusian spring warmth.",
        tags: ["Flamenco", "Tapas", "Architecture", "Feria"],
        itinerary: [
            {
                day: "Thursday – Arrival & Alcazar",
                detail: "Morning flight INV → SVQ (via London Gatwick, arr. ~14:30). Check into Santa Cruz quarter hotel. Late afternoon visit to the Real Alcazar — Moorish palace and gardens in golden light. Evening tapas crawl through narrow streets: jamón ibérico, salmorejo, and local sherry."
            },
            {
                day: "Friday – Cathedral & Flamenco",
                detail: "Morning: Seville Cathedral and climb La Giralda tower for city views. Walk through Barrio Santa Cruz. Afternoon: Plaza de España — rent a rowing boat on the canal. Evening: authentic flamenco show at an intimate tablao in Triana neighborhood."
            },
            {
                day: "Saturday – Markets & River",
                detail: "Morning at Mercado de Triana for breakfast and local produce. Cross the Guadalquivir to explore Triana's ceramic workshops. Afternoon: Metropol Parasol (Las Setas) for rooftop views. Bike ride along the river. Evening: rooftop dinner overlooking the cathedral."
            },
            {
                day: "Sunday – Departure",
                detail: "Relaxed morning: coffee in Plaza de la Encarnación, pick up olive oil and local sweets. Midday flight SVQ → INV (via London), arriving evening."
            }
        ],
        flights: "INV → SVQ via LGW | ~5.5h total",
        budget: "£400-550 pp",
        coords: [37.3891, -5.9845]
    },
    {
        id: 3,
        destination: "Rome",
        destId: 4,
        month: "may",
        dates: "Thu 1 May – Sun 4 May",
        weatherBadge: "warm",
        weatherLabel: "18-24°C",
        summary: "Ancient history meets spring weather — explore the Colosseum, Vatican, and Rome's timeless neighborhoods before the summer crowds.",
        tags: ["History", "Vatican", "Cuisine", "Architecture"],
        itinerary: [
            {
                day: "Thursday – Arrival & Ancient Rome",
                detail: "Morning flight INV → FCO (via London Heathrow, arr. ~14:00). Leonardo Express to Termini, then hotel in Monti district. Afternoon: Colosseum and Roman Forum (pre-booked skip-the-line). Evening: aperitivo in Monti, dinner in Trastevere — cacio e pepe at a traditional trattoria."
            },
            {
                day: "Friday – Vatican Day",
                detail: "Early entry to Vatican Museums and Sistine Chapel (book 8am slot). St. Peter's Basilica and dome climb for panoramic views. Lunch near Castel Sant'Angelo. Afternoon: Piazza Navona, Pantheon, and gelato at Giolitti. Evening: dinner near Campo de' Fiori."
            },
            {
                day: "Saturday – Neighborhoods & Food",
                detail: "Morning: Borghese Gallery (pre-booked). Stroll through Villa Borghese gardens. Lunch in Testaccio (Rome's food district). Afternoon: Spanish Steps, Trevi Fountain (coin toss!), Via del Corso shopping. Evening: pizza al taglio in Prati, sunset from Pincio terrace."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning: Trastevere flea market at Porta Portese. Final espresso and cornetto. Midday flight FCO → INV via London, arriving evening."
            }
        ],
        flights: "INV → FCO via LHR | ~5h total",
        budget: "£500-700 pp",
        coords: [41.9028, 12.4964]
    },
    {
        id: 4,
        destination: "Lisbon",
        destId: 2,
        month: "may",
        dates: "Thu 15 May – Sun 18 May",
        weatherBadge: "warm",
        weatherLabel: "18-23°C",
        summary: "Lisbon in mid-May — perfect weather for climbing its seven hills, riding Tram 28, and tasting pastéis de nata at their birthplace.",
        tags: ["Tram 28", "Pastéis de Nata", "Fado", "Sintra"],
        itinerary: [
            {
                day: "Thursday – Arrival & Alfama",
                detail: "Morning flight INV → LIS (via Edinburgh, arr. ~14:30). Metro to Baixa-Chiado hotel. Afternoon: wander the Alfama district — Lisbon's oldest neighborhood with Moorish lanes and viewpoints. Sunset from Miradouro da Graça. Evening: fado music dinner in Alfama."
            },
            {
                day: "Friday – Sintra Day Trip",
                detail: "Train to Sintra (40 min). Visit Pena Palace (fairytale hilltop castle) and Quinta da Regaleira (mystical gardens and initiation well). Lunch in Sintra village. Optional: Cabo da Roca — westernmost point of continental Europe. Return to Lisbon for dinner in Bairro Alto."
            },
            {
                day: "Saturday – Belém & LX Factory",
                detail: "Morning: Tram 28 ride across the city. Walk to Belém — Jerónimos Monastery, Belém Tower, and pastéis de nata at Pastéis de Belém (the original bakery). Afternoon: LX Factory for indie shops and lunch. Evening: Time Out Market for dinner — Lisbon's best chefs under one roof."
            },
            {
                day: "Sunday – Markets & Departure",
                detail: "Morning: Feira da Ladra flea market. Final coffee at a miradouro. Pack port wine and sardine tins as souvenirs. Afternoon flight LIS → INV via Edinburgh, arriving evening."
            }
        ],
        flights: "INV → LIS via EDI | ~5h total",
        budget: "£380-520 pp",
        coords: [38.7223, -9.1393]
    },
    {
        id: 5,
        destination: "Copenhagen",
        destId: 5,
        month: "jun",
        dates: "Thu 5 Jun – Sun 8 Jun",
        weatherBadge: "mild",
        weatherLabel: "14-20°C",
        summary: "Copenhagen in early summer — long daylight hours, Tivoli Gardens, and the world's best New Nordic dining scene.",
        tags: ["Nordic Cuisine", "Tivoli", "Cycling", "Design"],
        itinerary: [
            {
                day: "Thursday – Arrival & Nyhavn",
                detail: "Morning flight INV → CPH (via Amsterdam, arr. ~14:00). Check into Vesterbro district hotel. Afternoon: colourful Nyhavn waterfront, Amalienborg Palace and changing of the guard. Evening: dinner at Torvehallerne food market — smørrebrød and craft beer."
            },
            {
                day: "Friday – Tivoli & Christiania",
                detail: "Morning: rent bikes and ride along the harbour to The Little Mermaid and Kastellet fortress. Lunch in Christianshavn. Afternoon: Freetown Christiania — Copenhagen's alternative community. Evening: Tivoli Gardens — rides, concerts, and magical lighting."
            },
            {
                day: "Saturday – Design & Cuisine",
                detail: "Morning: Designmuseum Danmark and the Round Tower. Walk through the Latin Quarter. Afternoon: Superkilen park in Nørrebro, then boutique shopping in the Strøget area. Evening: splurge dinner at a New Nordic restaurant (book ahead), then rooftop bar at Nimb."
            },
            {
                day: "Sunday – Canal & Departure",
                detail: "Morning canal boat tour through Christianshavn. Brunch at a Vesterbro cafe with avocado toast and Danish pastries. Afternoon flight CPH → INV via Amsterdam, arriving evening."
            }
        ],
        flights: "INV → CPH via AMS | ~4.5h total",
        budget: "£550-750 pp",
        coords: [55.6761, 12.5683]
    },
    {
        id: 6,
        destination: "Barcelona",
        destId: 1,
        month: "jun",
        dates: "Thu 19 Jun – Sun 22 Jun",
        weatherBadge: "hot",
        weatherLabel: "24-30°C",
        summary: "Barcelona at the start of summer — Gaudi masterpieces, beach life, and long Mediterranean evenings with tapas and cava.",
        tags: ["Gaudi", "Beach", "Tapas", "Nightlife"],
        itinerary: [
            {
                day: "Thursday – Arrival & Gothic Quarter",
                detail: "Morning flight INV → BCN (via London Heathrow, arr. ~14:30). Metro to Eixample hotel. Late afternoon: Gothic Quarter — Barcelona Cathedral, Plaça Reial, and narrow medieval streets. Evening: tapas on Carrer de Blai in Poble Sec."
            },
            {
                day: "Friday – Gaudi Day",
                detail: "Morning: Sagrada Familia (pre-booked, 9am entry) — Gaudi's breathtaking unfinished basilica. Walk Passeig de Gràcia to see Casa Batlló and La Pedrera facades. Lunch in Gràcia neighborhood. Afternoon: Park Güell for mosaic benches and city panorama. Evening: La Boqueria market, then dinner on the harbour."
            },
            {
                day: "Saturday – Beach & Montjuïc",
                detail: "Morning at Barceloneta Beach — swim, sangria, and people-watch. Lunch of paella at a chiringuito (beach bar). Afternoon: cable car to Montjuïc — Fundació Joan Miró art museum and Jardí Botànic. Evening: rooftop drinks in El Born, then live music in Raval."
            },
            {
                day: "Sunday – Markets & Departure",
                detail: "Morning: El Born neighbourhood — Picasso Museum (if time) or Santa Caterina Market. Cortado and croissant at a local bakery. Midday flight BCN → INV via London, arriving evening."
            }
        ],
        flights: "INV → BCN via LHR | ~4.5h total",
        budget: "£450-650 pp",
        coords: [41.3874, 2.1686]
    },
    {
        id: 7,
        destination: "Dubrovnik",
        destId: 6,
        month: "jun",
        dates: "Thu 26 Jun – Sun 29 Jun",
        weatherBadge: "hot",
        weatherLabel: "24-29°C",
        summary: "Walk the walls of Dubrovnik's Old Town, kayak the Adriatic, and take a boat to Lokrum Island — the Pearl of the Adriatic in perfect weather.",
        tags: ["Old Town", "Adriatic", "Kayaking", "History"],
        itinerary: [
            {
                day: "Thursday – Arrival & Old Town",
                detail: "Morning flight INV → DBV (via London Gatwick, arr. ~15:00). Taxi to Old Town area hotel. Late afternoon: enter through Pile Gate, walk the Stradun, and discover hidden alleyways. Sunset drinks at Buža Bar — a cliff-side bar with Adriatic views."
            },
            {
                day: "Friday – City Walls & Lokrum",
                detail: "Early morning: walk the full 2km Old Town walls (go early to beat heat). Visit Rector's Palace and Franciscan Monastery. Afternoon: ferry to Lokrum Island — botanical gardens, peacocks, swimming in the Dead Sea (salt lake). Evening: fresh seafood dinner overlooking the harbour."
            },
            {
                day: "Saturday – Kayaking & Cable Car",
                detail: "Morning: sea kayaking tour around the city walls and to Betina Cave beach. Lunch at a konoba (tavern) in the old port. Afternoon: cable car to Mount Srđ for stunning panoramic views over the coast and islands. Evening: wine bar in Old Town, then dinner at a family-run Dalmatian restaurant."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning swim at Banje Beach. Coffee on the Stradun. Browse for lavender souvenirs. Midday flight DBV → INV via London, arriving evening."
            }
        ],
        flights: "INV → DBV via LGW | ~6h total",
        budget: "£500-700 pp",
        coords: [42.6507, 18.0944]
    },
    {
        id: 8,
        destination: "Reykjavik",
        destId: 10,
        month: "jul",
        dates: "Thu 3 Jul – Sun 6 Jul",
        weatherBadge: "mild",
        weatherLabel: "10-15°C",
        summary: "Experience Iceland's midnight sun — the Golden Circle, Blue Lagoon, whale watching, and landscapes unlike anywhere else in Europe.",
        tags: ["Midnight Sun", "Golden Circle", "Blue Lagoon", "Whales"],
        itinerary: [
            {
                day: "Thursday – Arrival & City",
                detail: "Morning flight INV → KEF (via Edinburgh, arr. ~13:00). Flybus to Reykjavik centre. Afternoon: explore Hallgrímskirkja church, the colourful tin houses, and Harpa concert hall. Evening: dinner on Laugavegur main street — try lamb soup and Icelandic fish. Walk at midnight — it never gets dark!"
            },
            {
                day: "Friday – Golden Circle",
                detail: "Full-day Golden Circle tour: Þingvellir National Park (tectonic plate boundary, UNESCO site), Geysir geothermal area (watch Strokkur erupt every 5-8 minutes), and Gullfoss waterfall (thundering two-tiered cascade). Optional: Silfra snorkelling between continental plates. Return to Reykjavik for seafood dinner."
            },
            {
                day: "Saturday – Whales & Blue Lagoon",
                detail: "Morning: whale watching tour from Reykjavik Old Harbour (humpbacks and minke whales common in July). Lunch at Grandi Mathöll food hall. Afternoon: Blue Lagoon geothermal spa — soak in milky-blue water surrounded by lava fields. Evening: Icelandic craft beer tasting and hot dog from Bæjarins Beztu."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning: free time for Reykjavik flea market (Kolaportið) or Sun Voyager sculpture. Stock up on Icelandic wool and chocolate. Midday flight KEF → INV via Edinburgh, arriving evening."
            }
        ],
        flights: "INV → KEF via EDI | ~5h total",
        budget: "£650-900 pp",
        coords: [64.1466, -21.9426]
    },
    {
        id: 9,
        destination: "Prague",
        destId: 8,
        month: "jul",
        dates: "Thu 17 Jul – Sun 20 Jul",
        weatherBadge: "warm",
        weatherLabel: "20-27°C",
        summary: "Prague in summer — Gothic spires, cobblestone lanes, the world's best beer for the world's cheapest prices, and a castle to rival any.",
        tags: ["Beer", "Castle", "Gothic", "Affordable"],
        itinerary: [
            {
                day: "Thursday – Arrival & Old Town",
                detail: "Morning flight INV → PRG (via Amsterdam, arr. ~14:00). Metro to Old Town hotel. Afternoon: Old Town Square — Astronomical Clock (on the hour), Týn Church, and Jan Hus memorial. Walk to the Jewish Quarter (Josefov). Evening: traditional Czech dinner — svíčková (beef sirloin) and Pilsner Urquell at a beer hall."
            },
            {
                day: "Friday – Castle & Malá Strana",
                detail: "Morning: Prague Castle complex — St. Vitus Cathedral (stunning Gothic interior), Golden Lane, and Old Royal Palace. Walk down through gardens to Malá Strana. Lunch at a riverside cafe. Afternoon: Charles Bridge (800 years old, 30 Baroque statues), John Lennon Wall. Evening: classical concert in a church or jazz club."
            },
            {
                day: "Saturday – Beer & Neighborhoods",
                detail: "Morning: Vyšehrad fortress for river views and fewer crowds. Walk through Vinohrady — Prague's trendy neighborhood with art nouveau buildings. Lunch: local market. Afternoon: brewery tour (Staropramen or craft microbrewery). Evening: rooftop bar, then dinner in Žižkov — Prague's bohemian quarter."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning: Petřín Hill — funicular and mini Eiffel Tower viewpoint. Final coffee and trdelník (chimney cake). Midday flight PRG → INV via Amsterdam, arriving evening."
            }
        ],
        flights: "INV → PRG via AMS | ~5h total",
        budget: "£350-480 pp",
        coords: [50.0755, 14.4378]
    },
    {
        id: 10,
        destination: "Bergen",
        destId: 13,
        month: "jul",
        dates: "Thu 31 Jul – Sun 3 Aug",
        weatherBadge: "mild",
        weatherLabel: "14-19°C",
        summary: "Norwegian fjords at their summer best — Bryggen wharf, a fjord cruise, mountain hiking, and fresh seafood at the fish market.",
        tags: ["Fjords", "Hiking", "Bryggen", "Seafood"],
        itinerary: [
            {
                day: "Thursday – Arrival & Bryggen",
                detail: "Morning flight INV → BGO (via Amsterdam, arr. ~14:30). Walk to Bryggen district hotel. Afternoon: explore the UNESCO-listed Bryggen wooden wharf — Hanseatic Museum and narrow alleyways. Evening: Bergen Fish Market for king crab, salmon, and shrimp. Sunset from Fløibanen funicular (light until 23:00 in July)."
            },
            {
                day: "Friday – Fjord Cruise",
                detail: "Full-day 'Norway in a Nutshell' tour: scenic train to Voss, bus down Stalheimskleiva road, boat cruise through Nærøyfjord (UNESCO). Some of the most dramatic scenery in Europe — waterfalls, cliffs, and emerald water. Return to Bergen by evening for dinner at a harbour restaurant."
            },
            {
                day: "Saturday – Hiking & Culture",
                detail: "Morning: hike to the top of Mount Ulriken (643m) or take the cable car — panoramic views of the city, fjords, and mountains. Lunch at the summit cafe. Afternoon: KODE art museums or Edvard Grieg Museum (Troldhaugen). Evening: brewery visit and farewell seafood dinner."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning: walk around Lille Lungegårdsvann lake. Final coffee and skillingbolle (cinnamon bun) at a bakery. Midday flight BGO → INV via Amsterdam, arriving evening."
            }
        ],
        flights: "INV → BGO via AMS | ~4.5h total",
        budget: "£600-850 pp",
        coords: [60.3913, 5.3221]
    },
    {
        id: 11,
        destination: "Edinburgh",
        destId: 9,
        month: "aug",
        dates: "Thu 7 Aug – Sun 10 Aug",
        weatherBadge: "mild",
        weatherLabel: "13-19°C",
        summary: "The Edinburgh Festival Fringe — the world's largest arts festival. Comedy, theatre, street performers, and the city at its most electric.",
        tags: ["Fringe Festival", "Comedy", "Castle", "Whisky"],
        itinerary: [
            {
                day: "Thursday – Arrival & Royal Mile",
                detail: "ScotRail train from Inverness to Edinburgh Waverley (~3.5h, scenic Highland route). Check into Old Town hotel. Afternoon: Royal Mile — festival atmosphere, street performers, and pop-up venues everywhere. Pick up a Fringe programme and book shows. Evening: a comedy show and late-night cabaret."
            },
            {
                day: "Friday – Fringe & Castle",
                detail: "Morning: Edinburgh Castle (pre-booked). Afternoon: 2-3 Fringe shows — mix of free and ticketed comedy, theatre, and spoken word. Walk through the Grassmarket. Evening: a bigger-name comedy show at a main venue, then drinks on George Street."
            },
            {
                day: "Saturday – Arthur's Seat & Shows",
                detail: "Morning: climb Arthur's Seat (251m) for the best views over Edinburgh and the Firth of Forth. Brunch in Stockbridge. Afternoon: more Fringe shows — try something experimental. Visit the Scotch Whisky Experience. Evening: late show at The Pleasance, then live music on Cowgate."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning: Calton Hill for final photos. Dean Village walk. Lunch in New Town. Afternoon ScotRail train back to Inverness, arriving by evening."
            }
        ],
        flights: "ScotRail train INV → EDI | 3.5h direct",
        budget: "£300-500 pp",
        coords: [55.9533, -3.1883]
    },
    {
        id: 12,
        destination: "Budapest",
        destId: 14,
        month: "aug",
        dates: "Thu 21 Aug – Sun 24 Aug",
        weatherBadge: "hot",
        weatherLabel: "22-30°C",
        summary: "Budapest in late August — thermal baths, ruin bars, Danube cruises, and the spectacular Parliament building. Incredible value.",
        tags: ["Thermal Baths", "Ruin Bars", "Danube", "Budget-Friendly"],
        itinerary: [
            {
                day: "Thursday – Arrival & Pest Side",
                detail: "Morning flight INV → BUD (via Amsterdam, arr. ~14:30). Metro to District VII hotel. Afternoon: walk Andrássy Avenue (UNESCO) to Heroes' Square. City Park and Vajdahunyad Castle. Evening: ruin bar crawl starting at Szimpla Kert — the original and best ruin bar, set in a former factory with eclectic decor."
            },
            {
                day: "Friday – Buda & Baths",
                detail: "Morning: cross the Chain Bridge to Buda Castle and Fisherman's Bastion — fairy-tale turrets with Parliament views. Matthias Church. Lunch in the Castle District. Afternoon: Széchenyi Thermal Baths — outdoor pools in the grandest bath house in Europe, dating to 1913. Evening: Danube river cruise with dinner as the city lights up."
            },
            {
                day: "Saturday – Markets & Culture",
                detail: "Morning: Great Market Hall — paprika, langos (fried dough), and Hungarian salami. Walk along the Danube promenade and Shoes on the Danube memorial. Afternoon: Hungarian Parliament tour (pre-booked, stunning Gothic Revival interior). Jewish Quarter walk. Evening: traditional goulash dinner, then live jazz or folk music."
            },
            {
                day: "Sunday – Departure",
                detail: "Morning: Gellért Hill for the best panoramic views of the city. Final coffee and chimney cake. Midday flight BUD → INV via Amsterdam, arriving evening."
            }
        ],
        flights: "INV → BUD via AMS | ~5.5h total",
        budget: "£350-500 pp",
        coords: [47.4979, 19.0402]
    }
];

// ============================================================
// Route colors for map display
// ============================================================
const ROUTE_COLORS = [
    '#4fc3f7', '#ffb74d', '#66bb6a', '#ef5350',
    '#ab47bc', '#26c6da', '#ffa726', '#7e57c2',
    '#42a5f5', '#ec407a', '#26a69a', '#d4e157'
];
