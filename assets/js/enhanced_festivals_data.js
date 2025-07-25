// festivals-data.js - Enhanced festival database with research-based additions
// This file contains all festival data for www.festivaltravel.org

const FESTIVALS_DATA = {
    festivals: [
        {
            id: 'womad',
            name: 'WOMAD Festival',
            location: 'Charlton Park, UK',
            country: 'United Kingdom',
            dates: 'July 25-28, 2025',
            description: 'A celebration of world music and arts with exceptional safety measures and female-friendly facilities including well-lit pathways and dedicated support staff.',
            safetyRating: 5,
            attendeeRating: 4.8,
            tags: ['World Music', 'Arts', 'Family-Friendly', 'Cultural'],
            website: 'https://womad.co.uk',
            ticketPrice: '£190-280',
            capacity: 35000,
            founded: 1982,
            safetyFeatures: [
                'Well-lit pathways throughout site',
                'Dedicated female welfare officers',
                '24/7 security presence',
                'Safe transport partnerships',
                'Anti-harassment policy with clear enforcement',
                'Consent awareness campaigns',
                'Safe space volunteers throughout site',
                'Anonymous reporting system via text'
            ],
            accessibilityFeatures: [
                'Wheelchair accessible viewing areas',
                'BSL interpreters available',
                'Quiet spaces for sensory breaks',
                'Accessible toilet facilities',
                'Companion tickets available',
                'Accessibility team on-site'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Text 'HELP' to 67766" },
                { service: "UK Emergency Services", number: "999" },
                { service: "Festival Medical", number: "Available at medical tents" },
                { service: "Local Police", number: "101 (non-emergency)" }
            ]
        },
        {
            id: 'primavera-sound',
            name: 'Primavera Sound',
            location: 'Barcelona, Spain',
            country: 'Spain',
            dates: 'May 29 - June 1, 2025',
            description: 'Progressive festival with pioneering "Nobody is Normal" protocol against harassment and gender-based violence, featuring diverse lineups and inclusive spaces.',
            safetyRating: 5,
            attendeeRating: 4.8,
            tags: ['Alternative', 'Electronic', 'Progressive', 'Anti-Harassment', 'Gender Equality'],
            website: 'https://primaverasound.com',
            ticketPrice: '€220-380',
            capacity: 65000,
            founded: 2001,
            safetyFeatures: [
                '"Nobody is Normal" anti-harassment protocol',
                'Information stands with trained diverse staff',
                'Incident reporting and prevention materials',
                'Collaboration with feminist organizations',
                'Awareness workshops and campaigns',
                'Staff with safety team identification badges',
                'Designated quiet areas for overwhelmed attendees',
                'Zero tolerance policy for discrimination'
            ],
            accessibilityFeatures: [
                'Comprehensive accessibility program',
                'Wheelchair accessible areas throughout',
                'Sign language interpretation',
                'Accessible transport options',
                'Sensory-friendly spaces',
                'Companion tickets available'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Info stands throughout site" },
                { service: "Spanish Emergency Services", number: "112" },
                { service: "Festival Medical", number: "Medical tents throughout" },
                { service: "Local Police", number: "092" }
            ]
        },
        {
            id: 'roskilde',
            name: 'Roskilde Festival',
            location: 'Roskilde, Denmark',
            country: 'Denmark',
            dates: 'June 28 - July 5, 2025',
            description: 'Europe\'s largest music festival with pioneering safety initiatives, including consent campaigns, crowd safety hosts, and comprehensive 24/7 support services.',
            safetyRating: 5,
            attendeeRating: 4.7,
            tags: ['Rock', 'Electronic', 'Nordic Culture', 'Activism', 'Consent Culture'],
            website: 'https://roskilde-festival.dk',
            ticketPrice: '€210-320',
            capacity: 130000,
            founded: 1971,
            safetyFeatures: [
                'Pioneering consent campaigns and education',
                'Crowd safety hosts for navigation assistance',
                'Trained social workers available 24/7',
                'Professional medics and camping hosts',
                '24-hour support helpline',
                '"Soft Spots" counseling areas',
                'Bystander intervention campaigns',
                'Red Cross volunteer collaboration',
                'Safer partying initiatives',
                'Anonymous reporting system'
            ],
            accessibilityFeatures: [
                'Comprehensive accessibility services',
                'Disabled parking areas',
                'Sign language interpretation',
                'Mobility assistance available',
                'Accessible camping options',
                'Personal assistant tickets'
            ],
            emergencyContacts: [
                { service: "Festival Emergency", number: "4630 0900" },
                { service: "Danish Emergency Services", number: "112" },
                { service: "24-Hour Support Helpline", number: "Available at info points" },
                { service: "Police (non-emergency)", number: "114" }
            ]
        },
        {
            id: 'shambhala',
            name: 'Shambhala Music Festival',
            location: 'Salmo, British Columbia, Canada',
            country: 'Canada',
            dates: 'August 8-11, 2025',
            description: 'Electronic music festival with comprehensive ShambhaCares harm-reduction program, 24-hour Sanctuary support, and dedicated Safe Space for marginalized communities.',
            safetyRating: 5,
            attendeeRating: 4.9,
            tags: ['Electronic', 'EDM', 'Harm Reduction', 'Inclusive', 'Community'],
            website: 'https://shambhalamusicfestival.com',
            ticketPrice: 'CAD $420-580',
            capacity: 15000,
            founded: 1998,
            safetyFeatures: [
                'ShambhaCares comprehensive harm-reduction program',
                '24-hour Sanctuary with professional counseling',
                'Safe Space for women, BIPOC, LGBTQIA2S+ attendees',
                'Crisis-intervention volunteers',
                'Drug checking and testing services',
                'Sexual health and medical teams',
                'Security staff and stagekeepers 24/7',
                'Accessibility Zone for mobility needs',
                'Mental health first aid training'
            ],
            accessibilityFeatures: [
                'Dedicated Accessibility Zone',
                'Mobility assistance available',
                'Accessible camping areas',
                'Sign language interpretation',
                'Sensory accommodation options'
            ],
            emergencyContacts: [
                { service: "ShambhaCares Team", number: "Identifiable crew throughout site" },
                { service: "Canadian Emergency Services", number: "911" },
                { service: "24-Hour Sanctuary", number: "Central location on-site" },
                { service: "Local RCMP", number: "(250) 357-2212" }
            ]
        },
        {
            id: 'electric-forest',
            name: 'Electric Forest',
            location: 'Rothbury, Michigan, USA',
            country: 'United States',
            dates: 'June 26-29, 2025',
            description: 'Magical electronic music festival with Her Forest initiative empowering femme-identifying attendees through workshops, meet-ups, and supportive community spaces.',
            safetyRating: 5,
            attendeeRating: 4.8,
            tags: ['Electronic', 'EDM', 'Forest Setting', 'Community', 'Empowerment'],
            website: 'https://electricforest.com',
            ticketPrice: '$380-650',
            capacity: 50000,
            founded: 2011,
            safetyFeatures: [
                'Her Forest initiative for femme empowerment',
                'Humanity Circles for connection and support',
                'Her Forest Group Camp community',
                'Workshops on consent and bystander intervention',
                'Mental health and wellness resources',
                '24/7 medical and security teams',
                'Safe space volunteers throughout grounds',
                'Community meal sharing programs'
            ],
            accessibilityFeatures: [
                'ADA accessibility accommodations',
                'Accessible camping options',
                'Mobility assistance services',
                'Accessible viewing areas',
                'Support person tickets available'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Security posts throughout forest" },
                { service: "US Emergency Services", number: "911" },
                { service: "Her Forest Support", number: "Available at Her Forest camp" },
                { service: "Local Sheriff", number: "(231) 873-2121" }
            ]
        },
        {
            id: 'tramlines',
            name: 'Tramlines Festival',
            location: 'Sheffield, UK',
            country: 'United Kingdom',
            dates: 'July 25-27, 2025',
            description: 'City-center festival partnered with UN Women UK for Safe Spaces Now initiative, featuring specialist staff training and Guardian Angel volunteers.',
            safetyRating: 5,
            attendeeRating: 4.6,
            tags: ['Alternative', 'Indie', 'Urban', 'Safe Spaces', 'Guardian Angels'],
            website: 'https://tramlines.org.uk',
            ticketPrice: '£80-160',
            capacity: 40000,
            founded: 2009,
            safetyFeatures: [
                'Partnership with UN Women UK Safe Spaces Now',
                'Guardian Angel volunteers in bright t-shirts',
                'Specialist staff training programs',
                'Safe Spaces tent with resources and support',
                'Zero tolerance sexual harassment policy',
                'Collaboration with Good Night Out campaign',
                'Partnership with Rape Crisis organizations',
                'AIF Safer Spaces charter compliance'
            ],
            accessibilityFeatures: [
                'City center accessibility',
                'Wheelchair accessible areas',
                'Accessible transport links',
                'Sign language interpretation available',
                'Accessible toilet facilities'
            ],
            emergencyContacts: [
                { service: "Guardian Angels", number: "Volunteers throughout site" },
                { service: "UK Emergency Services", number: "999" },
                { service: "Safe Spaces Tent", number: "Central festival location" },
                { service: "Local Police", number: "101 (non-emergency)" }
            ]
        },
        {
            id: 'osheaga',
            name: 'Osheaga Music Festival',
            location: 'Montreal, Canada',
            country: 'Canada',
            dates: 'August 1-3, 2025',
            description: 'Montreal\'s premier music festival featuring Les Hirondelles specialized response team trained in sexology and harassment prevention.',
            safetyRating: 5,
            attendeeRating: 4.7,
            tags: ['Alternative', 'Hip-Hop', 'Electronic', 'Francophone', 'Anti-Harassment'],
            website: 'https://osheaga.com',
            ticketPrice: 'CAD $120-280',
            capacity: 120000,
            founded: 2006,
            safetyFeatures: [
                'Les Hirondelles specialized response team',
                'Sexology and harassment prevention training',
                'Educational workshops and awareness campaigns',
                'Listening services and safe space provision',
                'Referral services to local support organizations',
                'CALACS partnership for volunteer training',
                'Accompaniment to medical tents when needed',
                'Multilingual support services (French/English)'
            ],
            accessibilityFeatures: [
                'Montreal metro accessibility',
                'Wheelchair accessible viewing areas',
                'Sign language interpretation',
                'Accessible transport to Parc Jean-Drapeau',
                'Companion ticket program'
            ],
            emergencyContacts: [
                { service: "Les Hirondelles Team", number: "Identifiable throughout site" },
                { service: "Canadian Emergency Services", number: "911" },
                { service: "Festival Medical", number: "Medical tents throughout" },
                { service: "Montreal Police", number: "(514) 280-2222" }
            ]
        },
        {
            id: 'coachella',
            name: 'Coachella Valley Music Festival',
            location: 'Indio, California, USA',
            country: 'United States',
            dates: 'April 11-13 & 18-20, 2025',
            description: 'Iconic desert festival with comprehensive safety measures, excellent medical facilities, and strong anti-harassment policies in a stunning desert setting.',
            safetyRating: 4,
            attendeeRating: 4.6,
            tags: ['Alternative', 'Hip-Hop', 'Electronic', 'Desert', 'Fashion'],
            website: 'https://coachella.com',
            ticketPrice: '$429-1050',
            capacity: 250000,
            founded: 1999,
            safetyFeatures: [
                'Comprehensive medical facilities with desert expertise',
                'Professional security throughout with crowd management',
                'Anti-harassment policy with clear enforcement',
                'Safe ride partnerships with verified services',
                'Emergency response teams specialized in heat-related issues',
                'Hydration stations and cooling areas throughout',
                'Anonymous reporting system via app',
                'Bystander intervention awareness campaigns'
            ],
            accessibilityFeatures: [
                'ADA compliance throughout festival grounds',
                'Accessible camping options available',
                'Sign language interpretation for main stages',
                'Sensory-friendly spaces and quiet areas',
                'Accessible shuttle services',
                'Companion tickets and viewing areas'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Security posts throughout site" },
                { service: "US Emergency Services", number: "911" },
                { service: "Festival Medical", number: "Medical tents throughout site" },
                { service: "Local Police", number: "(760) 863-8990" }
            ]
        },
        {
            id: 'glastonbury',
            name: 'Glastonbury Festival',
            location: 'Somerset, UK',
            country: 'United Kingdom',
            dates: 'June 25-29, 2025',
            description: 'Legendary British festival with strong community ethos, extensive welfare services, women-only areas, and decades of experience creating safe, inclusive environments.',
            safetyRating: 5,
            attendeeRating: 4.9,
            tags: ['Rock', 'Alternative', 'World Music', 'Arts', 'Activism'],
            website: 'https://glastonburyfestivals.co.uk',
            ticketPrice: '£335-380',
            capacity: 210000,
            founded: 1970,
            safetyFeatures: [
                'Extensive welfare services with decades of experience',
                'Women-only areas and safe spaces available',
                'Professional stewarding with community focus',
                'Comprehensive medical care and mental health support',
                'Lost child protocols and family safety measures',
                'Mental health first aid trained volunteers',
                'Anonymous reporting and support systems',
                'Collaboration with local crisis support services'
            ],
            accessibilityFeatures: [
                'Dedicated accessibility team and coordination',
                'Accessible viewing areas for all main stages',
                'Personal assistant tickets available',
                'Accessible camping with support services',
                'Mobility assistance and equipment rental',
                'BSL interpretation for major performances'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Security posts throughout site" },
                { service: "UK Emergency Services", number: "999" },
                { service: "Festival Welfare", number: "Welfare tents throughout site" },
                { service: "Local Police", number: "101 (non-emergency)" }
            ]
        },
        {
            id: 'tomorrowland',
            name: 'Tomorrowland',
            location: 'Boom, Belgium',
            country: 'Belgium',
            dates: 'July 18-20 & 25-27, 2025',
            description: 'World\'s most magical electronic music festival with incredible production values, safety innovations, and welcoming international community.',
            safetyRating: 5,
            attendeeRating: 4.9,
            tags: ['Electronic', 'EDM', 'International', 'Magical', 'Community'],
            website: 'https://tomorrowland.com',
            ticketPrice: '€300-450',
            capacity: 400000,
            founded: 2005,
            safetyFeatures: [
                'State-of-the-art security with international standards',
                'Comprehensive medical facilities with multi-lingual staff',
                'Anti-harassment initiatives and awareness campaigns',
                'Safe space ambassadors throughout grounds',
                'Emergency response teams with rapid deployment',
                'Drug awareness and harm reduction programs',
                'Anonymous reporting system via festival app'
            ],
            accessibilityFeatures: [
                'Full accessibility program with dedicated team',
                'Companion tickets available for support persons',
                'Accessible viewing platforms for all stages',
                'Support team assistance and coordination',
                'Accessible transport and accommodation options'
            ],
            emergencyContacts: [
                { service: "Festival Emergency", number: "Emergency stations throughout" },
                { service: "Belgian Emergency Services", number: "112" },
                { service: "Festival Medical", number: "Medical facilities on-site" },
                { service: "Local Police", number: "101" }
            ]
        },
        {
            id: 'fuji-rock',
            name: 'Fuji Rock Festival',
            location: 'Naeba, Japan',
            country: 'Japan',
            dates: 'July 25-27, 2025',
            description: 'Japan\'s premier rock festival set in beautiful mountain scenery with exceptional Japanese hospitality, safety standards, and remarkably low crime rates.',
            safetyRating: 5,
            attendeeRating: 4.8,
            tags: ['Rock', 'Electronic', 'Japanese Culture', 'Mountain Setting', 'Clean & Safe'],
            website: 'https://fujirock-eng.com',
            ticketPrice: '¥45,000-65,000',
            capacity: 100000,
            founded: 1997,
            safetyFeatures: [
                'Japanese safety excellence and cultural respect',
                'Exceptionally low crime rates (nearly zero incidents)',
                'Strong community vibe with mutual respect',
                'Respectful crowd culture and self-policing',
                'Excellent public transport coordination',
                'Clean facilities maintained throughout event',
                'Professional medical staff with mountain expertise',
                'Lost and found efficiency with detailed tracking'
            ],
            accessibilityFeatures: [
                'Wheelchair accessible areas with mountain considerations',
                'English language support and translation',
                'Clear bilingual signage systems',
                'Accessible transportation options',
                'Mountain terrain accommodation assistance'
            ],
            emergencyContacts: [
                { service: "Festival Emergency", number: "Festival information centers" },
                { service: "Japanese Emergency Services", number: "119" },
                { service: "Festival Medical", number: "Medical stations throughout" },
                { service: "Police", number: "110" }
            ]
        },
        {
            id: 'montreal-jazz',
            name: 'Montreal International Jazz Festival',
            location: 'Montreal, Canada',
            country: 'Canada',
            dates: 'June 26 - July 6, 2025',
            description: 'World\'s largest jazz festival with free outdoor concerts, safe urban setting, excellent Canadian hospitality, and strong community safety infrastructure.',
            safetyRating: 5,
            attendeeRating: 4.7,
            tags: ['Jazz', 'Urban', 'Free Events', 'Cultural', 'International'],
            website: 'https://montrealjazzfest.com',
            ticketPrice: 'Free-$150',
            capacity: 2000000,
            founded: 1980,
            safetyFeatures: [
                'Urban safety infrastructure with police coordination',
                'Well-lit festival areas throughout downtown',
                'Safe public transportation with festival integration',
                'Emergency services in close proximity',
                'Community volunteer network with local knowledge',
                'Multilingual support services (French/English)',
                'Family-friendly atmosphere with broad appeal'
            ],
            accessibilityFeatures: [
                'Accessible venue compliance throughout downtown',
                'ASL interpretation available for major events',
                'Wheelchair accessible areas for all outdoor stages',
                'Accessible public transport integration',
                'Multiple accessible washroom facilities'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Festival info booths" },
                { service: "Canadian Emergency Services", number: "911" },
                { service: "Montreal Police", number: "(514) 280-2222" },
                { service: "Festival Medical", number: "First aid stations" }
            ]
        },
        {
            id: 'flow-festival',
            name: 'Flow Festival',
            location: 'Helsinki, Finland',
            country: 'Finland',
            dates: 'August 8-10, 2025',
            description: 'Innovative urban festival in historic Helsinki with excellent Nordic safety standards, sustainability focus, and inclusive atmosphere.',
            safetyRating: 5,
            attendeeRating: 4.8,
            tags: ['Electronic', 'Alternative', 'Urban', 'Sustainable', 'Nordic'],
            website: 'https://flowfestival.com',
            ticketPrice: '€189-269',
            capacity: 85000,
            founded: 2004,
            safetyFeatures: [
                'Nordic safety excellence with high standards',
                'Professional security team with cultural sensitivity',
                'Safe urban environment with low crime rates',
                'Excellent public transport integration',
                'Medical facilities with Nordic healthcare standards',
                'Sustainability initiatives promoting responsible behavior',
                'Anti-harassment policies with clear enforcement'
            ],
            accessibilityFeatures: [
                'Comprehensive accessibility with Nordic standards',
                'Mobility assistance available throughout',
                'Accessible festival areas and transport',
                'Support person tickets and companion services',
                'Accessible accommodation coordination'
            ],
            emergencyContacts: [
                { service: "Festival Emergency", number: "Festival security posts" },
                { service: "Finnish Emergency Services", number: "112" },
                { service: "Festival Medical", number: "Medical tents" },
                { service: "Helsinki Police", number: "0295 480 165" }
            ]
        },
        {
            id: 'splendour',
            name: 'Splendour in the Grass',
            location: 'Byron Bay, Australia',
            country: 'Australia',
            dates: 'July 25-27, 2025',
            description: 'Premier Australian festival with stunning coastal setting, excellent safety infrastructure, and strong commitment to festival-goer wellbeing.',
            safetyRating: 5,
            attendeeRating: 4.7,
            tags: ['Alternative', 'Electronic', 'Australian', 'Coastal', 'Arts'],
            website: 'https://splendourinthegrass.com',
            ticketPrice: 'AU$399-599',
            capacity: 50000,
            founded: 2001,
            safetyFeatures: [
                'Comprehensive medical facilities with heat expertise',
                'Professional security team with Australian standards',
                'Heat safety protocols and cooling stations',
                'Anti-harassment policies with active enforcement',
                'Safe transport options with coordination',
                'Mental health first aid and support services',
                'Anonymous reporting via festival app'
            ],
            accessibilityFeatures: [
                'Accessibility companion program',
                'Wheelchair accessible areas throughout',
                'Accessible camping options available',
                'Support person tickets for attendees with disabilities',
                'Mobility assistance and equipment'
            ],
            emergencyContacts: [
                { service: "Festival Emergency", number: "Festival security" },
                { service: "Australian Emergency Services", number: "000" },
                { service: "Festival Medical", number: "Medical tents throughout" },
                { service: "Local Police", number: "(02) 6684 0199" }
            ]
        },
        {
            id: 'latitude',
            name: 'Latitude Festival',
            location: 'Suffolk, UK',
            country: 'United Kingdom',
            dates: 'July 24-27, 2025',
            description: 'A boutique festival blending music, literature, and arts with excellent security and family-friendly atmosphere in beautiful countryside setting.',
            safetyRating: 5,
            attendeeRating: 4.6,
            tags: ['Alternative', 'Literature', 'Comedy', 'Lake Setting'],
            website: 'https://latitudefestival.com',
            ticketPrice: '£220-340',
            capacity: 40000,
            founded: 2006,
            safetyFeatures: [
                'Family-friendly environment with appropriate security',
                'Excellent medical facilities with rural considerations',
                'Professional security team with community focus',
                'Safe camping areas with regular patrols',
                'Lost child protocol with detailed procedures',
                'Welfare tent services and mental health support',
                'Anonymous reporting and support systems'
            ],
            accessibilityFeatures: [
                'Accessibility viewing platforms for all stages',
                'Companion tickets available for support',
                'Accessible camping options with assistance',
                'Sensory-friendly spaces for breaks',
                'Mobility assistance throughout site'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Security posts throughout" },
                { service: "UK Emergency Services", number: "999" },
                { service: "Festival Medical", number: "Medical facilities on-site" },
                { service: "Local Police", number: "101 (non-emergency)" }
            ]
        }
    ],

    venues: {
        'primavera-sound': [
            {
                id: 'parc-del-forum-main',
                name: 'Parc del Fòrum Main Stage',
                type: 'primary_stage',
                capacity: 25000,
                safetyFeatures: ['Nobody is Normal protocol active', 'Information stands nearby', 'trained diverse staff', 'clear sightlines'],
                accessibility: ['wheelchair viewing', 'accessible transport', 'multilingual support'],
                description: 'Main stage with comprehensive anti-harassment protocols and diverse staff support'
            },
            {
                id: 'ray-ban-stage',
                name: 'Ray-Ban Stage',
                type: 'secondary_main',
                capacity: 15000,
                safetyFeatures: ['feminist organization partnerships', 'awareness materials', 'safety team badges'],
                accessibility: ['ramped access', 'dedicated viewing areas'],
                description: 'Alternative stage with gender equality focus and awareness campaigns'
            }
        ],
        'roskilde': [
            {
                id: 'orange-stage',
                name: 'Orange Stage',
                type: 'main_stage',
                capacity: 60000,
                safetyFeatures: ['crowd safety hosts', 'bystander intervention campaigns', 'Red Cross volunteers', 'consent reminders'],
                accessibility: ['accessible viewing', 'mobility assistance', 'companion areas'],
                description: 'Main stage with pioneering crowd safety host system and consent education'
            },
            {
                id: 'arena-stage',
                name: 'Arena Stage',
                type: 'covered_venue',
                capacity: 17000,
                safetyFeatures: ['soft spots counseling nearby', '24-hour support access', 'social worker presence'],
                accessibility: ['wheelchair accessible', 'hearing loop system'],
                description: 'Covered venue with integrated mental health support and counseling access'
            }
        ],
        'shambhala': [
            {
                id: 'the-village-stage',
                name: 'The Village Stage',
                type: 'main_stage',
                capacity: 8000,
                safetyFeatures: ['ShambhaCares presence', 'harm reduction materials', 'crisis intervention volunteers'],
                accessibility: ['accessibility zone nearby', 'mobility assistance'],
                description: 'Central stage with comprehensive harm reduction and crisis support'
            },
            {
                id: 'sanctuary',
                name: 'The Sanctuary',
                type: 'support_space',
                capacity: 100,
                safetyFeatures: ['24-hour professional counseling', 'anxiety support', 'emotional distress care'],
                accessibility: ['fully accessible', 'quiet environment'],
                description: '24-hour mental health sanctuary with professional counseling services'
            }
        ],
        'electric-forest': [
            {
                id: 'sherwood-court',
                name: 'Sherwood Court',
                type: 'main_stage',
                capacity: 30000,
                safetyFeatures: ['Her Forest volunteers', 'community support', 'bystander intervention'],
                accessibility: ['accessible viewing', 'companion areas'],
                description: 'Main forest stage with Her Forest volunteer support network'
            },
            {
                id: 'her-forest-camp',
                name: 'Her Forest Group Camp',
                type: 'community_space',
                capacity: 500,
                safetyFeatures: ['femme-identifying support', 'humanity circles', 'workshops', 'mentorship'],
                accessibility: ['accessible camping', 'support networks'],
                description: 'Dedicated community space for femme empowerment and connection'
            }
        ],
        'tramlines': [
            {
                id: 'main-stage-devonshire-green',
                name: 'Main Stage - Devonshire Green',
                type: 'outdoor_main',
                capacity: 20000,
                safetyFeatures: ['Guardian Angel volunteers', 'UN Women UK training', 'Safe Spaces tent nearby'],
                accessibility: ['city center accessibility', 'public transport'],
                description: 'Urban main stage with Guardian Angel volunteer network and UN Women partnership'
            },
            {
                id: 'safe-spaces-tent',
                name: 'Safe Spaces Tent',
                type: 'support_space',
                capacity: 50,
                safetyFeatures: ['specialist trained staff', 'safety information', 'helpline numbers'],
                accessibility: ['fully accessible', 'central location'],
                description: 'Dedicated safe space with UN Women UK resources and specialist support'
            }
        ],
        'osheaga': [
            {
                id: 'scene-des-arbres',
                name: 'Scène des Arbres',
                type: 'main_stage',
                capacity: 45000,
                safetyFeatures: ['Les Hirondelles presence', 'sexology-trained staff', 'multilingual support'],
                accessibility: ['metro accessible', 'wheelchair viewing'],
                description: 'Main stage with specialized Les Hirondelles response team support'
            },
            {
                id: 'les-hirondelles-station',
                name: 'Les Hirondelles Support Station',
                type: 'support_space',
                capacity: 30,
                safetyFeatures: ['CALACS-trained volunteers', 'listening services', 'referral support'],
                accessibility: ['accessible location', 'private consultation'],
                description: 'Specialized support station with sexology-trained harassment response team'
            }
        ],
        'womad': [
            {
                id: 'main-stage',
                name: 'Main Stage',
                type: 'primary_stage',
                capacity: 15000,
                safetyFeatures: ['barrier protection', 'clear sightlines', 'emergency exits', 'security presence'],
                accessibility: ['wheelchair viewing', 'BSL interpretation', 'hearing loop'],
                description: 'The heart of WOMAD with world-class sound and comprehensive safety measures'
            },
            {
                id: 'world-music-tent',
                name: 'World Music Tent',
                type: 'covered_venue',
                capacity: 3000,
                safetyFeatures: ['covered space', 'temperature control', 'multiple exits'],
                accessibility: ['ramped access', 'dedicated seating'],
                description: 'Intimate covered venue showcasing diverse musical traditions'
            }
        ],
        'coachella': [
            {
                id: 'coachella-stage',
                name: 'Coachella Stage',
                type: 'main_stage',
                capacity: 80000,
                safetyFeatures: ['professional barriers', 'crowd management', 'medical stations', 'cooling areas'],
                accessibility: ['accessible viewing', 'companion areas', 'mobility assistance'],
                description: 'Main festival stage with world-class safety infrastructure and desert-appropriate cooling'
            },
            {
                id: 'sahara-tent',
                name: 'Sahara Tent',
                type: 'electronic_venue',
                capacity: 40000,
                safetyFeatures: ['climate control', 'professional sound limits', 'security presence'],
                accessibility: ['wheelchair accessible', 'sensory accommodations'],
                description: 'Electronic music tent with climate control and hearing protection protocols'
            }
        ],
        'glastonbury': [
            {
                id: 'pyramid-stage',
                name: 'Pyramid Stage',
                type: 'main_stage',
                capacity: 100000,
                safetyFeatures: ['legendary safety record', 'experienced crew', 'comprehensive barriers'],
                accessibility: ['accessible viewing', 'dedicated areas', 'support services'],
                description: 'Iconic Glastonbury main stage with decades of safety experience'
            },
            {
                id: 'other-stage',
                name: 'Other Stage',
                type: 'secondary_main',
                capacity: 70000,
                safetyFeatures: ['professional management', 'crowd flow design', 'emergency protocols'],
                accessibility: ['full accessibility', 'companion areas'],
                description: 'Second main stage with excellent crowd management and safety features'
            }
        ]
    },

    hotels: {
        'primavera-sound': [
            {
                id: 'catalonia-born-hotel',
                name: 'Catalonia Born Hotel',
                type: 'boutique_hotel',
                distance: '2 miles from festival',
                priceRange: '€140-220/night',
                safetyRating: 5,
                femaleFeatures: ['quiet El Born location', 'helpful multilingual staff', 'safe neighborhood', '24hr reception'],
                amenities: ['rooftop terrace', 'free WiFi', 'air conditioning', 'soundproof rooms'],
                contact: '+34 932 954 652',
                description: 'Boutique hotel in safe El Born district with excellent solo female traveler reviews'
            },
            {
                id: 'hotel-gotico',
                name: 'Hotel Gótico',
                type: 'historic_hotel',
                distance: '1.5 miles from festival',
                priceRange: '€90-150/night',
                safetyRating: 4,
                femaleFeatures: ['central Gothic Quarter location', 'historic charm', 'friendly staff', 'secure entrance'],
                amenities: ['historic architecture', 'free WiFi', 'multilingual staff', 'concierge'],
                contact: '+34 933 152 411',
                description: 'Historic hotel in Gothic Quarter praised by women travelers for location and safety'
            }
        ],
        'roskilde': [
            {
                id: 'nh-collection-copenhagen',
                name: 'NH Collection Copenhagen',
                type: 'chain_hotel',
                distance: '30 min by train to festival',
                priceRange: '€180-280/night',
                safetyRating: 5,
                femaleFeatures: ['central Christianshavn location', '24hr security', 'well-lit area', 'safe transport links'],
                amenities: ['fitness center', 'restaurant', 'business center', 'bike rentals'],
                contact: '+45 33 14 14 14',
                description: 'Modern hotel in safe Copenhagen area with excellent transport to Roskilde'
            },
            {
                id: 'generator-copenhagen',
                name: 'Generator Copenhagen',
                type: 'modern_hostel',
                distance: '25 min by train to festival',
                priceRange: '€35-80/night',
                safetyRating: 4,
                femaleFeatures: ['female-only dorms', 'central location', 'social atmosphere', 'metro access'],
                amenities: ['bar/restaurant', 'common areas', 'laundry', 'bike storage'],
                contact: '+45 78 77 54 00',
                description: 'Modern hostel with female-only options and excellent festival access'
            }
        ],
        'shambhala': [
            {
                id: 'mistiso-place',
                name: 'Mistiso\'s Place Vacation Rentals',
                type: 'vacation_rental',
                distance: '20 km from festival',
                priceRange: 'CAD $120-200/night',
                safetyRating: 5,
                femaleFeatures: ['safe suites', 'off-street parking', 'quiet environment', 'local hosts'],
                amenities: ['kitchenette', 'private entrance', 'mountain views', 'WiFi'],
                contact: '+1 250 352 7252',
                description: 'Safe vacation rental in nearby Nelson with excellent host support'
            },
            {
                id: 'adventure-hotel',
                name: 'The Adventure Hotel',
                type: 'boutique_hotel',
                distance: '22 km from festival',
                priceRange: 'CAD $140-220/night',
                safetyRating: 4,
                femaleFeatures: ['attentive staff', 'secure lounge areas', 'comfortable rooms', 'friendly atmosphere'],
                amenities: ['restaurant', 'lounge', 'mountain activities', 'shuttle service'],
                contact: '+1 250 352 7211',
                description: 'Boutique hotel in Nelson with excellent staff attention and secure environment'
            }
        ],
        'electric-forest': [
            {
                id: 'double-jj-resort',
                name: 'Double JJ Resort',
                type: 'resort',
                distance: 'On festival grounds',
                priceRange: '$200-400/night',
                safetyRating: 5,
                femaleFeatures: ['on-site security', 'friendly staff', 'safe resort atmosphere', 'festival proximity'],
                amenities: ['pools', 'restaurants', 'activities', 'spa services'],
                contact: '+1 231 894 4444',
                description: 'On-site resort with excellent safety and charming atmosphere for festival attendees'
            }
        ],
        'tramlines': [
            {
                id: 'leopold-hotel',
                name: 'Leopold Hotel',
                type: 'boutique_hotel',
                distance: '0.5 miles from festival',
                priceRange: '£90-150/night',
                safetyRating: 5,
                femaleFeatures: ['central Sheffield location', 'quiet atmosphere', 'secure building', 'attentive service'],
                amenities: ['restaurant', 'bar', 'meeting rooms', 'concierge'],
                contact: '+44 114 252 4000',
                description: 'Boutique hotel in secure central Sheffield with excellent customer care'
            },
            {
                id: 'brocco-on-the-park',
                name: 'Brocco on the Park',
                type: 'luxury_guesthouse',
                distance: '1 mile from festival',
                priceRange: '£120-200/night',
                safetyRating: 5,
                femaleFeatures: ['luxury environment', 'personal service', 'safe parkside location', 'boutique atmosphere'],
                amenities: ['fine dining', 'luxury rooms', 'gardens', 'personal service'],
                contact: '+44 114 266 1233',
                description: 'Luxury guesthouse emphasizing comfort and personalized customer care'
            }
        ],
        'osheaga': [
            {
                id: 'le-nelligan',
                name: 'Hôtel Le Nelligan',
                type: 'boutique_hotel',
                distance: '4 miles from festival',
                priceRange: 'CAD $180-280/night',
                safetyRating: 5,
                femaleFeatures: ['Old Montreal location', 'attentive service', 'central location', 'secure building'],
                amenities: ['rooftop terrace', 'restaurant', 'fitness center', 'concierge'],
                contact: '+1 514 788 2040',
                description: 'Boutique hotel in historic Old Montreal with excellent service and location'
            },
            {
                id: 'fairmont-queen-elizabeth',
                name: 'Fairmont Queen Elizabeth',
                type: 'luxury_hotel',
                distance: '3 miles from festival',
                priceRange: 'CAD $220-350/night',
                safetyRating: 5,
                femaleFeatures: ['luxury security', 'central downtown', '24hr concierge', 'prestigious location'],
                amenities: ['spa', 'restaurants', 'fitness center', 'business center'],
                contact: '+1 514 861 3511',
                description: 'Prestigious downtown hotel with luxury amenities and exceptional security'
            }
        ],
        'womad': [
            {
                id: 'travelodge-malmesbury',
                name: 'Travelodge Malmesbury',
                type: 'chain_hotel',
                distance: '8 miles from festival',
                priceRange: '£60-120/night',
                safetyRating: 4,
                femaleFeatures: ['well-lit parking', '24hr reception', 'CCTV coverage', 'secure key card access'],
                amenities: ['free WiFi', 'restaurant', 'accessible rooms', 'family rooms'],
                contact: '+44 871 984 6484',
                description: 'Reliable chain hotel with excellent safety standards and shuttle service to festival'
            }
        ],
        'coachella': [
            {
                id: 'omni-rancho-las-palmas',
                name: 'Omni Rancho Las Palmas',
                type: 'luxury_resort',
                distance: '8 miles from festival',
                priceRange: '$300-600/night',
                safetyRating: 5,
                femaleFeatures: ['luxury security', 'safe resort environment', 'professional staff', '24/7 concierge'],
                amenities: ['spa services', 'multiple pools', 'golf course', 'fine dining'],
                contact: '+1 760 568 2727',
                description: 'Luxury resort with exceptional security and premium amenities for Coachella attendees'
            }
        ],
        'glastonbury': [
            {
                id: 'the-george-inn',
                name: 'The George Inn',
                type: 'historic_inn',
                distance: '15 miles from festival',
                priceRange: '£80-160/night',
                safetyRating: 4,
                femaleFeatures: ['historic charm', 'local community', 'personal service', 'safe village location'],
                amenities: ['restaurant', 'bar', 'gardens', 'traditional atmosphere'],
                contact: '+44 1458 831146',
                description: 'Historic inn in safe Somerset village with traditional British hospitality'
            }
        ]
    },

    bars: {
        'primavera-sound': [
            {
                id: 'vinya-del-senyor',
                name: 'Vinya del Senyor',
                type: 'wine_bar',
                location: 'El Born district',
                safetyRating: 5,
                femaleFeatures: ['intimate setting', 'attentive staff', 'safe neighborhood', 'solo-friendly'],
                specialties: ['extensive wine selection', 'Spanish tapas', 'local atmosphere', 'outdoor seating'],
                hours: '12:00-01:00',
                description: 'Intimate wine bar in safe El Born area, highly recommended by solo women travelers'
            },
            {
                id: 'el-xampanyet',
                name: 'El Xampanyet',
                type: 'cava_bar',
                location: 'El Born district',
                safetyRating: 5,
                femaleFeatures: ['traditional atmosphere', 'friendly staff', 'community feel', 'safe location'],
                specialties: ['cava', 'traditional tapas', 'anchovies', 'local crowd'],
                hours: '12:00-15:30, 19:00-23:00',
                description: 'Traditional cava bar with welcoming atmosphere and excellent safety record'
            }
        ],
        'roskilde': [
            {
                id: 'strom-bar',
                name: 'Strøm Bar',
                type: 'cocktail_bar',
                location: 'Copenhagen Vesterbro',
                safetyRating: 5,
                femaleFeatures: ['stylish atmosphere', 'professional staff', 'safe area', 'solo-welcoming'],
                specialties: ['craft cocktails', 'Nordic ingredients', 'contemporary design', 'quality service'],
                hours: '17:00-02:00',
                description: 'Stylish cocktail bar in safe Vesterbro area with excellent solo traveler reviews'
            },
            {
                id: 'mikkeller-bar',
                name: 'Mikkeller Bar',
                type: 'craft_beer_bar',
                location: 'Copenhagen Vesterbro',
                safetyRating: 5,
                femaleFeatures: ['beer education focus', 'friendly atmosphere', 'diverse crowd', 'safe location'],
                specialties: ['craft beer', 'beer tastings', 'knowledgeable staff', 'international atmosphere'],
                hours: '14:00-02:00',
                description: 'Renowned craft beer bar with welcoming atmosphere and international crowd'
            }
        ],
        'osheaga': [
            {
                id: 'big-in-japan',
                name: 'Big in Japan',
                type: 'sake_bar',
                location: 'Montreal Plateau',
                safetyRating: 5,
                femaleFeatures: ['intimate setting', 'diverse crowd', 'safe neighborhood', 'unique atmosphere'],
                specialties: ['sake selection', 'Japanese whisky', 'small plates', 'casual atmosphere'],
                hours: '17:00-03:00',
                description: 'Unique sake bar popular with locals and considered very safe for women'
            },
            {
                id: 'bar-darling',
                name: 'Bar Darling',
                type: 'cocktail_bar',
                location: 'Montreal Mile End',
                safetyRating: 5,
                femaleFeatures: ['cozy atmosphere', 'friendly staff', 'neighborhood feel', 'welcoming to solo visitors'],
                specialties: ['creative cocktails', 'local ingredients', 'intimate setting', 'quality spirits'],
                hours: '18:00-03:00',
                description: 'Cozy cocktail bar with friendly atmosphere and excellent safety reputation'
            }
        ],
        'tramlines': [
            {
                id: 'public-bar',
                name: 'Public',
                type: 'stylish_bar',
                location: 'Sheffield City Center',
                safetyRating: 5,
                femaleFeatures: ['security presence', 'well-managed', 'inclusive environment', 'professional staff'],
                specialties: ['craft cocktails', 'local beers', 'food menu', 'events'],
                hours: '17:00-02:00',
                description: 'Stylish bar below City Hall with strong security and inclusive atmosphere'
            },
            {
                id: 'the-bloo-88',
                name: 'The Bloo 88',
                type: 'casual_bar',
                location: 'Sheffield City Center',
                safetyRating: 4,
                femaleFeatures: ['casual atmosphere', 'good lighting', 'attentive staff', 'safe city center location'],
                specialties: ['pizza', 'cocktails', 'casual dining', 'group-friendly'],
                hours: '12:00-01:00',
                description: 'Casual pizza bar with cocktails, emphasizing security and welcoming environment'
            }
        ],
        'womad': [
            {
                id: 'festival-main-bar',
                name: 'Festival Main Bar',
                type: 'festival_venue',
                location: 'Central arena',
                safetyRating: 5,
                femaleFeatures: ['trained staff', 'drink covering awareness', 'safe space policies', 'good lighting'],
                specialties: ['craft beers', 'wine selection', 'non-alcoholic options', 'local ciders'],
                hours: '12:00-02:00',
                description: 'Main festival bar with comprehensive safety training and inclusive atmosphere'
            }
        ],
        'coachella': [
            {
                id: 'coachella-beer-barn',
                name: 'Coachella Beer Barn',
                type: 'festival_venue',
                location: 'Main festival area',
                safetyRating: 4,
                femaleFeatures: ['festival security nearby', 'well-trained staff', 'good lighting', 'crowd management'],
                specialties: ['craft beers', 'local California brews', 'non-alcoholic options', 'desert-appropriate drinks'],
                hours: '12:00-02:00',
                description: 'Main festival bar with professional staff and desert-appropriate beverage options'
            }
        ],
        'glastonbury': [
            {
                id: 'park-bar',
                name: 'The Park Bar',
                type: 'festival_area_bar',
                location: 'The Park area',
                safetyRating: 5,
                femaleFeatures: ['community atmosphere', 'experienced staff', 'safe environment', 'festival tradition'],
                specialties: ['real ales', 'ciders', 'local brews', 'traditional pub atmosphere'],
                hours: '12:00-03:00',
                description: 'Traditional festival bar in The Park with decades of safe operation'
            }
        ]
    },

    attractions: {
        'primavera-sound': [
            {
                id: 'barcelona-gothic-quarter',
                name: 'Gothic Quarter Walking Tours',
                type: 'cultural_attraction',
                location: 'Barcelona Old City',
                safetyRating: 4,
                femaleFeatures: ['group tours available', 'well-lit historic streets', 'tourist police presence', 'day tours recommended'],
                highlights: ['medieval architecture', 'historic sites', 'cultural immersion', 'photography opportunities'],
                hours: '10:00-18:00',
                accessibility: 'some cobblestone challenges',
                description: 'Historic Gothic Quarter tours with daytime safety and cultural immersion'
            }
        ],
        'roskilde': [
            {
                id: 'roskilde-cathedral',
                name: 'Roskilde Cathedral UNESCO Site',
                type: 'historic_site',
                location: 'Roskilde city center',
                safetyRating: 5,
                femaleFeatures: ['well-maintained site', 'tourist information', 'safe city center', 'group tours'],
                highlights: ['UNESCO World Heritage', 'royal tombs', 'medieval architecture', 'cultural history'],
                hours: '10:00-17:00',
                accessibility: 'fully accessible',
                description: 'UNESCO World Heritage cathedral in safe Roskilde city center'
            }
        ],
        'womad': [
            {
                id: 'art-installations',
                name: 'Festival Art Installations',
                type: 'interactive_art',
                location: 'Throughout festival grounds',
                safetyRating: 5,
                femaleFeatures: ['well-lit displays', 'safe pathways', 'supervised areas', 'inclusive themes'],
                highlights: ['world culture themes', 'interactive pieces', 'photo opportunities', 'educational displays'],
                hours: '24/7 during festival',
                accessibility: 'fully accessible',
                description: 'Stunning art installations celebrating world cultures with safe viewing areas'
            }
        ],
        'coachella': [
            {
                id: 'coachella-art-installations',
                name: 'Desert Art Installations',
                type: 'interactive_art',
                location: 'Throughout festival grounds',
                safetyRating: 4,
                femaleFeatures: ['well-patrolled areas', 'good lighting', 'safe pathways', 'Instagram-worthy spots'],
                highlights: ['large-scale sculptures', 'interactive pieces', 'desert-themed art', 'photo opportunities'],
                hours: '24/7 during festival',
                accessibility: 'desert terrain considerations',
                description: 'Iconic large-scale art installations perfect for photos with desert safety considerations'
            }
        ],
        'glastonbury': [
            {
                id: 'healing-fields',
                name: 'Healing Fields',
                type: 'wellness_area',
                location: 'Festival grounds',
                safetyRating: 5,
                femaleFeatures: ['peaceful environment', 'wellness focus', 'safe space', 'therapeutic atmosphere'],
                highlights: ['healing practices', 'wellness workshops', 'meditation areas', 'therapeutic arts'],
                hours: '10:00-22:00',
                accessibility: 'adapted for accessibility',
                description: 'Dedicated wellness area providing safe space for healing and therapeutic practices'
            }
        ]
    },

    organizations: {
        'primavera-sound': [
            {
                id: 'nobody-is-normal-info',
                name: '"Nobody is Normal" Information Stands',
                type: 'festival_service',
                location: 'Multiple locations throughout venue',
                services: ['harassment reporting', 'prevention materials', 'incident support', 'awareness campaigns'],
                contact: 'Available at marked information stands',
                femaleFeatures: ['diverse trained staff', 'feminist organization collaboration', 'multilingual support', 'confidential reporting'],
                description: 'Comprehensive anti-harassment program with trained diverse staff and feminist partnerships'
            }
        ],
        'roskilde': [
            {
                id: 'roskilde-soft-spots',
                name: 'Soft Spots Counseling',
                type: 'mental_health_support',
                location: 'Multiple quiet areas throughout festival',
                services: ['counseling', 'mental health support', 'crisis intervention', 'safe space provision'],
                contact: '24-hour helpline and on-site locations',
                femaleFeatures: ['trained social workers', 'confidential support', 'gender-sensitive care', '24/7 availability'],
                description: 'Professional counseling and mental health support in dedicated quiet spaces'
            }
        ],
        'shambhala': [
            {
                id: 'shambhacares',
                name: 'ShambhaCares Harm Reduction',
                type: 'harm_reduction_service',
                location: 'Central festival area and throughout grounds',
                services: ['harm reduction education', 'drug testing', 'medical support', 'crisis intervention'],
                contact: 'Identifiable crew members throughout site',
                femaleFeatures: ['inclusive approach', 'non-judgmental support', 'gender-aware services', 'safe space advocacy'],
                description: 'Comprehensive harm reduction program with drug testing and medical support'
            },
            {
                id: 'sanctuary-shambhala',
                name: 'The Sanctuary',
                type: 'mental_health_facility',
                location: 'Central festival location',
                services: ['24-hour counseling', 'anxiety support', 'emotional distress care', 'professional therapy'],
                contact: 'Central location with 24/7 staffing',
                femaleFeatures: ['professional counselors', 'private consultation', 'trauma-informed care', 'non-judgmental environment'],
                description: '24-hour professional mental health sanctuary with qualified counselors'
            }
        ],
        'electric-forest': [
            {
                id: 'her-forest-program',
                name: 'Her Forest Initiative',
                type: 'empowerment_program',
                location: 'Her Forest Group Camp and throughout grounds',
                services: ['empowerment workshops', 'community building', 'mentorship', 'networking'],
                contact: 'Her Forest volunteers throughout festival',
                femaleFeatures: ['femme-identifying focus', 'community support', 'empowerment workshops', 'safe networking'],
                description: 'Comprehensive empowerment program for femme-identifying festival attendees'
            }
        ],
        'tramlines': [
            {
                id: 'guardian-angels-tramlines',
                name: 'Guardian Angels Volunteer Program',
                type: 'safety_volunteer_service',
                location: 'Throughout Sheffield city center venue',
                services: ['safety assistance', 'incident reporting', 'crowd support', 'information provision'],
                contact: 'Volunteers in bright t-shirts throughout site',
                femaleFeatures: ['UN Women UK training', 'specialist safety training', 'approachable volunteers', 'female safety focus'],
                description: 'Volunteer safety program with UN Women UK training and specialist preparation'
            }
        ],
        'osheaga': [
            {
                id: 'les-hirondelles',
                name: 'Les Hirondelles Response Team',
                type: 'specialized_response_service',
                location: 'Throughout Parc Jean-Drapeau',
                services: ['harassment response', 'education', 'listening services', 'referral support'],
                contact: 'Team members with distinctive armbands',
                femaleFeatures: ['sexology training', 'specialized response', 'CALACS partnership', 'multilingual support'],
                description: 'Specialized response team trained in sexology and harassment prevention'
            }
        ],
        'womad': [
            {
                id: 'help-support-tent',
                name: 'Help & Support Tent',
                type: 'festival_service',
                location: 'Central festival area',
                services: ['crisis support', 'lost property', 'information', 'safety assistance'],
                contact: 'Available on-site during festival hours',
                femaleFeatures: ['female staff available', 'private consultation', 'confidential support', '24/7 availability'],
                description: 'Comprehensive support services with specially trained female staff'
            }
        ],
        'coachella': [
            {
                id: 'coachella-medical-services',
                name: 'Coachella Medical Services',
                type: 'medical_support',
                location: 'Multiple festival locations',
                services: ['emergency medical care', 'first aid', 'heat exhaustion treatment', 'mental health support'],
                contact: 'Available at medical tents throughout site',
                femaleFeatures: ['female medical staff', 'privacy considerations', 'desert health expertise', 'trauma-informed care'],
                description: 'Comprehensive medical services with desert health expertise and female-friendly care'
            }
        ],
        'glastonbury': [
            {
                id: 'glastonbury-welfare',
                name: 'Glastonbury Festival Welfare',
                type: 'welfare_service',
                location: 'Welfare tents throughout site',
                services: ['crisis support', 'mental health first aid', 'safe space provision', 'general welfare'],
                contact: 'Welfare tents marked throughout festival',
                femaleFeatures: ['female welfare officers', 'women-only spaces available', 'trauma-informed support', 'confidential services'],
                description: 'Comprehensive welfare services with decades of experience and female-specific support options'
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FESTIVALS_DATA;
} else {
    window.FESTIVALS_DATA = FESTIVALS_DATA;
}