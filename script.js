// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        if (isLight) {
            themeIcon.classList.replace('ph-sun', 'ph-moon');
        } else {
            themeIcon.classList.replace('ph-moon', 'ph-sun');
        }
    });
}

// Property Database
const properties = [
    // --- PUNE ---
    {
        id: 1,
        title: "Cozy Bed at TravoTale Hostel",
        location: "Koregaon Park, Pune",
        price: 1200,
        type: "small-room",
        rating: 4.6,
        beds: 1,
        baths: 1,
        sqft: 180,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555854877-c010d93160e1?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: false,
        description: "A comfortable single bunk bed inside the highly-rated TravoTale Hostel & Co-Work in Koregaon Park. Perfect for solo backpackers, freelancers, and digital nomads who want dynamic co-working zones, regular social events, a communal kitchen, and proximity to Pune's best cafes and transport links.",
        amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'Coworking Space', 'Lockers & Key', 'Shared Kitchenette', 'Rooftop Lounge']
    },
    {
        id: 2,
        title: "Budget Studio near Wagholi",
        location: "Wagholi, Pune",
        price: 1600,
        type: "flat",
        rating: 4.2,
        beds: 1,
        baths: 1,
        sqft: 350,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        featured: false,
        description: "A budget-friendly 1 RK flat located close to the Wagholi IT corridor. Clean, secure, and compact, this studio features an attached bathroom, induction cooktop, and modern high-speed internet. Ideal for students or junior IT professionals looking for an affordable stay.",
        amenities: ['Standard Wi-Fi', 'Air Conditioning', 'Induction Cooktop', 'Geyser', 'Secured Access', 'Rooftop Access']
    },
    {
        id: 3,
        title: "1 BHK Suite at PAJASA Serviced Suites",
        location: "Koregaon Park, Pune",
        price: 3800,
        type: "flat",
        rating: 4.7,
        beds: 1,
        baths: 1,
        sqft: 650,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        featured: true,
        description: "An elegant and fully furnished 1 BHK business suite managed by PAJASA in prime Koregaon Park. Features a spacious living area, fully loaded modular kitchen, split AC, and flat-screen TV. Perfect for short-to-medium corporate stays close to top-tier dining spots.",
        amenities: ['Gigabit Wi-Fi', 'Air Conditioning', 'Fully Loaded Kitchen', 'Daily Housekeeping', '24/7 Power Backup', 'Fitness Center']
    },
    {
        id: 4,
        title: "2 BHK Executive Suite at Trusted Stay",
        location: "Kalyani Nagar, Pune",
        price: 5200,
        type: "flat",
        rating: 4.8,
        beds: 2,
        baths: 2,
        sqft: 950,
        image: "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        featured: true,
        description: "A premium 2 BHK corporate serviced apartment by Trusted Stay in Kalyani Nagar. Ideal for corporate groups or families, this apartment offers two large bedrooms with en-suite baths, dynamic dining/living areas, complimentary breakfast, and daily housekeeping.",
        amenities: ['Complimentary Breakfast', 'High-speed Wi-Fi', 'Attached Bathrooms', 'Fully Equipped Kitchen', '24/7 Security', 'Free Parking']
    },
    {
        id: 5,
        title: "Cozy Room at O Hotel",
        location: "Koregaon Park, Pune",
        price: 4800,
        type: "hotel",
        rating: 4.7,
        beds: 1,
        baths: 1,
        sqft: 280,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: true,
        description: "A compact yet masterfully styled hotel room inside the prestigious boutique O Hotel Pune. Features custom modern art, plush queen bed, premium wood floorboards, and a glass-enclosed rain shower.",
        amenities: ['Rooftop Restaurant', 'Free Wi-Fi', 'Swimming Pool', '24/7 Room Service', 'Spa Access', 'Mini Bar']
    },
    {
        id: 6,
        title: "Luxury Cabin at Della Resorts",
        location: "Lonavala, near Pune",
        price: 13500,
        type: "resort",
        rating: 4.9,
        beds: 2,
        baths: 2,
        sqft: 850,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        featured: true,
        description: "An outstanding 2 BHK luxury cabin at Della Resorts Lonavala. Features signature upscale furnishings, custom aromatherapy setups, massive windows with valley views, and access to Della's extreme adventure park and heated pool.",
        amenities: ['24-Hour Spa', 'Valet Parking', 'Extreme Adventure Pass', 'Valley View Deck', '5 Multi-Cuisine Cafes', 'Heated Jacuzzi']
    },
    {
        id: 7,
        title: "Budget Room at Shivajinagar Lodge",
        location: "Shivajinagar, Pune",
        price: 1400,
        type: "lodge",
        rating: 4.1,
        beds: 1,
        baths: 1,
        sqft: 160,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: false,
        description: "A functional, exceptionally clean budget single room in a transit lodge right near the Shivajinagar Railway Station. Ideal for short stays, backpackers, or travelers on the move looking for safety and essential comforts.",
        amenities: ['Standard Wi-Fi', 'Attached Bathroom', '24/7 Reception', 'Purified Drinking Water', 'Ceiling Fan', 'Luggage Storage']
    },
    {
        id: 8,
        title: "Premium 1 BHK Flat in Hinjewadi",
        location: "Hinjewadi, Pune",
        price: 2800,
        type: "flat",
        rating: 4.5,
        beds: 1,
        baths: 1,
        sqft: 680,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        featured: false,
        description: "Located in the heart of Pune's massive Hinjewadi IT Hub, this premium 1 BHK flat is designed for tech professionals. Features clean modern furnishings, a dedicated work desk with office chair, super-fast Wi-Fi, and easy access to major tech parks.",
        amenities: ['Gigabit Wi-Fi', 'AC & Ergonomic Workspace', 'Fully Equipped Kitchen', '24/7 Power Backup', 'Parking Space', 'Laundromat']
    },
    {
        id: 17,
        title: "Premium Corporate Studio, Magarpatta",
        location: "Magarpatta, Pune",
        price: 3500,
        type: "flat",
        rating: 4.6,
        beds: 1,
        baths: 1,
        sqft: 450,
        image: "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        featured: false,
        description: "Modern corporate studio inside Magarpatta Cybercity. Walking distance to major IT offices.",
        amenities: ['Wi-Fi', 'Gym Access', 'Smart TV', 'Balcony']
    },
    {
        id: 18,
        title: "Serene Nature Resort",
        location: "Mulshi, Pune",
        price: 9500,
        type: "resort",
        rating: 4.8,
        beds: 2,
        baths: 2,
        sqft: 1200,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        featured: true,
        description: "Lake-facing resort villas with private plunge pools, surrounded by the lush Mulshi hills.",
        amenities: ['Private Pool', 'Spa', 'Nature Trails', 'Fine Dining']
    },
    {
        id: 19,
        title: "Central Business Hotel",
        location: "Deccan Gymkhana, Pune",
        price: 5500,
        type: "hotel",
        rating: 4.5,
        beds: 1,
        baths: 1,
        sqft: 350,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: false,
        description: "Conveniently located business hotel offering quick access to central Pune's commercial hubs.",
        amenities: ['Meeting Rooms', 'High-Speed Internet', 'Breakfast Buffet']
    },
    {
        id: 20,
        title: "Student PG Room",
        location: "Viman Nagar, Pune",
        price: 1200,
        type: "small-room",
        rating: 4.2,
        beds: 1,
        baths: 1,
        sqft: 150,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: false,
        description: "Affordable and secure student accommodation near Symbiosis college.",
        amenities: ['Meals Included', 'Wi-Fi', 'Laundry', 'Security']
    },

    // --- MUMBAI ---
    {
        id: 9,
        title: "Cozy Dorm Bed at HappiNest Hostel",
        location: "Bandra, Mumbai",
        price: 1350,
        type: "small-room",
        rating: 4.4,
        beds: 1,
        baths: 1,
        sqft: 200,
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        featured: false,
        description: "A cozy, clean air-conditioned single bed in a premium mixed dormitory at HappiNest Hostel Bandra. Offers awesome social hubs, dedicated co-working tables, secure lockers, laundry services, and a vibrant community vibe right in Bandra West.",
        amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'Personal Lockers', 'Coworking Space', 'Shared Kitchenette', 'Laundry Service']
    },
    {
        id: 10,
        title: "Private Single Room in Vikhroli Co-Living",
        location: "Vikhroli, Mumbai",
        price: 1800,
        type: "small-room",
        rating: 4.3,
        beds: 1,
        baths: 1,
        sqft: 220,
        image: "https://images.unsplash.com/photo-1598928506311-c55dd580e5cb?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55dd580e5cb?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        featured: false,
        description: "A fully furnished, modern private single room in a premium co-living space in Vikhroli. Ideal for solo business travelers or corporate employees. Offers a quiet private workspace, attached bathroom, and access to a massive shared lounge.",
        amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'Study Desk & Chair', 'Attached Bath', 'Shared Lounge & Kitchen', 'Daily Cleaning']
    },
    {
        id: 11,
        title: "Deluxe Room at Theory9 Turner Road",
        location: "Bandra, Mumbai",
        price: 6200,
        type: "hotel",
        rating: 4.8,
        beds: 1,
        baths: 1,
        sqft: 450,
        image: "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1e52504431?q=80&w=1974&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        featured: true,
        description: "A premium, beautifully styled Deluxe Room inside Theory9 Turner Road Serviced Apartments in Bandra West. Features high-end modern design, plush queen bed, en-suite modern bath, and shared gourmet kitchen access. Superb central location.",
        amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'Shared Gourmet Kitchen', 'Smart LED TV', '24/7 Security & Concierge', 'Cafe9 Access']
    },
    {
        id: 12,
        title: "Executive Suite at The Emerald Juhu",
        location: "Juhu, Mumbai",
        price: 4500,
        type: "hotel",
        rating: 4.6,
        beds: 1,
        baths: 1,
        sqft: 500,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: false,
        description: "A spacious and sophisticated Executive Suite at The Emerald near Juhu Beach. Equipped with elegant wood furnishings, cozy seating area, high-speed Wi-Fi, air conditioning, and premium toiletries. Experience coastal comfort with top services.",
        amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'Mini Fridge', 'Smart TV', 'Room Service', 'Juhu Beach Guide']
    },
    {
        id: 13,
        title: "1 BHK Serviced Apartment in Mira Road",
        location: "Mira Road, Mumbai",
        price: 3200,
        type: "flat",
        rating: 4.5,
        beds: 1,
        baths: 1,
        sqft: 580,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        featured: false,
        description: "A clean, modern, and exceptionally comfortable 1 BHK serviced apartment situated in Mira Road. Offers beautiful views of the local neighborhood, premium fittings, high-quality beddings, and excellent connectivity to public transit.",
        amenities: ['Wi-Fi Enabled', 'Air Conditioner', 'Kitchen Essentials', 'Smart LED TV', '24/7 Security', 'Free Parking']
    },
    {
        id: 14,
        title: "Taj Wellington Mews Luxury Studio",
        location: "Colaba, Mumbai",
        price: 14200,
        type: "resort",
        rating: 4.9,
        beds: 1,
        baths: 1,
        sqft: 800,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: true,
        description: "Indulge in unparalleled heritage-infused luxury at the Taj Wellington Mews in Colaba. This grand sea-view studio apartment offers a fully equipped modular kitchen, a private balcony overlooking the city skyline, and access to the exclusive rooftop pool and spa.",
        amenities: ['Panoramic Sea View', 'Gigabit Wi-Fi', 'J Wellness Pool & Gym', 'Gourmet Kitchen', 'Private Balcony', '24/7 Taj Butler Service']
    },
    {
        id: 15,
        title: "Single Room at Kurla Metro Lodge",
        location: "Kurla, Mumbai",
        price: 1100,
        type: "lodge",
        rating: 3.9,
        beds: 1,
        baths: 1,
        sqft: 150,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        featured: false,
        description: "A compact and practical single room at a budget-friendly transit lodge in Kurla. Featuring a fan, comfortable bedding, high-speed Wi-Fi, and quick 10-minute access to Bandra Kurla Complex (BKC) and public transport.",
        amenities: ['Complimentary Wi-Fi', 'Attached Bathroom', 'Ceiling Fan', '24/7 Security Desk', 'Filtered Water Dispenser', 'Local Transit Map']
    },
    {
        id: 16,
        title: "Beachside Cabana at Madh Island Resort",
        location: "Madh Island, Mumbai",
        price: 8500,
        type: "resort",
        rating: 4.8,
        beds: 2,
        baths: 2,
        sqft: 750,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        featured: true,
        description: "A premium beachside cabana at The Retreat Resort, Madh Island. Surrounded by coconut trees and ocean breeze, this cabana offers a private sit-out deck, access to a giant swimming pool, sunken bar, and outstanding coastal seafood dining.",
        amenities: ['Private Beach Access', 'Sunken Bar & Pool', 'Coastal Dining Bistro', 'Free Wi-Fi', 'Ocean View Sit-out', 'Daily Spa Discounts']
    },
    {
        id: 21,
        title: "Sea View Apartment",
        location: "Worli, Mumbai",
        price: 8500,
        type: "flat",
        rating: 4.7,
        beds: 2,
        baths: 2,
        sqft: 1100,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        featured: true,
        description: "Breathtaking views of the Arabian Sea from this high-rise luxury apartment in Worli.",
        amenities: ['Sea View', 'Infinity Pool', 'Gym', 'Parking']
    },
    {
        id: 22,
        title: "Boutique Art Hotel",
        location: "Kala Ghoda, Mumbai",
        price: 7500,
        type: "hotel",
        rating: 4.8,
        beds: 1,
        baths: 1,
        sqft: 400,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: false,
        description: "Immerse yourself in art and culture in the heart of Mumbai's heritage district.",
        amenities: ['Art Gallery', 'Cafe', 'Curated Tours', 'Wi-Fi']
    },
    {
        id: 23,
        title: "Airport Transit Lodge",
        location: "Andheri East, Mumbai",
        price: 1800,
        type: "lodge",
        rating: 4.0,
        beds: 1,
        baths: 1,
        sqft: 180,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        featured: false,
        description: "Clean, budget-friendly lodge perfect for layovers, located 10 mins from the international airport.",
        amenities: ['Airport Shuttle', '24/7 Reception', 'Wake-up Service']
    },
    {
        id: 24,
        title: "Luxury Spa Resort",
        location: "Manori, Mumbai",
        price: 11000,
        type: "resort",
        rating: 4.9,
        beds: 1,
        baths: 1,
        sqft: 900,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: true,
        description: "Escape the city chaos at this tranquil island resort offering world-class Ayurvedic spa treatments.",
        amenities: ['Spa', 'Yoga Pavilion', 'Organic Dining', 'Ferry Service']
    },

    // --- GOA ---
    {
        id: 25,
        title: "Beachfront Resort",
        location: "Baga, Goa",
        price: 12000,
        type: "resort",
        rating: 4.7,
        beds: 2,
        baths: 2,
        sqft: 1000,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        featured: true,
        description: "Step out directly onto the vibrant sands of Baga beach from your luxury suite.",
        amenities: ['Beach Access', 'Pool Bar', 'Water Sports', 'Live Music']
    },
    {
        id: 26,
        title: "Cozy Bamboo Hut",
        location: "Palolem, Goa",
        price: 2500,
        type: "small-room",
        rating: 4.5,
        beds: 1,
        baths: 1,
        sqft: 200,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        featured: false,
        description: "Eco-friendly bamboo cottage nestled under palm trees just steps from the quiet Palolem beach.",
        amenities: ['Mosquito Net', 'Fan', 'Hammock', 'Veranda']
    },
    {
        id: 27,
        title: "Luxury Villa",
        location: "Vagator, Goa",
        price: 15000,
        type: "flat",
        rating: 4.9,
        beds: 3,
        baths: 3,
        sqft: 2500,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        featured: true,
        description: "A stunning 3 BHK private villa with a pool, chef services, and beautiful Portuguese architecture.",
        amenities: ['Private Pool', 'Personal Chef', 'Daily Housekeeping', 'BBQ Setup']
    },
    {
        id: 28,
        title: "Budget Backpacker Hostel",
        location: "Anjuna, Goa",
        price: 800,
        type: "small-room",
        rating: 4.3,
        beds: 1,
        baths: 1,
        sqft: 120,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: false,
        description: "Vibrant hostel in the heart of Anjuna. Great place to meet travelers and enjoy the nightlife.",
        amenities: ['Lockers', 'Bar', 'Bike Rental', 'Free Wi-Fi']
    },
    {
        id: 29,
        title: "Boutique Heritage Hotel",
        location: "Panjim, Goa",
        price: 6500,
        type: "hotel",
        rating: 4.8,
        beds: 1,
        baths: 1,
        sqft: 400,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        featured: true,
        description: "Experience old-world charm in this beautifully restored 19th-century Portuguese mansion in Fontainhas.",
        amenities: ['Heritage Tours', 'Fine Dining', 'Library', 'Courtyard']
    },
    {
        id: 30,
        title: "Affordable Lodge",
        location: "Calangute, Goa",
        price: 1500,
        type: "lodge",
        rating: 4.0,
        beds: 1,
        baths: 1,
        sqft: 200,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        featured: false,
        description: "Simple, clean, and central. The perfect base for exploring North Goa on a budget.",
        amenities: ['AC Rooms', 'Travel Desk', 'Wi-Fi', 'Parking']
    },
    {
        id: 31,
        title: "Luxury Penthouse",
        location: "Koregaon Park, Pune",
        price: 18000,
        type: "flat",
        rating: 4.9,
        beds: 3,
        baths: 3,
        sqft: 2800,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        featured: true,
        description: "An ultra-luxurious penthouse in the heart of KP with a private terrace and plunge pool.",
        amenities: ['Private Plunge Pool', 'Smart Home', 'Terrace Garden', 'Concierge']
    },
    {
        id: 32,
        title: "Beach House Villa",
        location: "Alibaug, near Mumbai",
        price: 22000,
        type: "resort",
        rating: 4.8,
        beds: 4,
        baths: 4,
        sqft: 3500,
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        featured: true,
        description: "A gorgeous seaside villa in Alibaug. Perfect for weekend getaways with large groups.",
        amenities: ['Sea View', 'Private Pool', 'BBQ Grill', 'Chef on Call']
    },
    {
        id: 33,
        title: "Boutique Surf Hostel",
        location: "Ashwem, Goa",
        price: 1800,
        type: "small-room",
        rating: 4.6,
        beds: 1,
        baths: 1,
        sqft: 180,
        image: "https://images.unsplash.com/photo-1555854877-c010d93160e1?q=80&w=2069&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1555854877-c010d93160e1?q=80&w=2069&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        featured: false,
        description: "A laid-back surf hostel steps away from the beach, featuring daily yoga and surf lessons.",
        amenities: ['Surfboard Rental', 'Yoga Deck', 'Vegan Cafe', 'Wi-Fi']
    },
    {
        id: 34,
        title: "Riverside Forest Cabin",
        location: "Karjat, near Mumbai",
        price: 10500,
        type: "resort",
        rating: 4.7,
        beds: 2,
        baths: 1,
        sqft: 800,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
        ],
        video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        featured: true,
        description: "An isolated, eco-friendly cabin surrounded by dense forests and a flowing river.",
        amenities: ['River Access', 'Firepit', 'Pet Friendly', 'Hammocks']
    }
];

// Handle Header Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Toast System
const showToast = (message, type = 'info', icon = 'ph-info') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon"><i class="ph ${icon}"></i></span>
        <div class="toast-content">${message}</div>
    `;
    container.appendChild(toast);

    // Trigger reflow for transition
    toast.offsetHeight;
    
    // Add show class
    toast.classList.add('show');

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
};

// Render Properties by Location and filters
const renderProperties = (locationFilter = '', priceFilter = '', guestsFilter = '1', typeFilter = '') => {
    const locations = [
        { loc: 'Pune', gridId: 'pune-grid', sectionId: 'pune-flats' },
        { loc: 'Mumbai', gridId: 'mumbai-grid', sectionId: 'mumbai-flats' },
        { loc: 'Goa', gridId: 'goa-grid', sectionId: 'goa-stays' }
    ];

    locations.forEach(({ loc, gridId, sectionId }) => {
        const grid = document.getElementById(gridId);
        const section = document.getElementById(sectionId);
        if (!grid || !section) return;
        
        grid.innerHTML = '';
        
        // Render or hide sections dynamically based on location filter
        if (locationFilter && locationFilter !== loc) {
            section.style.display = 'none';
            return;
        } else {
            section.style.display = 'block';
        }
        
        const filteredProperties = properties.filter(prop => {
            // Location filter match for the section
            const matchSectionLoc = prop.location.includes(loc);
            
            // Search criteria: Price filter
            let matchPrice = true;
            if (priceFilter === 'low') matchPrice = prop.price >= 1000 && prop.price <= 2000;
            else if (priceFilter === 'mid') matchPrice = prop.price > 2000 && prop.price <= 8000;
            else if (priceFilter === 'high') matchPrice = prop.price > 8000 && prop.price <= 15000;

            // Search criteria: Guests filter
            let matchGuests = true;
            if (guestsFilter === '2') {
                matchGuests = prop.beds >= 1 && prop.sqft >= 250;
            } else if (guestsFilter === '3+') {
                matchGuests = prop.beds >= 2;
            }

            // Search criteria: Stay Type filter
            let matchType = true;
            if (typeFilter) {
                matchType = prop.type === typeFilter;
            }

            return matchSectionLoc && matchPrice && matchGuests && matchType;
        });

        if (filteredProperties.length === 0) {
            grid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px 0;">No properties found for your search criteria.</p>';
        }

        const fragment = document.createDocumentFragment();

        filteredProperties.forEach(prop => {
            const formatPrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(prop.price);
            
            const card = document.createElement('div');
            card.className = 'property-card';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    ${prop.featured ? `<div class="card-badge featured"><i class="ph ph-star"></i> Featured</div>` : ''}
                    <div class="card-fav"><i class="ph ph-heart"></i></div>
                    <img src="${prop.image}" alt="${prop.title}" class="card-img" loading="lazy">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${prop.title}</h3>
                            <div class="card-location">
                                <i class="ph ph-map-pin"></i>
                                ${prop.location}
                            </div>
                        </div>
                        <div class="card-rating">
                            <i class="ph-fill ph-star"></i>
                            ${prop.rating}
                        </div>
                    </div>
                    
                    <div class="card-features">
                        <div class="feature-item">
                            <i class="ph ph-bed"></i>
                            ${prop.beds} Beds
                        </div>
                        <div class="feature-item">
                            <i class="ph ph-bathtub"></i>
                            ${prop.baths} Baths
                        </div>
                        <div class="feature-item">
                            <i class="ph ph-squares-four"></i>
                            ${prop.sqft} sqft
                        </div>
                    </div>
                    
                    <div class="card-footer">
                        <div class="card-price">
                            ${formatPrice}<span>/day</span>
                        </div>
                        <button class="btn btn-primary btn-view-details" data-id="${prop.id}" style="padding: 10px 20px; font-size: 0.9rem;">View Details</button>
                    </div>
                </div>
            `;
            fragment.appendChild(card);
        });
        grid.appendChild(fragment);
    });
};

// Details Modal handlers
const openDetailsModal = (id) => {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    const formatPrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(prop.price);
    
    const amenities = prop.amenities || ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'Modern Bathroom', '24/7 Security', 'Elevator'];
    const description = prop.description || `Experience high-quality living in this premium property located in ${prop.location}. Perfect for business travelers, couples, or solo explorers looking for a comfortable stay with high-end modern amenities and easy access to local attractions.`;

    const imagesArray = prop.images && prop.images.length > 0 ? prop.images : [prop.image];
    const hasVideo = !!prop.video;

    let mediaHTML = `
        <div class="carousel-wrapper">
            <button class="carousel-button" id="prevBtn" ${imagesArray.length <= 1 ? 'style="display:none;"' : ''}>&#9664;</button>
            <img src="${imagesArray[0]}" alt="${prop.title}" class="carousel-img" id="carouselImg">
            <button class="carousel-button" id="nextBtn" ${imagesArray.length <= 1 ? 'style="display:none;"' : ''}>&#9654;</button>
            
            ${imagesArray.length > 1 ? `
            <div class="carousel-counter" id="carouselCounter">1 / ${imagesArray.length}</div>
            <div class="carousel-dots" id="carouselDots">
                ${imagesArray.map((_, i) => `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></button>`).join('')}
            </div>
            ` : ''}
        </div>
    `;

    // Thumbnails strip and Video section
    mediaHTML += `
        <div class="thumbnail-strip" id="thumbnailStrip">
            ${imagesArray.map((img, i) => `
                <img src="${img}" class="thumb-img ${i === 0 ? 'active' : ''}" data-idx="${i}">
            `).join('')}
        </div>
        ${hasVideo ? `
        <div style="margin-top: 16px; border-radius: 12px; overflow: hidden; background: #000;">
            <video width="100%" height="auto" autoplay loop muted playsinline style="display: block;">
                <source src="${prop.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        ` : ''}
    `;

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div>
                ${mediaHTML}
            </div>
            <div class="modal-info">
                <div>
                    <h2 class="modal-title">${prop.title}</h2>
                    <div class="modal-location">
                        <i class="ph ph-map-pin"></i>
                        ${prop.location}
                    </div>
                    <p class="modal-desc">${description}</p>
                    
                    <h4 style="margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Amenities Included</h4>
                    <div class="modal-amenities">
                        ${amenities.map(a => `
                            <div class="amenity-item">
                                <i class="ph ph-circle-wavy-check"></i>
                                <span>${a}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-booking">
                    <div class="modal-price">
                        ${formatPrice}<span>/day</span>
                    </div>
                    <button class="btn btn-primary btn-book" data-id="${prop.id}" style="padding: 12px 28px;">Book Now</button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    // Force reflow
    modal.offsetHeight;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Carousel logic
    if (imagesArray.length > 1) {
        let currentIdx = 0;
        const carouselImg = document.getElementById('carouselImg');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dots = document.querySelectorAll('.carousel-dot');
        const thumbs = document.querySelectorAll('.thumb-img');
        const counter = document.getElementById('carouselCounter');

        const updateCarousel = () => {
            carouselImg.style.opacity = '0.5';
            setTimeout(() => {
                carouselImg.src = imagesArray[currentIdx];
                carouselImg.style.opacity = '1';
            }, 200);

            if (counter) counter.textContent = \`\${currentIdx + 1} / \${imagesArray.length}\`;

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIdx);
            });
            thumbs.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === currentIdx);
                if (i === currentIdx) {
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });
        };

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIdx = (currentIdx - 1 + imagesArray.length) % imagesArray.length;
            updateCarousel();
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIdx = (currentIdx + 1) % imagesArray.length;
            updateCarousel();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIdx = parseInt(dot.getAttribute('data-idx'));
                updateCarousel();
            });
        });

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIdx = parseInt(thumb.getAttribute('data-idx'));
                updateCarousel();
            });
        });
    }
};

const closeDetailsModal = () => {
    const modal = document.getElementById('details-modal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
};

// Event delegation for View Details & Favorite Click & Book Now
document.addEventListener('click', (e) => {
    // View Details Click
    const detailsBtn = e.target.closest('.btn-view-details');
    if (detailsBtn) {
        const id = parseInt(detailsBtn.getAttribute('data-id'));
        openDetailsModal(id);
        return;
    }

    // Book Now Click inside Modal
    const bookBtn = e.target.closest('.btn-book');
    if (bookBtn) {
        const id = parseInt(bookBtn.getAttribute('data-id'));
        const prop = properties.find(p => p.id === id);
        if (prop) {
            closeDetailsModal();
            showToast(\`Booking request for "\${prop.title}" submitted successfully!\`, "success", "ph-check-circle");
        }
        return;
    }

    // Favorite Button Toggle
    const favBtn = e.target.closest('.card-fav');
    if (favBtn) {
        const heartIcon = favBtn.querySelector('i');
        if (heartIcon) {
            if (heartIcon.classList.contains('ph-heart')) {
                heartIcon.className = 'ph-fill ph-heart';
                favBtn.style.color = 'var(--secondary)';
                showToast("Added to favorites!", "success", "ph-heart");
            } else {
                heartIcon.className = 'ph ph-heart';
                favBtn.style.color = '';
                showToast("Removed from favorites.", "info", "ph-heart-break");
            }
        }
        return;
    }
});

// Modal close button event listeners
document.getElementById('modal-close')?.addEventListener('click', closeDetailsModal);
document.getElementById('details-modal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('details-modal')) {
        closeDetailsModal();
    }
});

// Esc key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetailsModal();
    }
});

// Search Logic
document.getElementById('btn-search')?.addEventListener('click', () => {
    const loc = document.getElementById('search-location').value;
    const price = document.getElementById('search-price').value;
    const guests = document.getElementById('search-guests').value;
    const type = document.getElementById('search-type')?.value || '';
    
    // Render local filtered properties
    renderProperties(loc, price, guests, type);
    
    // Scroll smoothly to properties
    let targetSection = null;
    if (loc === 'Pune') {
        targetSection = document.getElementById('pune-flats');
    } else if (loc === 'Mumbai') {
        targetSection = document.getElementById('mumbai-flats');
    } else if (loc === 'Goa') {
        targetSection = document.getElementById('goa-stays');
    } else {
        targetSection = document.querySelector('.properties');
    }
    
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Google Sign-in Mock
document.getElementById('btn-login')?.addEventListener('click', () => {
    showToast("Redirecting to Google Sign-In...", "info", "ph-google-logo");
    
    // Mock login state after a short delay
    setTimeout(() => {
        const loginBtn = document.getElementById('btn-login');
        if (loginBtn) {
            loginBtn.innerHTML = '<img src="https://ui-avatars.com/api/?name=User&background=random" style="width: 24px; height: 24px; border-radius: 50%;" /> My Account';
            showToast("Successfully signed in with Google!", "success", "ph-check-circle");
        }
    }, 1200);
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProperties();
});
