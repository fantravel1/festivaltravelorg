// festivals-data.js - Complete festival database for dynamic deployment
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
                'Anti-harassment policy',
                'Consent awareness campaigns'
            ],
            accessibilityFeatures: [
                'Wheelchair accessible viewing areas',
                'BSL interpreters available',
                'Quiet spaces for sensory breaks',
                'Accessible toilet facilities'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Text 'HELP' to 67766" },
                { service: "UK Emergency Services", number: "999" },
                { service: "Festival Medical", number: "Available at medical tents" },
                { service: "Local Police", number: "101 (non-emergency)" }
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
                'Comprehensive medical facilities',
                'Professional security throughout',
                'Anti-harassment policy enforcement',
                'Safe ride partnerships',
                'Emergency response teams',
                'Hydration stations everywhere'
            ],
            accessibilityFeatures: [
                'ADA compliance throughout',
                'Accessible camping options',
                'Sign language interpretation',
                'Sensory-friendly spaces'
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
            description: 'Legendary British festival with strong community ethos, excellent welfare services, and decades of experience creating safe, inclusive environments.',
            safetyRating: 5,
            attendeeRating: 4.9,
            tags: ['Rock', 'Alternative', 'World Music', 'Arts', 'Activism'],
            website: 'https://glastonburyfestivals.co.uk',
            ticketPrice: '£335-380',
            capacity: 210000,
            founded: 1970,
            safetyFeatures: [
                'Extensive welfare services',
                'Women-only areas available',
                'Professional stewarding',
                'Comprehensive medical care',
                'Lost child protocols',
                'Mental health first aid'
            ],
            accessibilityFeatures: [
                'Dedicated accessibility team',
                'Accessible viewing areas',
                'Personal assistant tickets',
                'Accessible camping'
            ],
            emergencyContacts: [
                { service: "Festival Security", number: "Security posts throughout site" },
                { service: "UK Emergency Services", number: "999" },
                { service: "Festival Welfare", number: "Welfare tents throughout site" },
                { service: "Local Police", number: "101 (non-emergency)" }
            ]
        },
        {
            id: 'roskilde',
            name: 'Roskilde Festival',
            location: 'Roskilde, Denmark',
            country: 'Denmark',
            dates: 'June 28 - July 5, 2025',
            description: 'Europe\'s largest music festival with pioneering safety initiatives, including consent campaigns and comprehensive support services for all attendees.',
            safetyRating: 5,
            attendeeRating: 4.7,
            tags: ['Rock', 'Electronic', 'Nordic Culture', 'Activism'],
            website: 'https://roskilde-festival.dk',
            ticketPrice: '€210-320',
            capacity: 130000,
            founded: 1971,
            safetyFeatures: [
                'Pioneering consent campaigns',
                'Safer partying initiatives',
                'Comprehensive volunteer network',
                'Professional security training',
                'Safe space volunteers',
                'Anonymous reporting system'
            ],
            accessibilityFeatures: [
                'Comprehensive accessibility services',
                'Disabled parking areas',
                'Sign language interpretation',
                'Mobility assistance'
            ],
            emergencyContacts: [
                { service: "Festival Emergency", number: "4630 0900" },
                { service: "Danish Emergency Services", number: "112" },
                { service: "Festival Medical", number: "Available throughout site" },
                { service: "Police (non-emergency)", number: "114" }
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
                'State-of-the-art security',
                'International safety standards',
                'Comprehensive medical facilities',
                'Anti-harassment initiatives',
                'Safe space ambassadors',
                'Emergency response teams'
            ],
            accessibilityFeatures: [
                'Full accessibility program',
                'Companion tickets available',
                'Accessible viewing platforms',
                'Support team assistance'
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
            description: 'Japan\'s premier rock festival set in beautiful mountain scenery with exceptional Japanese hospitality and safety standards.',
            safetyRating: 5,
            attendeeRating: 4.8,
            tags: ['Rock', 'Electronic', 'Japanese Culture', 'Mountain Setting'],
            website: 'https://fujirock-eng.com',
            ticketPrice: '¥45,000-65,000',
            capacity: 100000,
            founded: 1997,
            safetyFeatures: [
                'Japanese safety excellence',
                'Respectful crowd culture',
                'Excellent public transport',
                'Clean facilities throughout',
                'Professional medical staff',
                'Lost and found efficiency'
            ],
            accessibilityFeatures: [
                'Wheelchair accessible areas',
                'English language support',
                'Clear signage systems',
                'Accessible transportation'
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
            description: 'World\'s largest jazz festival with free outdoor concerts, safe urban setting, and excellent Canadian hospitality in vibrant Montreal.',
            safetyRating: 5,
            attendeeRating: 4.7,
            tags: ['Jazz', 'Urban', 'Free Events', 'Cultural', 'International'],
            website: 'https://montrealjazzfest.com',
            ticketPrice: 'Free-$150',
            capacity: 2000000,
            founded: 1980,
            safetyFeatures: [
                'Urban safety infrastructure',
                'Police presence throughout',
                'Well-lit festival areas',
                'Safe public transportation',
                'Emergency services nearby',
                'Community volunteer network'
            ],
            accessibilityFeatures: [
                'Accessible venue compliance',
                'ASL interpretation available',
                'Wheelchair accessible areas',
                'Accessible public transport'
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
                'Nordic safety excellence',
                'Professional security team',
                'Safe urban environment',
                'Excellent public transport',
                'Medical facilities on-site',
                'Sustainability initiatives'
            ],
            accessibilityFeatures: [
                'Comprehensive accessibility',
                'Mobility assistance available',
                'Accessible festival areas',
                'Support person tickets'
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
                'Comprehensive medical facilities',
                'Professional security team',
                'Heat safety protocols',
                'Anti-harassment policies',
                'Safe transport options',
                'Mental health first aid'
            ],
            accessibilityFeatures: [
                'Accessibility companion program',
                'Wheelchair accessible areas',
                'Accessible camping options',
                'Support person tickets'
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
                'Family-friendly environment',
                'Excellent medical facilities',
                'Professional security team',
                'Safe camping areas',
                'Lost child protocol',
                'Welfare tent services'
            ],
            accessibilityFeatures: [
                'Accessibility viewing platforms',
                'Companion tickets available',
                'Accessible camping options',
                'Sensory-friendly spaces'
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
                website: 'https://travelodge.co.uk',
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
                website: 'https://omnihotels.com',
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
                website: 'https://thegeorgeinn.co.uk',
                contact: '+44 1458 831146',
                description: 'Historic inn in safe Somerset village with traditional British hospitality'
            }
        ]
    },

    bars: {
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