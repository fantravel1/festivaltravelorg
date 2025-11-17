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
            womensExperiences: {
                highlights: [
                    'Strong female artist representation across all stages with 50% female-led performances',
                    'Women in World Music workshops celebrating female musicians from diverse cultures',
                    'Female-led drumming circles and percussion workshops',
                    'Safe, well-lit family camping areas perfect for mothers traveling with children',
                    'Dedicated women\'s wellness and mindfulness spaces'
                ],
                dayInTheLife: [
                    {
                        time: '9:00 AM',
                        title: 'Morning Yoga in the Beautiful Park Grounds',
                        description: 'Start your day with gentle yoga on the historic Charlton Park grounds. The English countryside surrounds you as you stretch and breathe.',
                        location: 'Yoga Area, Charlton Park',
                        vibe: '🧘 Peaceful & Grounding',
                        realReference: 'WOMAD takes place in the stunning Charlton Park - yoga and wellness activities start early each morning',
                        feeling: 'Dew on grass. Historic mansion in the distance. Deep breaths. You feel connected to earth and centuries of history.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Women in World Music Workshop',
                        description: 'Join a powerful workshop celebrating female musicians from diverse cultures. Learn traditional instruments, hear stories, celebrate global sisterhood.',
                        location: 'World of Words Tent',
                        vibe: '🎶 Educational & Inspiring',
                        realReference: 'WOMAD\'s World of Words tent features workshops on world music traditions with many sessions highlighting female musicians',
                        feeling: 'Women from 6 continents sharing music. You hold a djembe. She teaches you the rhythm. Language disappears. Music connects.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Taste the World - Communal Dining',
                        description: 'Solo traveler? The Taste the World food area has communal tables perfect for meeting people. Try cuisine from every continent while making friends.',
                        location: 'Taste the World Area',
                        vibe: '🍜 Social & Delicious',
                        realReference: 'Taste the World is WOMAD\'s international food area featuring cuisine from around the globe with communal seating',
                        feeling: 'You sit with strangers eating Ethiopian injera. Within minutes, you\'re sharing travel stories and festival plans. Family found.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Female-Led Drumming Circle',
                        description: 'Join dozens of women in a powerful drumming circle. No experience needed - just bring your energy. Feel rhythm move through your body.',
                        location: 'Workshop Stage',
                        vibe: '🥁 Powerful & Primal',
                        realReference: 'WOMAD features regular drumming workshops and circles, often led by female percussionists from various traditions',
                        feeling: 'Drums speaking. Your hands keeping rhythm. Sweat and laughter. You\'ve never felt more powerful, more connected to ancient feminine energy.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Discover Female Artists from 6 Continents',
                        description: 'WOMAD\'s stages showcase incredible women musicians. From Senegalese griot singers to Australian didgeridoo players - watch women make history.',
                        location: 'Open Air Stage / Siam Tent',
                        vibe: '🌍 Diverse & Eye-opening',
                        realReference: 'WOMAD features female artists from every continent - past performers include Angelique Kidjo, Buika, and countless global stars',
                        feeling: 'Her voice carries centuries. Instruments you\'ve never seen. Music transcending language. You witness the world\'s diversity celebrated.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Girls\' Drumming Initiative Performance',
                        description: 'Watch young women perform after completing WOMAD\'s empowerment program. See the next generation of female musicians taking the stage with confidence.',
                        location: 'Charlie Gillett Stage',
                        vibe: '✨ Inspiring & Hopeful',
                        realReference: 'WOMAD supports girls\' music education programs and often features young female performers',
                        feeling: 'Girls no older than 12 commanding the stage. Their confidence infectious. You remember your own power at that age. You feel hope.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Women\'s Global Solidarity Conversations',
                        description: 'Join intimate conversations with women from around the world. Share stories, discuss challenges, celebrate victories. Global sisterhood in action.',
                        location: 'World of Words Tent',
                        vibe: '💬 Deep & Connecting',
                        realReference: 'WOMAD\'s World of Words features talks and conversations on social justice, women\'s rights, and global solidarity',
                        feeling: 'A woman from Syria. Another from Brazil. You from your town. Different worlds, same struggles. You realize: sisterhood is global.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Dance to Matriarchal Music Traditions',
                        description: 'Experience music from cultures where women led. Matriarchal traditions honored. Female-led ensembles commanding stages. History reclaimed through sound.',
                        location: 'Siam Tent',
                        vibe: '👑 Powerful & Historical',
                        realReference: 'WOMAD celebrates matriarchal music traditions and features performances highlighting women\'s roles in musical heritage',
                        feeling: 'Ancient rhythms. Women\'s voices in harmony. You dance to traditions where women led. You feel your ancestors smiling.'
                    },
                    {
                        time: '12:30 AM',
                        title: 'Late Night World Beat Dance Party',
                        description: 'The festival\'s still going! Dance to Afrobeat, cumbia, reggae, all with strong female presence. The whole world dances together under English stars.',
                        location: 'Open Air Stage',
                        vibe: '🎉 Joyful & United',
                        realReference: 'WOMAD stages run late with dance music from global traditions - a celebration of cultural diversity',
                        feeling: 'Brazilian beside Nigerian beside British. All dancing the same beat. Borders dissolve. Music is universal. You are home.'
                    },
                    {
                        time: '2:00 AM',
                        title: 'Walk Back Through Safe, Lit Pathways',
                        description: 'Head back to family camping on well-lit paths. Feel safe, feel happy, feel enriched by global culture. Plan tomorrow\'s discoveries.',
                        location: 'Walking to Family Camping Area',
                        vibe: '🌙 Content & Safe',
                        realReference: 'WOMAD features well-lit pathways and safe family camping areas - perfect for mothers and solo travelers',
                        feeling: 'Lanterns lighting your way. Music fading behind you. Your heart full of rhythms from around the world. Tomorrow you do it again.'
                    }
                ],
                soloTravelTips: [
                    'Join the WOMAD Women\'s Meetup group - organized gatherings throughout the festival',
                    'Participate in morning yoga sessions - great way to meet other solo travelers',
                    'The Taste the World area is perfect for solo dining with communal tables',
                    'Volunteer program offers instant community for solo attendees'
                ],
                empowermentPrograms: [
                    'Women in Music panel discussions featuring international female artists',
                    'Female entrepreneurship workshops in the World of Words tent',
                    'Girls\' drumming initiative - empowering young women through music',
                    'Women\'s global solidarity conversations and cultural exchanges'
                ],
                femaleArtistHighlights: [
                    'Celebrating female artists from 6 continents showcasing diverse musical traditions',
                    'Female-led world music ensembles and orchestras',
                    'Rising female stars platform - launching pad for emerging talent',
                    'Matriarchal music traditions honored and celebrated'
                ]
            },
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
            womensExperiences: {
                highlights: [
                    'Industry-leading 50/50 gender equality commitment in artist lineups since 2019',
                    'Women\'s music industry networking events and mentorship programs',
                    'Female DJ workshops and electronic music production masterclasses',
                    'Safe dance spaces with visible "Nobody is Normal" support staff',
                    'Barcelona\'s vibrant feminist cultural scene extends to the festival grounds'
                ],
                dayInTheLife: [
                    {
                        time: '9:00 AM',
                        title: 'Beach Yoga Session in Barceloneta',
                        description: 'Start your day with sunrise yoga on Barcelona\'s beach before the festival begins. Connect with other early risers while the Mediterranean sparkles.',
                        location: 'Barceloneta Beach',
                        vibe: '🌅 Peaceful & Beachy',
                        realReference: 'Many Primavera attendees start their day with beach yoga - Barcelona\'s beaches are steps from the festival site',
                        feeling: 'Toes in sand, salt air, stretching as the city wakes. You feel grounded before the music begins.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Explore El Born & Gràcia Neighborhoods',
                        description: 'Wander through Barcelona\'s safe, female-friendly neighborhoods. Coffee at local cafes, vintage shopping, soaking in the feminist street art and culture.',
                        location: 'El Born / Gràcia',
                        vibe: '☕ Cultural & Exploring',
                        realReference: 'El Born and Gràcia are known for feminist bookshops, safe streets, and vibrant women-led cultural spaces',
                        feeling: 'Narrow streets, colorful buildings. You feel the city\'s feminist energy - this is where activism meets art.'
                    },
                    {
                        time: '2:00 PM',
                        title: 'Primavera Pro Women in Music Conference',
                        description: 'Attend powerful panel discussions featuring women music industry leaders, label executives, and artists. Network, learn, get inspired.',
                        location: 'Primavera Pro Venue',
                        vibe: '💼 Professional & Empowering',
                        realReference: 'Primavera Pro runs during the festival with dedicated programming on gender equality and women in music - past speakers include major industry figures',
                        feeling: 'Conference room buzzing with brilliant women. Business cards exchanged. You realize you belong in this industry.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Arrive at Parc del Fòrum - Festival Begins',
                        description: 'Head to the stunning waterfront venue as the festival gates open. The Mediterranean as your backdrop, multiple stages calling your name.',
                        location: 'Parc del Fòrum',
                        vibe: '🎪 Anticipation & Excitement',
                        realReference: 'Primavera Sound takes place at Parc del Fòrum, a massive waterfront space with views of the Mediterranean',
                        feeling: 'You walk through the gates. Music pulses from every direction. The sea breeze mixes with bass. Adventure begins.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Catch Groundbreaking Female Headliner',
                        description: 'Watch a legendary female artist on the main stage as the sun sets over the water. Part of Primavera\'s 50/50 gender commitment - women making history.',
                        location: 'Primavera Stage',
                        vibe: '🎤 Powerful & Historic',
                        realReference: 'Primavera Sound\'s 50/50 lineup commitment since 2019 means female headliners like Cardi B, Lorde, FKA twigs, and Bikini Kill have graced the stages',
                        feeling: 'She owns this stage. Thousands singing along. The gender gap doesn\'t exist here. This is equality in action.'
                    },
                    {
                        time: '9:30 PM',
                        title: 'Electronic Music Masterclass with Female DJ',
                        description: 'Join an intimate workshop where a female DJ teaches production basics. Hands-on learning from a woman who\'s breaking barriers in electronic music.',
                        location: 'Workshop Area',
                        vibe: '🎧 Learning & Inspired',
                        realReference: 'Primavera regularly features workshops and masterclasses with female electronic music producers and DJs',
                        feeling: 'Your hands on the equipment. She\'s patient, encouraging. "You have the ear for this," she says. You believe her.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Dance to Female DJs Across Multiple Stages',
                        description: 'Primavera\'s commitment means incredible female DJs on every stage. Choose your vibe: techno, house, experimental, bass - all led by women.',
                        location: 'Multiple Stages',
                        vibe: '💃 Energetic & Free',
                        realReference: 'With 50/50 programming, Primavera features female DJs like The Blessed Madonna, Peggy Gou, Honey Dijon, and many more',
                        feeling: 'You dance between stages. Every set is fire. Women commanding decks. You\'ve never felt more alive.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Nobody is Normal Safe Space Check-in',
                        description: 'See the "Nobody is Normal" protocol in action - trained staff visible everywhere, information stands accessible, feeling of safety palpable.',
                        location: 'Throughout Festival',
                        vibe: '🛡️ Safe & Supported',
                        realReference: 'Primavera\'s "Nobody is Normal" protocol includes trained staff, clear reporting systems, and feminist organization partnerships',
                        feeling: 'You notice the purple shirts everywhere. Someone asks if you\'re okay. You realize: this place actually cares.'
                    },
                    {
                        time: '3:00 AM',
                        title: 'Late Night Experimental Electronic',
                        description: 'Discover cutting-edge female producers on smaller stages. The real music nerds come out now. This is where genre boundaries dissolve.',
                        location: 'Pull&Bear Stage / Adidas Stage',
                        vibe: '🔮 Experimental & Mind-bending',
                        realReference: 'Primavera\'s smaller stages feature experimental electronic music until sunrise - past performers include Arca, Yaeji, and other boundary-pushers',
                        feeling: 'Sound you\'ve never heard. Visual art you can\'t describe. You\'re witnessing the future of music being created.'
                    },
                    {
                        time: '5:00 AM',
                        title: 'Sunrise Over the Mediterranean',
                        description: 'As the festival winds down, watch the sun rise over the sea. Music still playing softly. New friends beside you. Barcelona waking up.',
                        location: 'Waterfront at Parc del Fòrum',
                        vibe: '🌊 Magical & Reflective',
                        realReference: 'Primavera Sound runs until sunrise - the waterfront location creates stunning sunrise moments',
                        feeling: 'Pink sky. Waves lapping. Last beats fading. You made it to sunrise. Barcelona never felt more like home.'
                    }
                ],
                soloTravelTips: [
                    'Stay in El Born or Gràcia neighborhoods - safe, female-friendly with great nightlife',
                    'Join Primavera Women\'s Social Media groups for pre-festival meetups',
                    'Take advantage of the excellent Barcelona metro system - safe until late',
                    'Beach yoga sessions in the morning are perfect for meeting other solo travelers',
                    'Festival\'s diverse international crowd makes solo attendance completely normal'
                ],
                empowermentPrograms: [
                    'Primavera Pro conferences featuring women music industry leaders',
                    'Feminist activist collaborations and awareness campaigns',
                    'Women in Electronic Music panel discussions and networking',
                    'Gender equality workshops and bystander intervention training',
                    'Support for female-led local community organizations'
                ],
                femaleArtistHighlights: [
                    '50% female headliners and performers across all stages',
                    'Showcasing groundbreaking female electronic music producers',
                    'Platform for emerging female artists from Spain and internationally',
                    'Celebrating feminist punk, riot grrrl, and women-led alternative movements',
                    'Female sound engineers and production crews prominently featured'
                ]
            },
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
            womensExperiences: {
                highlights: [
                    'Nordic gender equality excellence reflected throughout festival culture',
                    'Pioneering consent culture campaigns making respectful behavior the norm',
                    'Soft Spots counseling areas offering professional mental health support',
                    'Exceptionally high female attendance (near 50/50 gender balance)',
                    'Safe, progressive Scandinavian culture promotes women\'s freedom and safety',
                    'Women-led activist organizations and social impact initiatives'
                ],
                dayInTheLife: [
                    {
                        time: '10:00 AM',
                        title: 'Explore Copenhagen Before Festival',
                        description: 'Start in the world\'s most female-solo-traveler-friendly city. Bike through Nørrebro, coffee in feminist cafes, feel Danish safety and equality.',
                        location: 'Copenhagen - Nørrebro/Vesterbro',
                        vibe: '🚴 Safe & Empowering',
                        realReference: 'Copenhagen ranks as one of the world\'s safest cities for solo female travelers - Roskilde is just 30 minutes away',
                        feeling: 'Biking like a local. Everyone speaks English. You feel safe walking anywhere. This is what gender equality looks like.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Arrive at Roskilde - Join Camping Community',
                        description: 'Set up camp in one of the friendliest camping scenes worldwide. Danish culture of trust means instant community, shared resources, open hearts.',
                        location: 'Roskilde Camping Areas',
                        vibe: '⛺ Welcoming & Communal',
                        realReference: 'Roskilde\'s camping culture is legendary - attendees often arrive days early to build community',
                        feeling: 'Your neighbor offers you a beer. Another helps with your tent. Within an hour, you have a camp family. This is Denmark.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Consent Culture Workshop',
                        description: 'Join Roskilde\'s pioneering consent education program. Learn, practice, become part of creating a respectful festival culture.',
                        location: 'Workshop Area',
                        vibe: '📚 Educational & Progressive',
                        realReference: 'Roskilde has been a leader in consent culture education with workshops, peer programs, and visible campaigns since the 2000s',
                        feeling: 'Interactive exercises. Real scenarios. Everyone taking it seriously. You feel empowered to set boundaries, support others.'
                    },
                    {
                        time: '5:30 PM',
                        title: 'Women in Music Industry Panel',
                        description: 'Attend powerful talks featuring Nordic women music leaders. Hear about Denmark\'s success in gender equality, get inspired to pursue your dreams.',
                        location: 'Apollo Stage / Talk Tent',
                        vibe: '💼 Inspiring & Professional',
                        realReference: 'Roskilde features music industry talks and panels, often highlighting Nordic success in gender equality',
                        feeling: 'Danish women leading major labels, festivals, venues. They make it look possible. You take notes. You believe.'
                    },
                    {
                        time: '8:00 PM',
                        title: 'Catch Female Headliners Across Stages',
                        description: 'Incredible women commanding Orange Stage, Arena, and Rising stages. Gender-balanced programming means history-making performances all night.',
                        location: 'Orange Stage / Arena',
                        vibe: '🎸 Powerful & Equal',
                        realReference: 'Roskilde programs gender-diverse lineups - past female headliners include Cardi B, Dua Lipa, Björk, and countless icons',
                        feeling: 'She owns Orange Stage. 80,000 people watching. This is what equality sounds like. You sing every word.'
                    },
                    {
                        time: '10:00 PM',
                        title: 'Visit Soft Spots - Mental Health Support',
                        description: 'See Roskilde\'s innovative Soft Spots counseling areas. Professional support, peer listeners, breaking mental health stigma. Feel held.',
                        location: 'Soft Spots Tent',
                        vibe: '🧡 Supportive & Safe',
                        realReference: 'Roskilde\'s Soft Spots provides free counseling and mental health support 24/7 - pioneering festival mental health care',
                        feeling: 'You pop in. Trained counselors, calm space, no judgment. You don\'t need it now, but knowing it exists feels like safety.'
                    },
                    {
                        time: '12:00 AM',
                        title: 'Dance to Nordic Female Artists',
                        description: 'Discover incredible Scandinavian women performers - the Nordic music scene is bursting with female talent across all genres.',
                        location: 'Arena / Gloria',
                        vibe: '🎵 Discovering & Dancing',
                        realReference: 'Roskilde showcases Nordic female talent - artists like MØ, Soleima, and other Scandinavian stars regularly perform',
                        feeling: 'Nordic pop, electronic, experimental. Women singing in Danish, Swedish, Norwegian. You discover your new favorite artist.'
                    },
                    {
                        time: '2:00 AM',
                        title: 'Join Activist Conversations',
                        description: 'Roskilde\'s activist scene is alive. Join late-night conversations about women\'s rights, equality, social justice with fellow festivalgoers.',
                        location: 'Activist Village / Camp Areas',
                        vibe: '✊ Activating & Deep',
                        realReference: 'Roskilde has a strong activist presence with organizations focusing on social justice and equality',
                        feeling: 'Deep conversations by campfire. Danish activist shares strategies. You exchange contacts. This is movement-building.'
                    },
                    {
                        time: '4:00 AM',
                        title: 'Sunrise with New Festival Family',
                        description: 'Watch the sun rise over Roskilde with your new Danish and international friends. Share the night\'s stories, plan tomorrow\'s adventures.',
                        location: 'Camping Area',
                        vibe: '🌅 Connected & Grateful',
                        realReference: 'Roskilde\'s long summer days mean late sunrises around 4-5am - perfect for festival sunrise moments',
                        feeling: 'Pink sky. Friend from Germany beside friend from Denmark beside you. Language barriers dissolved by music and trust. Home.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Recovery Brunch & Bystander Training',
                        description: 'Late start! Join bystander intervention training over brunch. Learn how to support others, create safety, be an ally everywhere.',
                        location: 'Workshop Area',
                        vibe: '🥐 Practical & Empowering',
                        realReference: 'Roskilde offers bystander intervention training teaching attendees how to safely intervene when witnessing problems',
                        feeling: 'Role-playing intervention. Learning specific phrases. You leave knowing: you can help. You can make a difference.'
                    }
                ],
                soloTravelTips: [
                    'Denmark\'s exceptional safety makes solo travel comfortable and empowering',
                    'Join the Roskilde women\'s Facebook groups for pre-festival meetups',
                    'Copenhagen is incredibly solo-female-traveler friendly - explore before/after',
                    'Camping areas have strong community vibe perfect for meeting people',
                    'Scandinavian culture of trust and respect creates relaxed atmosphere',
                    'Public transport is safe, efficient, and runs late - easy independent navigation'
                ],
                empowermentPrograms: [
                    'Consent culture workshops and peer education programs',
                    'Women in Music industry panels and networking events',
                    'Activist organizations focusing on women\'s rights and gender equality',
                    'Volunteer programs building community and leadership skills',
                    'Bystander intervention training - empowering everyone to create safety',
                    'Mental health awareness and support services breaking stigma'
                ],
                femaleArtistHighlights: [
                    'Strong commitment to diverse lineups including prominent female headliners',
                    'Celebrating Nordic female artists and international women performers',
                    'Platform for emerging female talent across all genres',
                    'Women festival organizers and production crew visible and celebrated',
                    'Gender-balanced programming across Rising, Arena, and Orange stages'
                ]
            },
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
            womensExperiences: {
                highlights: [
                    'Dedicated Safe Space for women, BIPOC, and LGBTQIA2S+ community members',
                    'Women-led harm reduction and peer support teams',
                    'Female DJs and producers prominently featured across all 6 stages',
                    'Judgment-free zone promoting authentic self-expression and body positivity',
                    'The Sanctuary offers 24-hour professional support with trauma-informed care',
                    'River swimming and natural beauty create healing, feminine-energy spaces'
                ],
                dayInTheLife: [
                    {
                        time: '8:00 AM',
                        title: 'Sunrise Yoga by the Salmo River',
                        description: 'Wake up to birdsong and join fellow festivalgoers for yoga on the riverbank. The Salmo River flows beside camp, creating the most serene start imaginable.',
                        location: 'Riverbank near Safe Space',
                        vibe: '🌄 Serene & Grounding',
                        realReference: 'The Salmo River is a central feature of Shambhala - many attendees start days with riverside yoga and meditation',
                        feeling: 'River sounds. Mountain air. Your mat on soft grass. Nature holds you as you stretch into the day.'
                    },
                    {
                        time: '10:00 AM',
                        title: 'Visit the Safe Space - Connect & Recharge',
                        description: 'Drop into the dedicated Safe Space for women, BIPOC, and LGBTQIA2S+ community. Meet new friends, share experiences, rest in intentional community.',
                        location: 'Safe Space Tent',
                        vibe: '💜 Safe & Connected',
                        realReference: 'Shambhala\'s Safe Space is a dedicated area for marginalized communities with comfortable seating, resources, and peer support',
                        feeling: 'You walk in. Everyone smiles. "First Shambha?" someone asks. Instant belonging. This is your sanctuary.'
                    },
                    {
                        time: '12:00 PM',
                        title: 'River Swimming & Natural Beauty',
                        description: 'Join other women for a refreshing dip in the Salmo River. The cold water wakes you up, the mountains remind you of your power.',
                        location: 'Salmo River',
                        vibe: '💧 Refreshing & Wild',
                        realReference: 'The Salmo River offers swimming spots - a beloved Shambhala tradition for cooling off and connecting with nature',
                        feeling: 'Cold water shocks your system. You surface laughing. A stranger becomes a friend. River magic is real.'
                    },
                    {
                        time: '2:00 PM',
                        title: 'Consent Culture Workshop',
                        description: 'Participate in a powerful workshop on consent, boundaries, and community care. Learn bystander intervention skills that empower you everywhere.',
                        location: 'Safe Space / Workshop Area',
                        vibe: '💪 Empowering & Educational',
                        realReference: 'ShambhaCares offers consent workshops and bystander intervention training throughout the festival',
                        feeling: 'Role-playing scenarios. Learning to say no. Learning to support others. You leave feeling powerful, prepared.'
                    },
                    {
                        time: '4:30 PM',
                        title: 'Women in Bass Music Workshop',
                        description: 'Learn production techniques from female bass music producers. Get hands-on with equipment, ask questions, discover your creative power.',
                        location: 'Workshop Tent',
                        vibe: '🎛️ Creative & Inspiring',
                        realReference: 'Shambhala features workshops on music production including sessions led by female DJs and producers',
                        feeling: 'Bass vibrating through you. She shows you how she creates those drops. "Try it," she says. You do. Magic.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Catch Female DJs Across 6 Stages',
                        description: 'Incredible women commanding stages: The Pagoda, The Village, Fractal Forest, The Grove, Amp, and Living Room. Pick your vibe, all led by women.',
                        location: 'Multiple Stages',
                        vibe: '🎵 Electric & Diverse',
                        realReference: 'Shambhala has 6 uniquely themed stages - past female performers include CloZee, LP Giobbi, and many powerful women in bass music',
                        feeling: 'You wander between stages. Each vibe different. Every DJ a woman owning her craft. You feel invincible.'
                    },
                    {
                        time: '10:00 PM',
                        title: 'Body Positivity & Self-Love Circle',
                        description: 'Join a powerful circle in the Safe Space. Share, heal, celebrate your authentic self. Witness transformation happen in real-time.',
                        location: 'Safe Space',
                        vibe: '✨ Healing & Transformative',
                        realReference: 'The Safe Space hosts empowerment programming including body positivity circles and healing spaces',
                        feeling: 'Tears. Laughter. Sharing secrets. A complete stranger holds space for your pain. You feel lighter than air.'
                    },
                    {
                        time: '12:00 AM',
                        title: 'Dance at Fractal Forest - Pure Magic',
                        description: 'The most magical stage comes alive. Trees lit up, bass music, visual projections. Dance with your new Shambha-family under the stars.',
                        location: 'Fractal Forest Stage',
                        vibe: '🌲 Magical & Euphoric',
                        realReference: 'Fractal Forest is Shambhala\'s iconic stage featuring elaborate tree decorations, lighting, and bass music - a fan favorite',
                        feeling: 'Lights dance through trees. Bass moves your soul. You\'re surrounded by friends you made today. This is family.'
                    },
                    {
                        time: '2:00 AM',
                        title: 'Visit The Sanctuary if Needed',
                        description: 'See the 24/7 Sanctuary in action - professional counselors, trauma-informed care, peers trained in support. Feel safe knowing help is always available.',
                        location: 'The Sanctuary',
                        vibe: '🕊️ Supportive & Safe',
                        realReference: 'Shambhala\'s Sanctuary offers 24/7 professional support with trauma-informed care and crisis intervention',
                        feeling: 'You peek in. Soft lighting, calm voices, people being held with care. You feel safe knowing it exists.'
                    },
                    {
                        time: '4:00 AM',
                        title: 'Sunrise Session at The Pagoda',
                        description: 'The Pagoda stage plays until sunrise. Watch the mountains glow pink as bass music transitions to morning beats. You made it.',
                        location: 'The Pagoda Stage',
                        vibe: '🌅 Transcendent & Accomplished',
                        realReference: 'The Pagoda is known for sunrise sets - the stage faces east with views of the mountains',
                        feeling: 'Pink mountains. Last dancers moving slowly. You\'ve been dancing for hours. You\'ve never been more alive. Shambhala holds you.'
                    }
                ],
                soloTravelTips: [
                    'The Safe Space is perfect for solo travelers to connect and find community',
                    'Join sunrise yoga by the river - magical way to start your day and meet people',
                    'Shambha-family culture means solo travelers are welcomed and adopted immediately',
                    'The Sanctuary offers 24/7 support if you ever feel overwhelmed',
                    'Camp near the Safe Space for a more intentional, connected experience'
                ],
                empowermentPrograms: [
                    'Consent culture workshops and education throughout the festival',
                    'Women in bass music production workshops and DJ skills sessions',
                    'Mental health first aid and peer support training',
                    'Body positivity and self-love programming',
                    'LGBTQIA2S+ allyship and inclusion workshops',
                    'Trauma-informed care training for volunteers'
                ],
                femaleArtistHighlights: [
                    'Celebrating women in electronic music - from DJs to producers to visual artists',
                    'Female-led bass music taking center stage',
                    'Women sound designers and technical crew prominently featured',
                    'Platform for emerging female talent in underground electronic music',
                    'Honoring women who create safe, transformative festival experiences'
                ]
            },
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
            womensExperiences: {
                highlights: [
                    'Her Forest - dedicated community program for femme-identifying attendees with its own camp area',
                    'Daily morning Humanity Circles for connection, sharing, and empowerment',
                    'Women-led art installations and interactive forest experiences',
                    'Female-focused wellness activities including yoga, meditation, and breathwork',
                    'Magical forest setting creates safe, nurturing atmosphere for self-expression'
                ],
                dayInTheLife: [
                    {
                        time: '7:00 AM',
                        title: 'Sunrise Yoga at Her Forest',
                        description: 'Wake up to birdsong and join 50+ women for yoga as the sun rises over the forest. The Her Forest camp comes alive with gentle stretches and breathing exercises.',
                        location: 'Her Forest Group Camp',
                        vibe: '✨ Peaceful & Energizing',
                        realReference: 'Her Forest hosts daily morning yoga sessions - check their camp schedule board for exact times',
                        feeling: 'You roll out of your tent to misty morning air. The forest feels magical. Other women are stirring, smiling, welcoming you to the circle.'
                    },
                    {
                        time: '9:00 AM',
                        title: 'Her Forest Welcome Brunch',
                        description: 'Community breakfast where solo travelers meet their festival family! Share stories, make plans, and connect with other femme-identifying festivalgoers over coffee and breakfast.',
                        location: 'Her Forest Pavilion',
                        vibe: '💕 Community & Connection',
                        realReference: 'Her Forest Welcome Brunch happens on Day 1 - this is where lifelong friendships begin',
                        feeling: '"Hi! First timer?" "Me too!" Within 20 minutes you have 5 new friends and plans to meet at Sherwood Court later.'
                    },
                    {
                        time: '11:30 AM',
                        title: 'Women in Electronic Music Workshop',
                        description: 'Learn DJ basics and music production from female artists who perform at the festival. Hands-on session where you might discover a new passion!',
                        location: 'The Observatory',
                        vibe: '🎧 Educational & Inspiring',
                        realReference: 'Electric Forest regularly features music production workshops - past instructors have included female DJs from the lineup',
                        feeling: 'Your hands on the decks, headphones on, a female DJ showing you how to mix. "You\'re a natural!" she says. You feel powerful.'
                    },
                    {
                        time: '1:30 PM',
                        title: 'Explore the Forest Art Installations',
                        description: 'Wander through the enchanted forest discovering interactive art pieces, many created by women artists. The Hangar and Forest Stage areas transform into wonderlands.',
                        location: 'Sherwood Forest paths',
                        vibe: '🌲 Magical & Wonder-filled',
                        realReference: 'The forest is filled with 100+ art installations that change yearly - many by female artists',
                        feeling: 'You turn a corner and gasp - a glowing installation of butterflies. You reach out, they respond to your touch. Magic is real here.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Body Positivity Workshop',
                        description: 'Join a powerful session on self-love and body acceptance in Her Forest\'s sacred space. Share, heal, and celebrate your authentic self with other women.',
                        location: 'Her Forest Sacred Space',
                        vibe: '💪 Empowering & Healing',
                        realReference: 'Her Forest regularly hosts empowerment workshops throughout the festival weekend',
                        feeling: 'Tears, laughter, hugs. A stranger becomes a sister. You release shame you didn\'t know you were carrying.'
                    },
                    {
                        time: '5:30 PM',
                        title: 'Catch Female-Led Performances',
                        description: 'Amazing women artists taking stages across the forest! Check the lineup for female DJs at Ranch Arena, Tripolee, or Sherwood Court.',
                        location: 'Multiple Stages',
                        vibe: '🎤 Energetic & Inspiring',
                        realReference: 'Electric Forest 2024 featured artists like LP Giobbi, Cassian, Sofi Tukker, and other incredible female performers',
                        feeling: 'Bass drops, lights explode, you\'re dancing with your new Her Forest crew. A female DJ commands the stage. You feel invincible.'
                    },
                    {
                        time: '8:00 PM',
                        title: 'Her Forest Community Dinner',
                        description: 'Share a meal with your festival family. Bring something to contribute or just bring yourself. Stories, laughter, and planning the night\'s adventures.',
                        location: 'Her Forest Camp',
                        vibe: '🍽️ Warm & Connecting',
                        realReference: 'Community meals are a Her Forest tradition - gift economy style',
                        feeling: 'Someone passes you pasta, someone else braids your hair. "Which stage should we hit first?" Plans are made. Family is formed.'
                    },
                    {
                        time: '10:00 PM',
                        title: 'Dance Under the Stars at Sherwood Court',
                        description: 'The main stage comes alive! Dance with your crew, make new friends in the crowd, feel the energy of thousands moving as one to incredible music.',
                        location: 'Sherwood Court Main Stage',
                        vibe: '🌟 Electric & Euphoric',
                        realReference: 'Sherwood Court hosts headliners from 9pm-3am - past performers include String Cheese Incident, Bassnectar, and more',
                        feeling: 'Lights cascade over the trees. The bass moves through your body. You\'re surrounded by friends. This is freedom.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Late Night Forest Wandering',
                        description: 'Explore the forest when it truly comes alive. Secret shows, art installations glowing, intimate moments. Discover why they call it magic.',
                        location: 'Throughout Sherwood Forest',
                        vibe: '✨ Mystical & Intimate',
                        realReference: 'The forest stays active all night with secret performances and installations that only appear after dark',
                        feeling: 'Fairy lights. A violinist playing in a hidden grove. Strangers become friends. The forest holds you safely.'
                    },
                    {
                        time: '3:00 AM',
                        title: 'Return to Her Forest Camp',
                        description: 'Head back to camp where someone has a fire going. Share the night\'s stories, make plans for tomorrow, fall asleep to laughter and forest sounds.',
                        location: 'Her Forest Group Camp',
                        vibe: '💫 Cozy & Safe',
                        realReference: 'Her Forest camp provides a safe landing spot all night - always someone awake to welcome you home',
                        feeling: 'Your tent feels like home. Tomorrow you do it all again. You fall asleep smiling, belonging to something beautiful.'
                    }
                ],
                soloTravelTips: [
                    'Her Forest Group Camp is THE place for solo female travelers - instant community and lifelong friendships',
                    'Attend Her Forest welcome brunch on Day 1 to meet your festival family',
                    'Join morning yoga and wellness sessions to connect with like-minded women',
                    'Participate in the gift economy and art exchanges - beautiful way to bond',
                    'The forest at night feels magical and safe with consistent lighting and friendly vibes'
                ],
                empowermentPrograms: [
                    'Her Forest Leadership Program - workshops on empowerment, consent, and community building',
                    'Women in Electronic Music production workshops and DJ lessons',
                    'Body positivity and self-love workshops in the forest',
                    'Female entrepreneurship and creative business panels',
                    'Mentorship circles connecting veteran festivalgoers with first-timers',
                    'Community meal sharing and intentional connection exercises'
                ],
                femaleArtistHighlights: [
                    'Strong representation of female DJs and electronic music producers',
                    'Women-led art installations throughout the enchanted forest',
                    'Female fire performers and flow artists celebrated',
                    'Platform for emerging female talent in bass music and house',
                    'Celebrating women who create the visual and sonic magic of the forest'
                ]
            },
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
            womensExperiences: {
                highlights: [
                    'Iconic women-only areas including the Sisterhood sanctuary space',
                    'Green Fields with goddess workshops, women\'s healing spaces, and feminist activism',
                    'Legendary female headliners making history on the Pyramid Stage',
                    'Women\'s rights activism and feminist organizations throughout the site',
                    'Shangri-La\'s women-led performance art and cabaret shows',
                    'Mother and baby facilities making it accessible for traveling mums'
                ],
                dayInTheLife: [
                    {
                        time: '8:00 AM',
                        title: 'Goddess Temple Morning Meditation',
                        description: 'Start your day in the sacred Goddess Temple in the Green Fields. Join women in circle for meditation, chanting, and setting intentions for the day.',
                        location: 'Goddess Temple, Green Fields',
                        vibe: '🙏 Sacred & Centering',
                        realReference: 'The Goddess Temple has been a Glastonbury staple since 2004, offering daily ceremonies and women\'s circles',
                        feeling: 'Incense smoke curls. Women\'s voices rise in harmony. You feel ancient wisdom flowing through this sacred space.'
                    },
                    {
                        time: '10:30 AM',
                        title: 'Explore The Park\'s Hidden Stages',
                        description: 'Wander through The Park area discovering intimate performances on small stages tucked between trees. Perfect solo exploration before crowds arrive.',
                        location: 'The Park',
                        vibe: '🌳 Intimate & Discovering',
                        realReference: 'The Park is Glastonbury\'s woodland area with intimate stages - past female performers include Laura Marling, Lianne La Havas',
                        feeling: 'Dappled sunlight. An acoustic set under the trees. You sit on the grass, coffee in hand, discovering your new favorite artist.'
                    },
                    {
                        time: '12:00 PM',
                        title: 'Women of the World (WOW) Panel Discussion',
                        description: 'Powerful talks featuring incredible women leaders, activists, and artists. Past speakers have included feminists, politicians, and cultural icons.',
                        location: 'WOW Stage or Leftfield',
                        vibe: '💡 Inspiring & Educational',
                        realReference: 'WOW Foundation regularly programs at Glastonbury - past panelists have included Jude Kelly, Annie Lennox, and other amazing women',
                        feeling: 'You\'re surrounded by brilliant minds. Notes furiously taken. Ideas sparking. You feel your worldview expanding.'
                    },
                    {
                        time: '2:00 PM',
                        title: 'Sisterhood Tent - Women\'s Safe Space',
                        description: 'Drop into the women-only sanctuary for a break from the crowds. Share stories, rest, connect with other women, or just recharge in safety.',
                        location: 'Sisterhood Tent',
                        vibe: '💕 Safe & Supportive',
                        realReference: 'Sisterhood spaces have operated at Glastonbury providing women-only areas for rest and connection',
                        feeling: 'Cool shade, comfy cushions. A woman shares her festival story. You feel seen, safe, understood. Sisterhood is real.'
                    },
                    {
                        time: '4:00 PM',
                        title: 'Catch Emerging Female Artists',
                        description: 'Head to the West Holts or Acoustic Stage for incredible female performers. These stages have launched the careers of amazing women artists.',
                        location: 'West Holts or Acoustic Stage',
                        vibe: '🎶 Discovering & Delighting',
                        realReference: 'West Holts and Acoustic stages feature diverse female talent - past performers include Lauryn Hill, Janelle Monáe, and many more',
                        feeling: 'Her voice soars. Goosebumps. You film a clip thinking "I\'ll tell people I saw her before she was huge."'
                    },
                    {
                        time: '6:30 PM',
                        title: 'Green Fields Feminist Activism Talks',
                        description: 'Join passionate discussions about women\'s rights, environmental activism, and social justice. The Green Fields is the festival\'s political heart.',
                        location: 'Green Fields',
                        vibe: '✊ Activating & Empowering',
                        realReference: 'Glastonbury\'s Green Fields hosts environmental and social justice organizations - a hub for feminist activism since the 1980s',
                        feeling: 'Fire in your belly. You sign petitions, exchange contacts. You\'re not just at a festival - you\'re part of a movement.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Legendary Female Headliner on Pyramid Stage',
                        description: 'Join 100,000+ people to witness history as an iconic female artist commands Glastonbury\'s legendary main stage. Dolly, Beyoncé, Adele have all made magic here.',
                        location: 'Pyramid Stage',
                        vibe: '⭐ Historic & Euphoric',
                        realReference: 'Glastonbury\'s Pyramid Stage has hosted legendary female headliners: Dolly Parton (2014), Beyoncé (2011), Adele (2016), plus countless other icons',
                        feeling: 'One hundred thousand voices singing together. She owns this stage. Tears streaming. You\'ll remember this moment forever.'
                    },
                    {
                        time: '11:30 PM',
                        title: 'Shangri-La\'s Women-Led Performance Art',
                        description: 'Dive into Shangri-La\'s dystopian wonderland where female performers, drag artists, and cabaret acts create mind-bending shows. Adult playground activated.',
                        location: 'Shangri-La',
                        vibe: '🔥 Wild & Liberating',
                        realReference: 'Shangri-La features women-led performance art, cabaret, and immersive experiences - a space for radical self-expression',
                        feeling: 'Lights flash. A female performer breathes fire. Boundaries dissolve. You dance with strangers who feel like family.'
                    },
                    {
                        time: '1:30 AM',
                        title: 'Late Night at Arcadia\'s Spider',
                        description: 'Dance under the massive spider sculpture shooting flames. Electronic music, pyrotechnics, pure energy. The night is still young.',
                        location: 'Arcadia',
                        vibe: '🕷️ Epic & Energetic',
                        realReference: 'Arcadia\'s spider stage is an iconic Glastonbury installation featuring electronic music and fire shows until 4am',
                        feeling: 'Bass reverberates through your chest. Flames shoot skyward. You\'re alive, electric, infinite. This is legendary.'
                    },
                    {
                        time: '3:00 AM',
                        title: 'Return to Camp via the Green Fields',
                        description: 'Walk back through the quiet Green Fields. The goddess temple glows softly. You reflect on an incredible day, already planning tomorrow.',
                        location: 'Walking to campsite',
                        vibe: '✨ Reflective & Content',
                        realReference: 'The Green Fields takes on a magical quality at night - solar lights, quiet conversations, the spiritual heart of Glastonbury',
                        feeling: 'Stars overhead. The festival sleeps but hums with energy. Your feet hurt but your heart is full. You belong here.'
                    }
                ],
                soloTravelTips: [
                    'The Green Fields are perfect for solo travelers seeking community and connection',
                    'Join women\'s circles and goddess workshops to meet like-minded festivalgoers',
                    'Volunteering programs create instant community and lifelong friendships',
                    'The Acoustic stage offers intimate performances perfect for solo enjoyment',
                    'Camp near The Park or Green Fields for a quieter, more connected experience'
                ],
                empowermentPrograms: [
                    'Women\'s rights and feminist activism talks in the Leftfield tent',
                    'Goddess worship and divine feminine workshops in Sacred Space',
                    'Women in Music panels celebrating female artists and industry pioneers',
                    'WOW - Women of the World festival programming',
                    'Environmental activism led by powerful women leaders',
                    'Body positivity and self-expression celebrations throughout'
                ],
                femaleArtistHighlights: [
                    'History-making female headliners on the Pyramid Stage',
                    'Celebrating 50+ years of groundbreaking women performers',
                    'Female-led bands across rock, folk, electronic, and world music',
                    'Platform for emerging UK female talent on smaller stages',
                    'Women sound engineers, stage managers, and festival organizers honored',
                    'Legendary performances by icons like Dolly Parton, Beyoncé, and Adele'
                ]
            },
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
        ],
        'tomorrowland': [
            {
                id: 'sleep-well-youth-hostel',
                name: 'Sleep Well Youth Hostel',
                type: 'female_friendly_hostel',
                distance: '25 km from festival (Brussels)',
                priceRange: '€35-65/night',
                safetyRating: 5,
                femaleFeatures: ['female-only dorms', 'women-only floors', '24hr female reception', 'secure lockers', 'safety-focused staff'],
                amenities: ['kitchen facilities', 'common areas', 'laundry', 'free WiFi', 'breakfast included'],
                contact: '+32 2 218 50 50',
                description: 'Modern hostel in Brussels with dedicated female-only areas and excellent safety record'
            },
            {
                id: 'hotel-des-galeries',
                name: 'Hotel des Galeries',
                type: 'boutique_hotel',
                distance: '30 km from festival (Brussels center)',
                priceRange: '€120-200/night',
                safetyRating: 5,
                femaleFeatures: ['solo female traveler focused', 'central safe location', '24hr concierge', 'well-lit entrance'],
                amenities: ['luxury rooms', 'restaurant', 'art gallery', 'business center'],
                contact: '+32 2 213 74 74',
                description: 'Boutique hotel in Brussels known for exceptional solo female traveler safety and service'
            },
            {
                id: 'yooma-urban-lodge',
                name: 'Yooma Urban Lodge',
                type: 'modern_hotel',
                distance: '28 km from festival (Brussels)',
                priceRange: '€80-140/night',
                safetyRating: 4,
                femaleFeatures: ['modern security systems', 'independent traveler focus', 'safe neighborhood', 'female-friendly design'],
                amenities: ['fitness center', 'co-working space', 'restaurant', 'modern rooms'],
                contact: '+32 2 421 94 20',
                description: 'Modern lodge popular with independent women travelers, emphasizing safety and comfort'
            }
        ],
        'fuji-rock': [
            {
                id: 'nine-hours-shinjuku',
                name: 'Nine Hours Shinjuku',
                type: 'capsule_hotel',
                distance: '2 hours from festival (Tokyo)',
                priceRange: '¥4,500-7,000/night',
                safetyRating: 5,
                femaleFeatures: ['women-only floors', 'female-only entrance', 'women-only amenities', 'high-tech security'],
                amenities: ['modern capsules', 'shared bathrooms', 'lockers', 'WiFi', 'minimalist design'],
                contact: '+81 3-6304-5757',
                description: 'Premium capsule hotel with dedicated women-only floors and cutting-edge security'
            },
            {
                id: 'prince-naeba-hotel',
                name: 'Prince Naeba Hotel',
                type: 'ski_resort_hotel',
                distance: 'On festival grounds',
                priceRange: '¥12,000-25,000/night',
                safetyRating: 5,
                femaleFeatures: ['on-site safety', 'female-only floor options', 'resort security', 'safe mountain environment'],
                amenities: ['ski resort facilities', 'multiple restaurants', 'hot springs', 'shuttle service'],
                contact: '+81 25-789-2211',
                description: 'On-site resort hotel with female-only floor options and comprehensive mountain safety'
            },
            {
                id: 'dormy-inn-niigata',
                name: 'Dormy Inn Niigata',
                type: 'business_hotel',
                distance: '90 min from festival',
                priceRange: '¥8,000-15,000/night',
                safetyRating: 4,
                femaleFeatures: ['women-only floors available', 'female amenities', 'business traveler safety', 'secure access'],
                amenities: ['hot spring bath', 'free ramen', 'laundry', 'business facilities'],
                contact: '+81 25-243-5489',
                description: 'Business hotel chain with women-only floors and excellent safety standards'
            }
        ],
        'montreal-jazz': [
            {
                id: 'hi-montreal-hostel',
                name: 'HI Montreal Hostel',
                type: 'female_friendly_hostel',
                distance: '2 km from festival area',
                priceRange: 'CAD $35-80/night',
                safetyRating: 5,
                femaleFeatures: ['female-only dorms', 'women-only floors', 'female safety programs', '24hr security'],
                amenities: ['kitchen facilities', 'common areas', 'laundry', 'free WiFi', 'breakfast available'],
                contact: '+1 514-843-3317',
                description: 'International hostel with comprehensive female-only accommodations and safety programs'
            },
            {
                id: 'casa-bianca-bb',
                name: 'Casa Bianca B&B',
                type: 'female_owned_bb',
                distance: '1.5 km from festival',
                priceRange: 'CAD $90-150/night',
                safetyRating: 5,
                femaleFeatures: ['female-owned and operated', 'women-focused service', 'safe Plateau location', 'personal attention'],
                amenities: ['breakfast included', 'garden terrace', 'local expertise', 'cozy atmosphere'],
                contact: '+1 514-312-3737',
                description: 'Female-owned B&B in safe Plateau area with personalized service for women travelers'
            },
            {
                id: 'hotel-zero1',
                name: 'Hotel Zero1',
                type: 'boutique_hotel',
                distance: '1 km from festival',
                priceRange: 'CAD $120-220/night',
                safetyRating: 4,
                femaleFeatures: ['solo female traveler packages', 'safe downtown location', 'women-friendly amenities', 'security focus'],
                amenities: ['fitness center', 'restaurant', 'modern design', 'business center'],
                contact: '+1 514-871-9696',
                description: 'Modern boutique hotel with special packages and services for solo female travelers'
            }
        ],
        'flow-festival': [
            {
                id: 'hotel-kaMP',
                name: 'Hotel Kämp',
                type: 'luxury_hotel',
                distance: '3 km from festival',
                priceRange: '€200-350/night',
                safetyRating: 5,
                femaleFeatures: ['luxury security', 'female concierge services', 'solo female traveler excellence', 'safe central location'],
                amenities: ['spa services', 'fine dining', 'fitness center', 'luxury amenities'],
                contact: '+358 9 576 111',
                description: 'Prestigious Helsinki hotel with exceptional reputation for solo female traveler safety and service'
            },
            {
                id: 'hostel-academica',
                name: 'Hostel Academica',
                type: 'female_friendly_hostel',
                distance: '2 km from festival',
                priceRange: '€30-70/night',
                safetyRating: 5,
                femaleFeatures: ['female-only rooms', 'women-only floors', 'female safety focus', 'secure environment'],
                amenities: ['shared kitchen', 'common areas', 'laundry', 'free WiFi', 'breakfast'],
                contact: '+358 9 1311 4334',
                description: 'University-based hostel with excellent female-only accommodations and safety standards'
            },
            {
                id: 'hotel-lilla-roberts',
                name: 'Hotel Lilla Roberts',
                type: 'design_hotel',
                distance: '2.5 km from festival',
                priceRange: '€120-200/night',
                safetyRating: 5,
                femaleFeatures: ['female management team', 'women-focused design', 'solo traveler specialization', 'artistic atmosphere'],
                amenities: ['design rooms', 'restaurant', 'art collection', 'wellness facilities'],
                contact: '+358 9 681 9680',
                description: 'Design hotel with female management team and specialized services for women travelers'
            }
        ],
        'splendour': [
            {
                id: 'arts-factory-lodge',
                name: 'Arts Factory Lodge',
                type: 'female_friendly_hostel',
                distance: '5 km from festival',
                priceRange: 'AU$40-90/night',
                safetyRating: 5,
                femaleFeatures: ['female-only dorms', 'women-only areas', 'solo female traveler hub', 'community atmosphere'],
                amenities: ['pool', 'cafe', 'arts workshops', 'live music', 'yoga classes'],
                contact: '+61 2 6685 7709',
                description: 'Iconic Byron Bay hostel extremely popular with solo female travelers and festival-goers'
            },
            {
                id: 'nimbin-waterfall-retreat',
                name: 'Nimbin Waterfall Retreat',
                type: 'female_operated_retreat',
                distance: '20 km from festival',
                priceRange: 'AU$80-160/night',
                safetyRating: 5,
                femaleFeatures: ['female-operated', 'women-only wellness programs', 'safe natural setting', 'holistic focus'],
                amenities: ['waterfall access', 'meditation spaces', 'organic meals', 'wellness treatments'],
                contact: '+61 2 6689 1234',
                description: 'Female-operated wellness retreat in natural setting with women-focused programs'
            },
            {
                id: 'byron-bay-yyy-hostel',
                name: 'Byron Bay YHA',
                type: 'youth_hostel',
                distance: '8 km from festival',
                priceRange: 'AU$35-75/night',
                safetyRating: 4,
                femaleFeatures: ['female-only dorms', 'women travelers focus', 'safe beachside location', 'community programs'],
                amenities: ['pool', 'kitchen', 'common areas', 'bike rental', 'beach access'],
                contact: '+61 2 6685 8788',
                description: 'YHA hostel with excellent female-only facilities and strong safety record'
            }
        ],
        'latitude': [
            {
                id: 'swan-hotel-southwold',
                name: 'The Swan Hotel Southwold',
                type: 'country_hotel',
                distance: '15 km from festival',
                priceRange: '£120-220/night',
                safetyRating: 5,
                femaleFeatures: ['female management', 'solo female traveler focus', 'safe coastal town', 'personal service'],
                amenities: ['restaurant', 'bar', 'sea views', 'traditional comfort'],
                contact: '+44 1502 722186',
                description: 'Traditional seaside hotel with female management and excellent solo traveler reputation'
            },
            {
                id: 'wentworth-hotel',
                name: 'Wentworth Hotel',
                type: 'seaside_hotel',
                distance: '12 km from festival',
                priceRange: '£90-170/night',
                safetyRating: 4,
                femaleFeatures: ['family-run hospitality', 'women-friendly atmosphere', 'safe Aldeburgh location', 'coastal safety'],
                amenities: ['sea views', 'restaurant', 'traditional rooms', 'local charm'],
                contact: '+44 1728 452312',
                description: 'Family-run hotel in safe Aldeburgh with welcoming atmosphere for solo female travelers'
            },
            {
                id: 'brudenell-hotel',
                name: 'Brudenell Hotel',
                type: 'boutique_hotel',
                distance: '12 km from festival',
                priceRange: '£110-190/night',
                safetyRating: 5,
                femaleFeatures: ['boutique safety standards', 'female-friendly service', 'beachfront security', 'solo traveler packages'],
                amenities: ['beachfront location', 'spa services', 'restaurant', 'modern amenities'],
                contact: '+44 1728 452071',
                description: 'Boutique beachfront hotel with specialized services and packages for solo female travelers'
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
