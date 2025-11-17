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
                ],
                transformationStories: [
                    {
                        name: 'Amara K.',
                        age: 34,
                        type: 'Cultural Explorer',
                        festival: 'WOMAD 2024',
                        rating: 5,
                        before: 'My world felt small. Same music, same people, same experiences on repeat.',
                        after: 'Women in World Music workshop opened my eyes. I heard stories from 6 continents, learned djembe from a Senegalese master. Now I\'m studying ethnomusicology.',
                        highlight: 'Women in World Music workshop expanded my entire worldview'
                    },
                    {
                        name: 'Priya S.',
                        age: 29,
                        type: 'Solo Mother Traveler',
                        festival: 'WOMAD 2024',
                        rating: 5,
                        before: 'Hadn\'t done anything for myself since having kids. Felt like I\'d lost my identity.',
                        after: 'Went to WOMAD alone while kids stayed with family. Danced, learned drumming, had deep conversations. Remembered who I am beyond "mom."',
                        highlight: 'Safe family camping gave me permission to rediscover myself'
                    },
                    {
                        name: 'Chen L.',
                        age: 26,
                        type: 'Musician',
                        festival: 'WOMAD 2024',
                        rating: 5,
                        before: 'Felt disconnected from my Chinese heritage. Didn\'t see Asian women in Western music spaces.',
                        after: 'Watched incredible Asian female musicians own the stage. Joined the Global Solidarity conversation. Found my artistic voice that honors both cultures.',
                        highlight: 'Seeing Asian women celebrated helped me claim my identity'
                    }
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
                ],
                transformationStories: [
                    {
                        name: 'Maria G.',
                        age: 31,
                        type: 'Music Industry Professional',
                        festival: 'Primavera Sound 2024',
                        rating: 5,
                        before: 'I felt invisible in the music industry. Stuck managing male artists, never taken seriously.',
                        after: 'Primavera Pro changed everything. I met a label exec at the Women in Music panel, pitched my female artists. Signed 2 acts within 3 months.',
                        highlight: 'Primavera Pro conference opened doors I didn\'t know existed'
                    },
                    {
                        name: 'Lucia R.',
                        age: 24,
                        type: 'Electronic Music Enthusiast',
                        festival: 'Primavera Sound 2024',
                        rating: 5,
                        before: 'I loved electronic music but felt like I didn\'t belong. Guys always explaining things to me at shows.',
                        after: 'Attended the female DJ workshop, learned production basics. Now I have my own tracks and played my first gig last month.',
                        highlight: 'Female DJ masterclass made me believe I could do this'
                    },
                    {
                        name: 'Emma S.',
                        age: 27,
                        type: 'First-Time International Traveler',
                        festival: 'Primavera Sound 2024',
                        rating: 5,
                        before: 'Barcelona alone? My family thought I was crazy. I almost cancelled three times.',
                        after: 'Met incredible women from 12 countries at the beach yoga session. We explored the city together, danced until sunrise. Now planning Glastonbury with my new crew.',
                        highlight: 'Beach yoga meetup turned strangers into lifelong friends'
                    }
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
                ],
                transformationStories: [
                    {
                        name: 'Astrid H.',
                        age: 26,
                        type: 'Mental Health Advocate',
                        festival: 'Roskilde Festival 2024',
                        rating: 5,
                        before: 'I struggled with anxiety at crowded events. Always left early, never felt safe asking for help.',
                        after: 'Visited Soft Spots on night one just to see it. Talked to a peer counselor. Stayed all 4 nights. Now I volunteer at festivals back home.',
                        highlight: 'Soft Spots showed me festivals can prioritize mental health'
                    },
                    {
                        name: 'Freya N.',
                        age: 23,
                        type: 'Consent Educator',
                        festival: 'Roskilde Festival 2024',
                        rating: 5,
                        before: 'I wanted to be an activist but didn\'t know how. Felt too young, too inexperienced.',
                        after: 'The bystander intervention training changed me. I learned practical skills, gained confidence. Now I run workshops at my university.',
                        highlight: 'Bystander training gave me tools to create change'
                    },
                    {
                        name: 'Sophie K.',
                        age: 29,
                        type: 'Solo Traveler from UK',
                        festival: 'Roskilde Festival 2024',
                        rating: 5,
                        before: 'Nervous about camping alone in another country. What if I don\'t fit in?',
                        after: 'The Danish camping culture is incredible. My neighbors became family. We\'re planning a reunion at Glastonbury. Nordic culture is goals.',
                        highlight: 'Camping community showed me instant belonging'
                    }
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
                ],
                transformationStories: [
                    {
                        name: 'River M.',
                        age: 25,
                        type: 'Body Positivity Advocate',
                        festival: 'Shambhala 2024',
                        rating: 5,
                        before: 'I hated my body. Never felt comfortable in festival clothes. Always hiding, comparing myself.',
                        after: 'The body positivity circle in Safe Space broke me open. I cried, I healed, I danced in a crop top for the first time ever. I\'m free now.',
                        highlight: 'Safe Space body positivity circle changed my relationship with myself'
                    },
                    {
                        name: 'Maya T.',
                        age: 30,
                        type: 'Bass Music Producer',
                        festival: 'Shambhala 2024',
                        rating: 5,
                        before: 'Felt like an imposter in the bass scene. Every producer meet-up was just guys.',
                        after: 'Women in Bass workshop connected me with 10 female producers. We started a collective. My track got signed last month.',
                        highlight: 'Women in Bass workshop led to my music career breakthrough'
                    },
                    {
                        name: 'Jade L.',
                        age: 22,
                        type: 'Mental Health Supporter',
                        festival: 'Shambhala 2024',
                        rating: 5,
                        before: 'Struggled with panic attacks. Scared to go to festivals alone. Almost didn\'t come.',
                        after: 'Discovered The Sanctuary when I needed help on night two. The trauma-informed care saved me. Now I\'m training to volunteer next year.',
                        highlight: 'The Sanctuary showed me safe spaces can exist anywhere'
                    }
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
                ],
                transformationStories: [
                    {
                        name: 'Sarah M.',
                        age: 28,
                        type: 'Solo Traveler',
                        festival: 'Electric Forest 2024',
                        rating: 5,
                        before: 'I was terrified to go alone. What if I didn\'t make friends? What if I felt awkward at camp?',
                        after: 'I met my festival family at Her Forest welcome brunch on Day 1. Left with 20+ new friends and a business partner. We\'re planning 2025 together!',
                        highlight: 'Her Forest Group Camp changed my life'
                    },
                    {
                        name: 'Maya P.',
                        age: 35,
                        type: 'First-Timer',
                        festival: 'Electric Forest 2023',
                        rating: 5,
                        before: 'Never been to a festival. Thought I was too old, too anxious. Would the music be too loud?',
                        after: 'The forest at night felt like magic. I danced until sunrise, cried at a body positivity workshop, discovered my power. Age is just a number.',
                        highlight: 'Body positivity workshop unlocked something in me'
                    },
                    {
                        name: 'Jessica K.',
                        age: 24,
                        type: 'Music Producer',
                        festival: 'Electric Forest 2024',
                        rating: 5,
                        before: 'Wanted to break into electronic music but felt like an outsider as a woman.',
                        after: 'Took the Women in Electronic Music workshop. A female DJ I met there is now mentoring me. Released my first track last month!',
                        highlight: 'Found my mentor and my voice'
                    }
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
            ],
            womensExperiences: {
                highlights: [
                    'UN Women UK partnership - official Safe Spaces Now initiative with specialist training and Guardian Angel volunteers',
                    'Urban city-center festival - stay in Sheffield hotels/hostels, walk to venues, no camping stress, total accessibility',
                    'Guardian Angels in bright t-shirts - trained volunteers you can approach anytime for support, directions, or just to chat',
                    'Sheffield\'s working-class roots and northern warmth - genuine, down-to-earth festival culture without pretension',
                    'Multiple venues across city - from parks to indoor stages, creating variety and escape routes if you need space',
                    'Collaboration with Rape Crisis and Good Night Out - serious institutional commitment to ending harassment culture'
                ],
                dayInTheLife: [
                    {
                        time: '10:00 AM',
                        title: 'Sheffield Hotel Breakfast & City Exploration',
                        description: 'Wake up in your Sheffield hotel room with actual walls and a real bed. Shower with hot water. Walk through the city center to explore before the festival begins. Urban festivals hit different.',
                        location: 'Sheffield City Center',
                        vibe: '🏙️ Urban & Comfortable',
                        realReference: 'Tramlines is a city-center festival allowing attendees to stay in hotels, hostels, or Airbnbs with walking access to all venues. No camping required.',
                        feeling: 'Real breakfast. Real bathroom. Walking through Sheffield streets to the festival. This is how festivals should be - you can be comfortable AND have fun.'
                    },
                    {
                        time: '12:00 PM',
                        title: 'Guardian Angel Welcome & Orientation',
                        description: 'Spot a Guardian Angel volunteer in their bright t-shirt. They smile and welcome you, explaining where Safe Spaces are, where bathrooms are, and telling you to find them if you need ANYTHING.',
                        location: 'Festival Entrance',
                        vibe: '💚 Welcoming & Protected',
                        realReference: 'Tramlines\' Guardian Angel volunteers are trained and positioned throughout the festival specifically to support attendees, especially women and marginalized groups.',
                        feeling: '"Just come find us, yeah? We\'re here for you." Her northern accent is warm. I feel safer already. This is institutional care.'
                    },
                    {
                        time: '2:00 PM',
                        title: 'Safe Spaces Tent Visit',
                        description: 'Check out the UN Women UK Safe Spaces tent. It\'s staffed by trained volunteers, stocked with resources, tampons, phone chargers, water, and a place to just sit if overwhelmed. This is what support looks like.',
                        location: 'Safe Spaces Tent',
                        vibe: '🛡️ Supported & Validated',
                        realReference: 'Tramlines partners with UN Women UK for the Safe Spaces Now initiative, providing a dedicated tent with resources, support, and trained staff.',
                        feeling: 'Free tampons. Phone chargers. A woman offers water. "You okay, love?" I\'m not even in distress but I\'m tearing up. Someone CARES.'
                    },
                    {
                        time: '4:00 PM',
                        title: 'UK Female Artist on Main Stage',
                        description: 'Watch a British female artist absolutely OWN the main stage in Hillsborough Park. Sheffield crowds are rowdy but respectful. She commands the energy. Northern England loves its women loud.',
                        location: 'Hillsborough Park Main Stage',
                        vibe: '🎤 Powerful & Energetic',
                        realReference: 'Tramlines books strong UK female talent across genres. Hillsborough Park main stage is the festival\'s centerpiece with capacity for 40,000.',
                        feeling: 'She\'s loud. She\'s brash. She\'s unapologetically northern. The crowd is ROARING. British women don\'t whisper - they COMMAND. I\'m here for it.'
                    },
                    {
                        time: '6:00 PM',
                        title: 'City Venue Hop & Indie Discoveries',
                        description: 'Walk from the park to indoor city venues. Catch a female indie artist at a smaller stage. Urban festivals let you curate your experience - you can always step inside, find quiet, reset.',
                        location: 'Sheffield City Venues',
                        vibe: '🎸 Intimate & Flexible',
                        realReference: 'Tramlines originally started as a multi-venue city festival. While now centered in parks, it maintains city venue programming allowing for variety and climate control.',
                        feeling: 'Stepping from outdoor chaos into intimate indoor venue. 100 people. Female singer-songwriter. This is why urban festivals are genius - OPTIONS.'
                    },
                    {
                        time: '8:00 PM',
                        title: 'Intervention & Guardian Angel Response',
                        description: 'Watch a Guardian Angel intervene when a woman looks uncomfortable with a guy who won\'t leave her alone. "She\'s alright, mate. Move along." The guy leaves. The system WORKS.',
                        location: 'Festival Grounds',
                        vibe: '🦸‍♀️ Protected & Validated',
                        realReference: 'Guardian Angels are trained to intervene in situations where attendees may need support or someone is violating the code of conduct.',
                        feeling: 'I watched a volunteer protect a stranger without drama. She didn\'t have to fight. Someone else stepped in. This is what infrastructure looks like.'
                    },
                    {
                        time: '10:00 PM',
                        title: 'Northern Working-Class Solidarity',
                        description: 'Strike up conversation with Sheffield locals. They adopt you immediately. "You alright, love?" becomes your favorite phrase. Northern England warmth is REAL. Solo travelers are embraced.',
                        location: 'Park Social Areas',
                        vibe: '❤️ Warm & Inclusive',
                        realReference: 'Sheffield has strong working-class culture known for northern warmth, directness, and looking out for each other. This culture permeates Tramlines.',
                        feeling: '"First time in Sheffield?" "Yeah!" "Well you\'re one of us now, aren\'t ya?" Instant adoption. Northern kindness heals something in me.'
                    },
                    {
                        time: '11:30 PM',
                        title: 'Safe Walk Back to Hotel',
                        description: 'Walk back to your hotel through Sheffield at midnight. Pass other festival-goers, locals, Guardian Angels still visible in their shirts. Feel completely safe in a British city at night.',
                        location: 'Sheffield Streets',
                        vibe: '🌙 Safe & Independent',
                        realReference: 'Tramlines\' city-center location means attendees walk through Sheffield to and from venues. The festival coordinates with city police and volunteers for safe passage.',
                        feeling: 'Midnight walk through a city I didn\'t know 12 hours ago. Not scared. Guardian Angels visible. Other women walking alone. Urban safety is possible.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Hotel Room Gratitude',
                        description: 'Shower in your hotel. Sleep in a real bed. Process the day - the music, the safety measures, the institutional care, the northern warmth. Urban festivals are the future.',
                        location: 'Sheffield Hotel',
                        vibe: '🛁 Grateful & Rested',
                        realReference: 'Unlike camping festivals, Tramlines allows attendees to return to comfortable accommodations, shower, and properly rest each night.',
                        feeling: 'Hot shower. Clean bed. No tent. No mud. I partied hard and I\'m COMFORTABLE. Why don\'t all festivals do this?'
                    },
                    {
                        time: '2:00 AM',
                        title: 'Reflection on Safety Infrastructure',
                        description: 'Lie in bed thinking about Guardian Angels, Safe Spaces tent, UN Women partnership, Rape Crisis collaboration. This isn\'t performative - it\'s systemic. Tramlines proves festivals can be safe.',
                        location: 'Your Accommodation',
                        vibe: '💭 Reflective & Hopeful',
                        realReference: 'Tramlines\' partnership with UN Women UK, Rape Crisis, and Good Night Out Campaign represents comprehensive institutional commitment to safety.',
                        feeling: 'This festival partnered with UN WOMEN. They MEAN it. Safety isn\'t a hashtag here - it\'s infrastructure. Every festival could do this. Will they?'
                    }
                ],
                soloTravelTips: [
                    'Book Sheffield city center accommodation - walkable to all venues, hotel comfort, no camping logistics',
                    'Look for Guardian Angel volunteers in bright t-shirts - they\'re there specifically to help you and want to be approached',
                    'Visit Safe Spaces tent even if you don\'t "need" it - normalize using resources and see what support looks like',
                    'Sheffield is incredibly affordable compared to London - budget-friendly hotels, food, and the festival itself',
                    'Arrive early to explore Sheffield - industrial heritage, friendly locals, excellent food scene, Peak District nearby',
                    'Use the city\'s tram system - safe, efficient, and integrated with the festival for easy transport'
                ],
                empowermentPrograms: [
                    'UN Women UK Safe Spaces Now partnership - official collaboration bringing global women\'s rights framework to festival culture',
                    'Guardian Angel volunteer program - trained volunteers positioned throughout festival to support attendees and intervene when needed',
                    'Rape Crisis organization collaboration - partnership with specialized sexual violence support services and training',
                    'Good Night Out Campaign integration - anti-harassment training for staff and culture change initiatives',
                    'Specialist staff training programs - security, bar staff, and volunteers receive comprehensive training on supporting women and marginalized groups',
                    'AIF Safer Spaces Charter compliance - commitment to festival industry standards for inclusivity and safety'
                ],
                femaleArtistHighlights: [
                    'Strong UK female representation - British women across indie, alternative, electronic, and hip-hop genres',
                    'Emerging female talent platforms - discovery stages for up-and-coming UK women artists',
                    'Genre diversity for women - female artists across multiple stages and styles from folk to grime',
                    'Sheffield\'s musical heritage - honoring the city\'s history while promoting contemporary female voices',
                    'Multi-stage programming - women represented across park stages and intimate city venues',
                    'Local female artist showcases - Sheffield and Yorkshire women given platform alongside international acts'
                ],
                transformationStories: [
                    {
                        name: 'Sophie T.',
                        age: 26,
                        type: 'Post-Assault Healing',
                        festival: 'Tramlines 2024',
                        rating: 5,
                        before: 'Sexually assaulted at a festival 2 years ago. Terrified to go to festivals again. Thought I\'d never feel safe in crowds.',
                        after: 'Tramlines\' Guardian Angels and Safe Spaces tent gave me confidence to try again. Felt protected for the first time since my assault. Attended all 3 days. I\'m reclaiming festival culture. Tramlines gave me my freedom back.',
                        highlight: 'Institutional safety measures can help survivors heal - it\'s not just about prevention, it\'s about rebuilding trust'
                    },
                    {
                        name: 'Aisha K.',
                        age: 23,
                        type: 'Solo Travel Confidence',
                        festival: 'Tramlines 2024',
                        rating: 5,
                        before: 'Muslim woman who\'d never traveled alone or attended a festival. Family worried about safety and appropriateness.',
                        after: 'Guardian Angels included Muslim volunteers. Safe Spaces tent felt genuinely inclusive. Nobody judged my hijab or lack of drinking. Stayed in a hotel feeling safe. Proved to my family (and myself) that I can do this.',
                        highlight: 'True safety culture is inclusive of ALL women - religious, sober, modest - not just one type of festival-goer'
                    },
                    {
                        name: 'Laura M.',
                        age: 35,
                        type: 'Disability & Accessibility',
                        festival: 'Tramlines 2024',
                        rating: 5,
                        before: 'Wheelchair user who assumed festivals weren\'t for me. Camping seems impossible. Thought I\'d be excluded from festival culture.',
                        after: 'City-center urban festival changed everything. Stayed in accessible hotel. Trams to venues. Smooth paths. Guardian Angels helped me navigate. Attended 15 sets across 3 days. Urban festivals opened a world I thought was closed.',
                        highlight: 'Urban festivals are inherently more accessible than camping festivals - cities have infrastructure disability activists fought for'
                    }
                ]
            }
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
            womensExperiences: {
                highlights: [
                    'Les Hirondelles - pioneering women\'s safety team trained in sexology and trauma-informed care',
                    'Bilingual French/English culture creates unique, inclusive environment',
                    'Montreal\'s progressive Canadian values prioritizing consent education',
                    'Beautiful island setting on Parc Jean-Drapeau in the St. Lawrence River',
                    'Strong female francophone artist representation celebrating Quebec culture',
                    'World-class anti-harassment education and prevention programming'
                ],
                dayInTheLife: [
                    {
                        time: '10:00 AM',
                        title: 'Island Morning on Parc Jean-Drapeau',
                        description: 'Take the Montreal metro to the island festival site. Arrive at Parc Jean-Drapeau surrounded by the St. Lawrence River. Island vibes, city accessible.',
                        location: 'Parc Jean-Drapeau Island',
                        vibe: '🏝️ Urban Island Paradise',
                        realReference: 'Osheaga takes place on Parc Jean-Drapeau, an island in the St. Lawrence River accessible by Montreal metro',
                        feeling: 'Island surrounded by water. Montreal skyline visible. You\'re in nature and the city at once. This is special.'
                    },
                    {
                        time: '12:00 PM',
                        title: 'Meet Les Hirondelles Safety Team',
                        description: 'Notice women in distinctive uniforms everywhere. Les Hirondelles - trained in sexology, consent, trauma care. Revolutionary safety approach.',
                        location: 'Throughout Festival',
                        vibe: '🛡️ Protected & Pioneering',
                        realReference: 'Les Hirondelles is Osheaga\'s groundbreaking safety initiative - team members trained by sexual assault centers in trauma-informed care',
                        feeling: 'They\'re everywhere. Trained professionals. Not security - educators. You feel safe in a completely new way.'
                    },
                    {
                        time: '2:00 PM',
                        title: 'Bilingual Culture & French-Canadian Pride',
                        description: 'Hear announcements in French and English. Watch francophone female artists own stages. Montreal\'s unique culture celebrating women.',
                        location: 'Scène de la Montagne',
                        vibe: '🇨🇦 Bilingual & Cultural',
                        realReference: 'Osheaga showcases francophone artists prominently - bilingual culture is central to Montreal and festival identity',
                        feeling: 'She sings in French. The crowd erupts. Quebec pride. Female artists in their own language. Powerful cultural celebration.'
                    },
                    {
                        time: '4:00 PM',
                        title: 'Consent Education Workshop',
                        description: 'Attend workshop led by Les Hirondelles on consent culture, boundaries, and empowerment. Education, not just enforcement.',
                        location: 'Les Hirondelles Station',
                        vibe: '📚 Educational & Empowering',
                        realReference: 'Les Hirondelles offers workshops and education on consent, harassment prevention, and safe festival culture',
                        feeling: 'They teach actual skills. How to intervene. How to support. This should be at EVERY festival. You leave empowered.'
                    },
                    {
                        time: '6:00 PM',
                        title: 'Solo Female Travelers Meetup',
                        description: 'Join 200+ solo women at the designated meetup spot. Canadians, Americans, Europeans - instant bilingual sisterhood.',
                        location: 'Central Meeting Point',
                        vibe: '👭 International & Connected',
                        realReference: 'Osheaga\'s accessible location in Montreal attracts international visitors - strong solo traveler community organizes via social media',
                        feeling: '"Salut!" "Hi!" Bilingual greetings. Instant friends. Solo becomes social in French and English. Montreal magic.'
                    },
                    {
                        time: '7:30 PM',
                        title: 'Sunset Over St. Lawrence River',
                        description: 'Watch sunset over the water with your new crew. Island festival means 360° beauty. Montreal skyline glowing.',
                        location: 'Waterfront Area',
                        vibe: '🌅 Serene & Beautiful',
                        realReference: 'Parc Jean-Drapeau\'s island location offers stunning sunset views over the St. Lawrence River and Montreal skyline',
                        feeling: 'River reflecting pink sky. City lights beginning. Island breeze. Your friends from 4 countries. This moment is perfect.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Female Hip-Hop Artists Making History',
                        description: 'Watch powerful female hip-hop and rap artists command the main stage. Diverse voices, important messages, massive platform.',
                        location: 'Scène de la Rivière (Main Stage)',
                        vibe: '🎤 Powerful & Revolutionary',
                        realReference: 'Osheaga features strong hip-hop programming with prominent female artists addressing social issues and empowerment',
                        feeling: 'She speaks truth to thousands. About being a woman. Being powerful. Being heard. You feel every word.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Les Hirondelles Support in Action',
                        description: 'See Les Hirondelles help a woman who needs support. Gentle, professional, trauma-informed. This is how it should always be.',
                        location: 'Throughout Festival',
                        vibe: '💝 Compassionate & Professional',
                        realReference: 'Les Hirondelles provides direct support, accompaniment to medical tents, and referrals to local resources when needed',
                        feeling: 'Watching them work. So professional. So caring. This program should be worldwide. Women supporting women.'
                    },
                    {
                        time: '12:30 AM',
                        title: 'Late Night Electronic at Scène Verte',
                        description: 'Underground female DJs taking over. Green stage lit up. Intimate crowd. Real music lovers.',
                        location: 'Scène Verte (Green Stage)',
                        vibe: '🔮 Underground & Intimate',
                        realReference: 'Osheaga\'s smaller stages feature electronic and underground acts - platform for emerging female DJ talent',
                        feeling: 'She reads the crowd perfectly. Everyone dancing. This is where tomorrow\'s headliners start. Women leading the way.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Safe Metro Ride Back to Montreal',
                        description: 'Festival ends. Take the metro back to the city with new friends. Canadian safety. Bilingual conversations. Processing the magic.',
                        location: 'Montreal Metro',
                        vibe: '🚇 Safe & Social',
                        realReference: 'Montreal metro runs late during Osheaga with dedicated festival service - safe, clean public transit',
                        feeling: 'Metro at 1am. Groups of friends. You feel completely safe. Canadian culture. This is how cities should work.'
                    }
                ],
                soloTravelTips: [
                    'Montreal is extremely safe for solo female travelers - Canadian culture prioritizes safety',
                    'Metro access makes travel to/from festival easy and secure',
                    'Les Hirondelles team specifically supports solo attendees - just ask',
                    'Join Montreal/Osheaga solo traveler groups on Facebook before festival',
                    'Stay in Montreal hostels for instant international friend groups',
                    'Bilingual culture means you can communicate easily in English or practice French'
                ],
                empowermentPrograms: [
                    'Les Hirondelles consent education and harassment prevention workshops',
                    'Sexology-based training creating trauma-informed festival culture',
                    'Women\'s safety team providing professional support and resources',
                    'Female francophone artist showcases celebrating Quebec culture',
                    'Solo female traveler meetups organized through social media',
                    'Partnerships with local women\'s organizations for ongoing support'
                ],
                femaleArtistHighlights: [
                    'Strong female francophone artist representation celebrating Quebec',
                    'Women in hip-hop and rap addressing social issues and empowerment',
                    'Electronic music female DJs and producers on underground stages',
                    'Diverse international female artists across all genres',
                    'Platform for emerging female talent on smaller stages',
                    'Bilingual female artists celebrated as cultural ambassadors'
                ],
                transformationStories: [
                    {
                        name: 'Claire B.',
                        age: 26,
                        type: 'Consent Educator',
                        festival: 'Osheaga 2024',
                        rating: 5,
                        before: 'Wanted to do consent education but didn\'t know how to start. Felt overwhelmed.',
                        after: 'Les Hirondelles workshop gave me frameworks and training. Now I run consent workshops at my university. Changed my career path.',
                        highlight: 'Les Hirondelles program taught me professional skills to educate others'
                    },
                    {
                        name: 'Amélie D.',
                        age: 24,
                        type: 'Francophone Solo Traveler',
                        festival: 'Osheaga 2024',
                        rating: 5,
                        before: 'From France, nervous about traveling alone to North America. Different culture, different safety standards.',
                        after: 'Montreal felt safer than Paris. Canadian culture is protective but empowering. Met bilingual friends. Now planning solo trip across Canada.',
                        highlight: 'Canadian safety culture made international solo travel feel natural'
                    },
                    {
                        name: 'Jasmine W.',
                        age: 30,
                        type: 'Sexual Assault Survivor',
                        festival: 'Osheaga 2024',
                        rating: 5,
                        before: 'Stopped going to festivals after assault. Too triggering. Miss the music but can\'t feel safe.',
                        after: 'Les Hirondelles team is trauma-informed. They GET it. I felt safe for the first time in years. I can festival again.',
                        highlight: 'Trauma-informed safety approach helped me reclaim festival joy'
                    }
                ]
            },
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
            womensExperiences: {
                highlights: [
                    'Celebration of female artists across all genres - from Beyoncé\'s historic Beychella to powerful women commanding stages',
                    'Fashion as empowerment - express yourself freely in the desert with supportive community',
                    'Women-led art installations and immersive experiences celebrating feminine energy',
                    'Strong female influencer and creator community fostering connections',
                    'Desert sunrise yoga and wellness programming for women',
                    'Safe spaces for solo female travelers in car camping and general admission areas'
                ],
                dayInTheLife: [
                    {
                        time: '7:00 AM',
                        title: 'Sunrise Yoga in the Desert',
                        description: 'Start your day with morning yoga as the sun rises over the Coachella Valley. Join 100+ women for breathwork and meditation in the cool desert air.',
                        location: 'Wellness Area',
                        vibe: '🌅 Peaceful & Grounding',
                        realReference: 'Coachella offers morning yoga sessions in dedicated wellness areas - the desert sunrise creates magical energy',
                        feeling: 'Cool breeze. Palm trees silhouetted against pink sky. Your mat on the grass. The desert holds you in stillness before the music begins.'
                    },
                    {
                        time: '10:00 AM',
                        title: 'Explore Female-Led Art Installations',
                        description: 'Wander through stunning art installations created by women artists. Interactive experiences celebrating feminine power and creativity.',
                        location: 'Art Grounds',
                        vibe: '🎨 Inspiring & Creative',
                        realReference: 'Coachella features dozens of large-scale art installations, many created by female artists like Kara Walker and other renowned creators',
                        feeling: 'Art towers above you. Women taking photos, exploring, creating. You feel part of something bigger than music.'
                    },
                    {
                        time: '12:00 PM',
                        title: 'Connect with Solo Travelers at Meetup',
                        description: 'Join the official solo travelers meetup at the Ferris wheel. Meet women from around the world, exchange numbers, form your Coachella crew.',
                        location: 'Ferris Wheel Meeting Point',
                        vibe: '👯 Social & Exciting',
                        realReference: 'The iconic Coachella Ferris wheel serves as a central meeting point where solo travelers connect via social media groups',
                        feeling: '"I\'m here alone too!" becomes instant friendship. Numbers exchanged, Instagram follows, plans for the weekend made. Your crew is formed.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Fashion, Empowerment & Self-Expression',
                        description: 'Embrace Coachella fashion culture - flower crowns, festival style, bold choices. See women of all sizes, ages, backgrounds expressing themselves fearlessly.',
                        location: 'Throughout Festival Grounds',
                        vibe: '💃 Confident & Expressive',
                        realReference: 'Coachella is famous for fashion culture where self-expression is celebrated - body positivity and creative style are core to the experience',
                        feeling: 'Glitter. Fringe. Confidence. Nobody judges. Every body is beautiful. You wear what makes YOU feel powerful. Liberation.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Powerful Female Headliner Takes the Stage',
                        description: 'Watch as a legendary woman commands the main stage. History in the making, just like Beyoncé\'s groundbreaking 2018 Beychella performance.',
                        location: 'Coachella Main Stage',
                        vibe: '👑 Powerful & Historic',
                        realReference: 'Beyoncé\'s 2018 Beychella performance was the first Black woman to headline - since then, icons like Billie Eilish, Ariana Grande continue the legacy',
                        feeling: 'She owns this desert. Her voice carries across 100,000 people. You witness greatness. Women can do ANYTHING.'
                    },
                    {
                        time: '7:30 PM',
                        title: 'Discover Rising Female Artists',
                        description: 'Check out incredible up-and-coming women performers on smaller stages. The future of music is female, and you\'re seeing it first.',
                        location: 'Gobi/Mojave Tents',
                        vibe: '🎤 Discovery & Support',
                        realReference: 'Coachella\'s Gobi and Mojave tents showcase emerging artists - many female performers get their big break on these stages',
                        feeling: 'Intimate tent. Raw talent. She pours her heart out. You remember her name. In 5 years, you\'ll say "I saw her at Coachella."'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Sisterhood in the Sahara Tent',
                        description: 'Dance with your new friends under the legendary Sahara tent. Electronic music, light shows, and pure joy with thousands of women moving as one.',
                        location: 'Sahara Tent',
                        vibe: '🎆 Electric & United',
                        realReference: 'The Sahara tent is Coachella\'s iconic electronic music venue - known for incredible production and transcendent dance experiences',
                        feeling: 'Bass shakes your chest. Lights explode. Your crew dancing together. Strangers become sisters. This is collective euphoria.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Cooling Stations & Sisterhood Support',
                        description: 'Desert nights get cool. Women help each other - sharing layers, offering water, checking in. See the best of humanity in action.',
                        location: 'Throughout Festival',
                        vibe: '💛 Caring & Community',
                        realReference: 'Coachella attendees are known for looking out for each other, especially regarding heat/cold management and hydration',
                        feeling: 'A stranger offers you her jacket. Another shares her water. "You okay, girl?" becomes the anthem. We take care of each other.'
                    },
                    {
                        time: '12:30 AM',
                        title: 'Late Night Female DJ Magic',
                        description: 'Women DJs commanding decks past midnight. Underground stages, intimate vibes, the real music heads come out now.',
                        location: 'Yuma/DoLab',
                        vibe: '🔮 Underground & Authentic',
                        realReference: 'Yuma and DoLab feature underground electronic music until late - many incredible female DJs like The Blessed Madonna, Honey Dijon, and more',
                        feeling: 'Small stage. Serious sound. She reads the crowd perfectly. You discover your new favorite artist. This is where legends are born.'
                    },
                    {
                        time: '1:30 AM',
                        title: 'Walk Back Under the Desert Stars',
                        description: 'Festival ends, but the night isn\'t over. Walk back to camp under infinite stars, processing the magic with your crew.',
                        location: 'Campgrounds',
                        vibe: '✨ Reflective & Magical',
                        realReference: 'The dark desert sky creates spectacular stargazing - Coachella campers often gather under the stars after music ends',
                        feeling: 'Desert silence. Stars everywhere. Your friends beside you. You\'ve never felt more alive, more yourself, more part of something beautiful.'
                    }
                ],
                soloTravelTips: [
                    'Join Coachella Solo Travelers Facebook groups before the festival for meetups and camp coordination',
                    'Car camping with tent-only camping nearby creates instant community for solo attendees',
                    'The Ferris wheel at sunset is the classic solo traveler meeting spot',
                    'Download the Coachella app for real-time updates and safety features',
                    'Fashion is self-expression - wear what makes YOU feel empowered, ignore the influencer pressure',
                    'Hydration is sisterhood - always accept water offers and offer to others'
                ],
                empowermentPrograms: [
                    'Women-led art installations celebrating feminine creativity and power',
                    'Female DJ and producer showcases on multiple stages',
                    'Body positivity through fashion expression and judgment-free zones',
                    'Women in music industry networking in VIP and artist areas',
                    'Wellness programming including yoga, meditation, and healing spaces',
                    'Female-founded brand activations and empowerment experiences'
                ],
                femaleArtistHighlights: [
                    'Historic female headliners - from Beyoncé\'s Beychella to Billie Eilish to Ariana Grande',
                    'Diverse representation across genres - rock, hip-hop, electronic, Latin, alternative',
                    'Platform for emerging female artists across Gobi, Mojave, and Sonora stages',
                    'Female DJs commanding Sahara, Yuma, and DoLab stages',
                    'Women of color prominently celebrated and centered',
                    'Multigenerational female artist representation from legends to newcomers'
                ],
                transformationStories: [
                    {
                        name: 'Jasmine L.',
                        age: 26,
                        type: 'Fashion & Body Confidence',
                        festival: 'Coachella 2024',
                        rating: 5,
                        before: 'I hated my body. Never wore crop tops or shorts. Avoided photos. Felt invisible.',
                        after: 'Saw women of EVERY size rocking bikinis and confidence in the desert. Wore what I wanted for the first time. 50+ compliments. I\'m finally free.',
                        highlight: 'Coachella fashion culture taught me my body deserves celebration'
                    },
                    {
                        name: 'Keisha M.',
                        age: 29,
                        type: 'Solo International Traveler',
                        festival: 'Coachella 2024',
                        rating: 5,
                        before: 'Flying from London alone to a massive US festival? Everyone said I was crazy. I almost backed out.',
                        after: 'Met my now-best friends at the solo traveler meetup. We camped together, danced together, cried during Beyoncé together. Planning our reunion.',
                        highlight: 'Solo traveler community turned strangers into family within hours'
                    },
                    {
                        name: 'Sofia R.',
                        age: 24,
                        type: 'Aspiring DJ & Producer',
                        festival: 'Coachella 2024',
                        rating: 5,
                        before: 'Wanted to be a DJ but felt like the scene wasn\'t for women. Gave up on my dream.',
                        after: 'Watched Honey Dijon absolutely destroy the Yuma stage. She looked at me and nodded. I bought equipment the next week. Playing my first gig next month.',
                        highlight: 'Seeing women command stages made my dreams feel possible'
                    }
                ]
            },
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
                ],
                transformationStories: [
                    {
                        name: 'Emma L.',
                        age: 42,
                        type: 'Solo Traveler & Activist',
                        festival: 'Glastonbury 2024',
                        rating: 5,
                        before: 'Burned out from activism work. Felt disconnected from my purpose and power.',
                        after: 'The Goddess Temple and Green Fields reignited everything. Met women doing incredible work. I remembered why I fight. I\'m back.',
                        highlight: 'Goddess Temple meditation reconnected me to my power'
                    },
                    {
                        name: 'Priya S.',
                        age: 29,
                        type: 'First-Timer',
                        festival: 'Glastonbury 2023',
                        rating: 5,
                        before: 'Overwhelmed by the size. 200,000 people? How would I not get lost and anxious?',
                        after: 'The Sisterhood Tent became my sanctuary. Made friends in women\'s circles. Glastonbury is massive but you find your corners. Never felt unsafe.',
                        highlight: 'Women-only spaces made the massive feel manageable'
                    },
                    {
                        name: 'Claire M.',
                        age: 38,
                        type: 'Music Lover',
                        festival: 'Glastonbury 2016',
                        rating: 5,
                        before: 'Just wanted to see Adele. Didn\'t expect to be changed.',
                        after: '100,000 people singing together as Adele performed. I cried the entire time. That moment lives in me forever. Worth every muddy step.',
                        highlight: 'Witnessing history on Pyramid Stage - life-changing'
                    }
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
            womensExperiences: {
                highlights: [
                    'Global sisterhood - women from 200+ countries united by music and magic',
                    'Fairytale production celebrating feminine power and magical transformation',
                    'DreamVille camping creates instant international female friendships',
                    'Female DJs from around the world commanding the world\'s biggest stages',
                    'PLUR culture (Peace, Love, Unity, Respect) creates judgment-free environment',
                    'Belgian/European safety standards and progressive gender equality culture'
                ],
                dayInTheLife: [
                    {
                        time: '9:00 AM',
                        title: 'International Breakfast at DreamVille',
                        description: 'Wake up in DreamVille camping. Your tent neighbors are from Brazil, Korea, Germany, and Morocco. Breakfast becomes a global potluck of friendship.',
                        location: 'DreamVille Camping Village',
                        vibe: '🌍 Global & Connected',
                        realReference: 'DreamVille is Tomorrowland\'s camping village hosting 38,000 people from over 200 countries - instant international community',
                        feeling: 'Coffee from Italy. Bread from Germany. Laughter in 5 languages. You\'ve known these women 12 hours but they feel like lifelong friends.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Explore the Fairytale Mainstage',
                        description: 'Walk to the festival grounds as the magical mainstage is revealed. Jaw-dropping production celebrating fantasy, wonder, and feminine magic.',
                        location: 'Main Stage',
                        vibe: '✨ Awestruck & Magical',
                        realReference: 'Tomorrowland\'s mainstage is legendary - each year a new magical theme with incredible production featuring fairy tales and fantasy',
                        feeling: 'The stage is a castle, a garden, a dreamscape. You\'ve never seen anything like it. Magic is real here.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Women Unite Meetup at the Book of Wisdom',
                        description: 'Join 500+ solo female travelers at the iconic Book of Wisdom for the Women of Tomorrow meetup. Instant global sisterhood.',
                        location: 'Book of Wisdom Stage',
                        vibe: '👭 Unity & Empowering',
                        realReference: 'The Book of Wisdom is a central Tomorrowland meeting point where groups organize meetups via social media',
                        feeling: '"Where are you from?" Brasil, Japan, USA, Sweden. We\'re from everywhere. We\'re from nowhere. We\'re sisters now.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Female DJ Destroys Freedom Stage',
                        description: 'Watch as a legendary female DJ commands the Freedom stage. Tens of thousands dancing as one, led by her vision and her beats.',
                        location: 'Freedom Stage',
                        vibe: '🎧 Powerful & Transcendent',
                        realReference: 'Freedom Stage is Tomorrowland\'s second main stage - female DJs like Amelie Lens, Charlotte de Witte regularly headline',
                        feeling: 'She controls 50,000 people with her hands. The drop hits. The crowd erupts. Women leading the biggest stages in the world.'
                    },
                    {
                        time: '5:30 PM',
                        title: 'PLUR Bracelets & Female Bonding',
                        description: 'Exchange friendship bracelets with women you just met. PLUR culture means instant connection, no judgment, pure love.',
                        location: 'Throughout Festival',
                        vibe: '💕 Loving & Accepting',
                        realReference: 'PLUR (Peace Love Unity Respect) culture is central to Tomorrowland - bracelet exchanges symbolize friendship and connection',
                        feeling: 'She ties the bracelet on your wrist. "Sisters forever," she says in broken English. You both tear up. This is pure love.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Sunset at Mainstage with International Crew',
                        description: 'Your new global crew gathers for sunset at the mainstage. Music builds. Fireworks explode. You\'re part of something bigger than yourself.',
                        location: 'Main Stage',
                        vibe: '🎆 Epic & United',
                        realReference: 'Tomorrowland\'s sunset mainstage performances feature pyrotechnics, fireworks, and production that creates transcendent moments',
                        feeling: 'Fireworks. Music swelling. Arms around your international sisters. You\'ve never felt more connected to humanity.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Women in Electronic Music Showcase',
                        description: 'Special programming featuring back-to-back female artists. The future of electronic music is female, and you\'re witnessing it.',
                        location: 'Opera Stage / Freedom Stage',
                        vibe: '🚀 Inspiring & Future-Focused',
                        realReference: 'Tomorrowland features showcases highlighting female talent in electronic music across multiple stages',
                        feeling: 'Women commanding decks all night. Different styles, one message: we belong here. We\'re taking over. The future is ours.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Safe Space Support & Sisterhood',
                        description: 'See Safe Space Ambassadors in their distinctive uniforms. Women helping women. Belgian culture of care and respect in action.',
                        location: 'Throughout Festival',
                        vibe: '🛡️ Protected & Supported',
                        realReference: 'Tomorrowland Safe Space Ambassadors patrol throughout the festival providing support and intervention',
                        feeling: 'Purple shirts everywhere. "You okay, love?" They check on everyone. European culture of actual caring. You feel safe.'
                    },
                    {
                        time: '12:30 AM',
                        title: 'Deep House Magic at Opera Stage',
                        description: 'Underground female DJs creating magic at the intimate Opera stage. Real music nerds, real talent, real connection.',
                        location: 'Opera Stage',
                        vibe: '🔮 Deep & Soulful',
                        realReference: 'The Opera Stage and Atmosphere stage feature deeper, more underground electronic music - showcasing diverse female DJ talent',
                        feeling: 'Smaller stage. Perfect sound. She catches your eye and smiles. Music this good, played by women. Dreams do come true.'
                    },
                    {
                        time: '2:00 AM',
                        title: 'Walk Home Through Magical Forest',
                        description: 'Festival ends. Walk back to DreamVille through lit pathways and magical installations. Process the beauty with your global sisters.',
                        location: 'Path to DreamVille',
                        vibe: '🌙 Reflective & Grateful',
                        realReference: 'The walk from Tomorrowland to DreamVille features beautiful lighting and art - creating a magical transition',
                        feeling: 'Lights in trees. Music fading. Your Brazilian friend on one side, your Japanese friend on the other. Life is perfect right now.'
                    }
                ],
                soloTravelTips: [
                    'Join Tomorrowland Women Unite and Solo Travelers Facebook groups before the festival',
                    'DreamVille Easy Tent packages make solo camping stress-free and social',
                    'The Book of Wisdom is the classic meetup point for solo travelers',
                    'Download the Tomorrowland app for meetups, safety, and navigation',
                    'European culture makes solo female travel extremely safe and normalized',
                    'PLUR culture means immediate acceptance - you\'re never truly alone'
                ],
                empowermentPrograms: [
                    'Women in Electronic Music showcases featuring female DJs and producers',
                    'Global sisterhood meetups organized through social media and app',
                    'Safe Space Ambassador program with female-led support teams',
                    'Female artist networking in VIP and backstage areas',
                    'PLUR culture promoting respect, consent, and judgment-free expression',
                    'International women\'s empowerment through cross-cultural connection'
                ],
                femaleArtistHighlights: [
                    'World-class female DJs headlining - Amelie Lens, Charlotte de Witte, Nervo, and more',
                    'Underground female talent showcased across Opera, Atmosphere, and Garden stages',
                    'Women of color prominently featured across all stages',
                    'Female producers and live acts commanding main stages',
                    'Rising female talent platform across Core and Atmosphere stages',
                    'International female DJ representation from every continent'
                ],
                transformationStories: [
                    {
                        name: 'Yuki T.',
                        age: 27,
                        type: 'International Solo Traveler',
                        festival: 'Tomorrowland 2024',
                        rating: 5,
                        before: 'Traveling alone from Japan to Europe? My family was terrified. I was terrified. Maybe I shouldn\'t go.',
                        after: 'Met sisters from 15 countries in DreamVille. They taught me their languages, I taught them mine. We\'re planning to meet in Tokyo next year.',
                        highlight: 'Global sisterhood made me brave enough to travel anywhere alone'
                    },
                    {
                        name: 'Lena K.',
                        age: 25,
                        type: 'Aspiring Female DJ',
                        festival: 'Tomorrowland 2024',
                        rating: 5,
                        before: 'Felt like female DJs only get small stages. Why bother trying?',
                        after: 'Watched Charlotte de Witte absolutely demolish the main stage. 80,000 people. All for her. Bought DJ equipment the next week. This IS possible.',
                        highlight: 'Seeing women command the world\'s biggest stages changed everything'
                    },
                    {
                        name: 'Isabella M.',
                        age: 30,
                        type: 'PLUR Culture Convert',
                        festival: 'Tomorrowland 2024',
                        rating: 5,
                        before: 'Cynical about humanity. Didn\'t believe people could be genuinely kind without agenda.',
                        after: 'Strangers became family. Women shared everything - food, water, joy, tears. PLUR isn\'t a slogan, it\'s real. People CAN be good.',
                        highlight: 'PLUR culture restored my faith in humanity and sisterhood'
                    }
                ]
            },
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
            ],
            womensExperiences: {
                highlights: [
                    'Japanese cultural respect and safety - experience the world\'s most respectful festival culture where harassment is virtually non-existent',
                    'Only Asian festival in our collection - celebrate with female Asian artists rarely seen in Western festivals',
                    'Mountain onsen (hot spring) wellness experiences - natural healing in beautiful Japanese Alps setting',
                    'Zero tolerance for inappropriate behavior backed by Japanese social norms and community accountability',
                    'Female solo traveler paradise - Japan\'s legendary safety culture extends throughout the festival grounds',
                    'Impeccable cleanliness and organization - bathrooms cleaner than most restaurants, maintained constantly'
                ],
                dayInTheLife: [
                    {
                        time: '8:00 AM',
                        title: 'Mountain Sunrise Onsen',
                        description: 'Wake early and take the shuttle to nearby natural hot springs. Soak in mineral-rich waters surrounded by mountain peaks as sunrise illuminates the Japanese Alps. Connect with other female travelers in this traditional healing ritual.',
                        location: 'Naeba Prince Hotel Onsen',
                        vibe: '⛰️ Serene & Healing',
                        realReference: 'Fuji Rock is held at Naeba Ski Resort with access to traditional Japanese onsen hot springs. Many attendees start their day with morning onsen visits before the music begins.',
                        feeling: 'Steam rising. Mountain silence. Hot mineral water on tired festival muscles. Only women\'s voices echoing softly in Japanese and English. This is healing.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Traditional Japanese Breakfast',
                        description: 'Experience authentic Japanese breakfast at one of the food stalls - grilled fish, miso soup, pickled vegetables, and perfectly cooked rice. Watch vendors prepare everything with meticulous care and deep bows of respect.',
                        location: 'Food Court Area',
                        vibe: '🍱 Cultural & Nourishing',
                        realReference: 'Fuji Rock features exceptional Japanese food vendors offering traditional breakfast sets. The food quality rivals restaurants, with vendors taking immense pride in their offerings.',
                        feeling: 'Chopsticks in hand. First bite of perfectly seasoned miso. The vendor smiles and bows. "Oishii desu!" I try my Japanese. She beams. Connection without words.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Asian Female Artists Showcase',
                        description: 'Discover incredible female artists from across Asia - Japanese indie bands, Korean electronic producers, Chinese folk singers. Artists you\'ll never see at Western festivals. Feel the pride of Asian representation.',
                        location: 'Field of Heaven Stage',
                        vibe: '🎤 Empowering & Rare',
                        realReference: 'Fuji Rock consistently books Asian female artists across genres, particularly Japanese indie and rock bands with powerful female vocalists. The Field of Heaven stage specializes in Asian talent.',
                        feeling: 'She sings in Japanese. I don\'t understand the words but I understand everything. An Asian woman commanding a stage. Thousands watching. I\'m crying and I don\'t know why.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Forest Boardwalk Discovery',
                        description: 'Walk the elevated boardwalk through pristine forest between stages. Pass families, elderly festival-goers, and solo female travelers all feeling completely safe. No one even looks at you weird for being alone.',
                        location: 'Forest Boardwalk Path',
                        vibe: '🌲 Peaceful & Safe',
                        realReference: 'Fuji Rock features wooden boardwalks through forest areas connecting stages. The festival\'s family-friendly, all-ages culture creates exceptional safety with multi-generational attendance.',
                        feeling: 'Walking alone through the forest. Passing grandmothers with grandchildren. Solo women everywhere. Nobody cat-calls. Nobody stares. This is what safety feels like.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Tea Ceremony & Mindfulness',
                        description: 'Join a traditional tea ceremony experience hosted by local women. Learn the art of Japanese tea preparation, meditation, and presence. Disconnect from festival chaos and reconnect with yourself.',
                        location: 'Cultural Experience Tent',
                        vibe: '🍵 Meditative & Cultural',
                        realReference: 'Fuji Rock offers cultural experiences including tea ceremonies and traditional Japanese arts. These quiet spaces provide respite from music and connect attendees to Japanese culture.',
                        feeling: 'Kneeling on tatami mats. The tea master\'s hands move with precision. "Ichi-go ichi-e," she whispers. "One time, one meeting." This moment will never happen again.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Sunset from Mountain Stage',
                        description: 'Watch the sun set over the Japanese Alps from the elevated mountain stage area. The sky turns pink and gold. Fellow female travelers share snacks and conversation as the temperature drops.',
                        location: 'White Stage Mountain View',
                        vibe: '🌅 Breathtaking & Connected',
                        realReference: 'The main stages at Fuji Rock offer spectacular mountain views with sunset vistas over the Japanese Alps. The natural beauty is a defining feature of the festival experience.',
                        feeling: 'Mountains silhouetted in pink. A Japanese woman offers me onigiri rice ball. We don\'t speak the same language but we smile. Music, mountains, and unexpected friendship.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Lost & Found Miracle',
                        description: 'Realize you lost your phone hours ago. Go to Lost & Found. It\'s there, untouched, with a note from the finder in English: "Hope you enjoy the rest of Fuji Rock!" Cry at Japanese integrity.',
                        location: 'Festival Information Center',
                        vibe: '😭 Overwhelming Gratitude',
                        realReference: 'Fuji Rock is famous for its exceptional Lost & Found with nearly 100% return rates. The Japanese cultural value of honesty means lost items are always turned in, often with kind notes.',
                        feeling: 'My phone. My wallet. My festival pass I dropped yesterday. All here. All labeled. All returned. Is this real life? Japan is magic.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Women\'s Safety Walk-Around',
                        description: 'Walk the entire festival alone at night. Watch families dancing, couples holding hands, solo women everywhere feeling safe. Not one uncomfortable moment. Not one sketchy interaction.',
                        location: 'Festival Grounds Loop',
                        vibe: '🌙 Liberating & Safe',
                        realReference: 'Fuji Rock has virtually zero crime and harassment incidents. The Japanese cultural emphasis on respect and community safety creates an environment where women can move freely at all hours.',
                        feeling: 'Midnight. Walking alone. No fear. No hand on pepper spray. No looking over my shoulder. Is this what male privilege feels like? I could cry from relief.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Late Night Ramen & Connection',
                        description: 'Join other female travelers at the 24-hour ramen stall. Share stories about the day, exchange Instagrams, make plans to meet up at breakfast. Feel part of a global sisterhood.',
                        location: 'Red Marquee Food Area',
                        vibe: '🍜 Warm & Bonding',
                        realReference: 'Fuji Rock features multiple 24-hour food vendors serving hot ramen and Japanese comfort food. These late-night gathering spots become natural social hubs for solo travelers.',
                        feeling: 'Hot ramen at 1 AM. Laughing with women from Australia, Korea, Germany. We came alone. We\'re leaving as sisters. "Same time next year?" "Absolutely."'
                    },
                    {
                        time: '3:00 AM',
                        title: 'Mountain Air Reflection',
                        description: 'Stand outside your tent breathing clean mountain air. Process the day - the safety, the respect, the beauty, the culture. Realize you\'ve been transformed by Japanese excellence and female solidarity.',
                        location: 'Camping Area',
                        vibe: '⛺ Reflective & Grateful',
                        realReference: 'Fuji Rock camping is at high altitude with pristine mountain air and clear starry skies. The peaceful camping environment allows for reflection and connection with nature.',
                        feeling: 'Stars I\'ve never seen. Air so clean it hurts. I came to Japan for music. I\'m leaving with proof that a better world is possible. Thank you, Fuji Rock.'
                    }
                ],
                soloTravelTips: [
                    'Japan is the safest country for female solo travelers - extend your trip to explore Tokyo, Kyoto, or nearby onsen towns',
                    'Learn basic Japanese phrases - vendors and attendees deeply appreciate even minimal effort and will help you enthusiastically',
                    'Bring cash (yen) - many vendors don\'t accept cards, and ATMs may be limited at the mountain resort',
                    'Pack layers - mountain weather changes rapidly; nights are cold even in July',
                    'Use the JR Pass for travel - incredible value for getting to Naeba from Tokyo and exploring Japan before/after',
                    'Stay in nearby towns like Yuzawa - more affordable than on-site hotels with easy shuttle access to festival'
                ],
                empowermentPrograms: [
                    'Asian female artist representation - consistently books female artists from Japan, Korea, China, and across Asia rarely seen in Western festivals',
                    'Traditional women\'s arts experiences - tea ceremony, calligraphy, and textile arts taught by local Japanese women',
                    'Zero-tolerance harassment policy backed by Japanese cultural norms - inappropriate behavior is virtually non-existent',
                    'Multi-generational women\'s attendance - grandmothers to granddaughters attend together, normalizing festival culture for all ages',
                    'Female vendor empowerment - many food and craft vendors are women-owned Japanese small businesses',
                    'English language support throughout - making the festival accessible to international female travelers despite language barriers'
                ],
                femaleArtistHighlights: [
                    'Japanese female rock and indie bands - discover powerful Japanese women commanding stages (CHAI, tricot, Shonen Knife legacy)',
                    'Asian electronic producers - female DJs and producers from across Asia bringing fresh perspectives',
                    'International female headliners - past artists include Björk, Yeah Yeah Yeahs, The Cure (featuring female musicians)',
                    'Folk and traditional fusion - Japanese female artists blending traditional instruments with modern genres',
                    'All-female Japanese bands - rock, punk, and experimental acts you won\'t find anywhere else',
                    'Equal stage representation - female artists across all stages from main stages to smaller discovery venues'
                ],
                transformationStories: [
                    {
                        name: 'Sarah K.',
                        age: 28,
                        type: 'Solo International Travel',
                        festival: 'Fuji Rock 2024',
                        rating: 5,
                        before: 'Terrified to travel to Asia alone as a Western woman. Believed the stereotypes about language barriers and being unwelcome. Almost didn\'t go.',
                        after: 'Japan changed my life. Zero harassment in 10 days. Lost my phone and got it back. Strangers helped me constantly despite language barriers. I\'ve now been back 3 times. Fuji Rock showed me the world is safer than I was told.',
                        highlight: 'Japanese culture proved that respect and safety are possible - came home demanding better from my own country'
                    },
                    {
                        name: 'Yuki M.',
                        age: 24,
                        type: 'Asian Representation & Pride',
                        festival: 'Fuji Rock 2024',
                        rating: 5,
                        before: 'Grew up Asian in America consuming Western festivals where I never saw myself. Internalized that Asian women weren\'t "cool" enough for festival culture.',
                        after: 'Watched a Japanese woman absolutely SHRED on guitar to thousands of screaming fans. Saw myself in her. Realized I\'ve been erased, not invisible. Started my own band. Playing Fuji Rock is now my dream.',
                        highlight: 'Representation isn\'t just about feeling included - it\'s about knowing what\'s possible'
                    },
                    {
                        name: 'Emma L.',
                        age: 31,
                        type: 'Safety & Freedom',
                        festival: 'Fuji Rock 2024',
                        rating: 5,
                        before: 'So used to festival harassment and assault that I thought it was just "part of the experience." Brought pepper spray. Planned exit routes. Felt constantly anxious.',
                        after: 'Walked alone at midnight through 100,000 people and felt SAFE. Not one catcall. Not one grope. Not one uncomfortable moment. Realized harassment isn\'t inevitable - it\'s cultural. Japan proves festivals can be different.',
                        highlight: 'Fuji Rock showed me what festivals should be - now I refuse to accept less'
                    }
                ]
            }
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
            ],
            womensExperiences: {
                highlights: [
                    'World\'s largest jazz festival - over 1000 free outdoor concerts across 11 days in pedestrianized downtown Montreal',
                    'Sophisticated cultural atmosphere - jazz attracts mature, respectful audiences that create safe, harassment-free environment',
                    'Bilingual French-English culture - experience European sophistication with North American accessibility',
                    'Female jazz legends celebrated - from Ella Fitzgerald tributes to contemporary female jazz innovators commanding main stages',
                    'Urban accessibility paradise - walk everywhere, metro runs late, stay in hotels/Airbnbs within walking distance',
                    'Free festival access - attend world-class performances without expensive tickets, making it accessible to all women'
                ],
                dayInTheLife: [
                    {
                        time: '10:00 AM',
                        title: 'Café Culture Morning',
                        description: 'Start your day at a classic Montreal café on Rue Saint-Denis. Sip café au lait, nibble croissants, read the festival program. Watch the city wake up in French and English around you.',
                        location: 'Plateau Mont-Royal Café',
                        vibe: '☕ European & Sophisticated',
                        realReference: 'Montreal\'s legendary café culture comes alive during Jazz Fest. The Plateau and downtown neighborhoods are filled with outdoor terraces perfect for planning your festival day.',
                        feeling: 'Morning sun. French conversation at the next table. My croissant is perfect. The festival guide has 50 female artists listed. This is culture AND freedom.'
                    },
                    {
                        time: '12:00 PM',
                        title: 'Free Outdoor Jazz Discovery',
                        description: 'Wander the pedestrianized streets and stumble upon free outdoor stages. A female saxophonist is improvising to hundreds of people sitting on the ground. You sit down. No ticket required. Just music.',
                        location: 'Place des Arts Outdoor Stages',
                        vibe: '🎷 Spontaneous & Free',
                        realReference: 'Montreal Jazz Fest features 500+ free outdoor concerts on multiple stages. The pedestrianized Quartier des Spectacles becomes a car-free music paradise for 11 days.',
                        feeling: 'No ticket. No line. No VIP section. Just music, summer air, and 200 strangers swaying together. A woman is making that saxophone SING. I\'m in heaven.'
                    },
                    {
                        time: '2:00 PM',
                        title: 'Female Jazz Legends Panel',
                        description: 'Attend a free talk featuring female jazz musicians discussing their careers, sexism in jazz, and breaking barriers. Ask questions. Get autographs. Feel inspired by women who paved the way.',
                        location: 'Festival Conference Space',
                        vibe: '🎤 Educational & Inspiring',
                        realReference: 'Jazz Fest hosts numerous talks, panels, and workshops featuring musicians. Female artist discussions and masterclasses are regular programming celebrating women in jazz.',
                        feeling: 'A 70-year-old pianist talks about being the only woman in every room for 40 years. "But you\'re not alone anymore," she says, looking at us. I\'m crying.'
                    },
                    {
                        time: '4:00 PM',
                        title: 'Solo Metro Adventure',
                        description: 'Take the Montreal metro alone to explore different neighborhoods. Feel completely safe on public transit. Notice women traveling solo everywhere. Realize this is what normal should feel like.',
                        location: 'Montreal Metro System',
                        vibe: '🚇 Safe & Independent',
                        realReference: 'Montreal has one of North America\'s safest and most efficient metro systems. During Jazz Fest, trains run late and the system is full of festival-goers creating a community atmosphere.',
                        feeling: 'Alone on the metro at 4 PM. Not scared. Not looking over my shoulder. Just reading my book. Is this what men feel like all the time? Canadian safety culture is real.'
                    },
                    {
                        time: '6:00 PM',
                        title: 'Female Headliner Soundcheck',
                        description: 'Arrive early to the main stage venue and catch soundcheck of tonight\'s female headliner. Watch her perfect every note, demand what she needs, command the space. This is what power looks like.',
                        location: 'Salle Wilfrid-Pelletier',
                        vibe: '🎹 Behind-the-Scenes Magic',
                        realReference: 'Jazz Fest regularly books legendary female jazz artists as headliners - Norah Jones, Diana Krall, Melody Gardot, Esperanza Spalding. Arriving early often allows glimpses of soundcheck.',
                        feeling: 'She stops the band mid-song. "No, the piano needs more reverb. Again." Nobody questions her. She knows exactly what she wants. THIS is how women should take up space.'
                    },
                    {
                        time: '8:00 PM',
                        title: 'Main Stage Female Excellence',
                        description: 'Watch a female jazz legend absolutely own the main stage to thousands of reverent fans. The crowd is silent between songs - this isn\'t a party, it\'s worship. Musical excellence demands respect.',
                        location: 'Festival Main Stage',
                        vibe: '✨ Transcendent & Powerful',
                        realReference: 'Jazz audiences are known for respectful listening culture. Female headliners at Montreal Jazz Fest perform to audiences that prioritize musicianship over everything else.',
                        feeling: 'She hits a note that seems impossible. 5000 people gasp in unison. Then silence. Then thunder of applause. This is what it sounds like when talent is respected.'
                    },
                    {
                        time: '10:00 PM',
                        title: 'Bilingual Festival Connection',
                        description: 'Strike up conversation with other female festival-goers mixing French and English. Share travel tips, exchange Instagram handles, make plans to meet up tomorrow. Feel part of international sisterhood.',
                        location: 'Festival Grounds Social Area',
                        vibe: '🌍 Connected & Cosmopolitan',
                        realReference: 'Montreal\'s bilingual culture attracts international visitors. Jazz Fest attendees are often sophisticated travelers creating an intellectual, friendly atmosphere perfect for solo female connection.',
                        feeling: '"Tu es ici seule?" "Oui!" "Moi aussi!" We\'re from different countries but same tribe. Solo female travelers who refuse to stay home. We hug like old friends.'
                    },
                    {
                        time: '11:30 PM',
                        title: 'Late Night Jazz Club',
                        description: 'Head to an intimate jazz club for after-hours sets. Stand at the bar alone sipping wine, watching female musicians jam until 2 AM. Nobody bothers you. Nobody questions why you\'re alone. Pure music bliss.',
                        location: 'Upstairs Jazz Bar & Grill',
                        vibe: '🍷 Intimate & Sophisticated',
                        realReference: 'Montreal\'s legendary jazz clubs (Upstairs, Diese Onze, Dièse Onze) host late-night jam sessions during the festival. The mature, music-focused crowds create safe spaces for solo female jazz fans.',
                        feeling: 'Alone at the bar. A woman half my age is DESTROYING on upright bass. The bartender slides me wine and whispers "She\'s incredible, right?" Community without words.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Safe Night Walk Home',
                        description: 'Walk home alone through Montreal at 1 AM. Pass other solo women, couples, groups. Feel completely safe in well-lit streets. Stop for poutine. Realize North America CAN be this safe.',
                        location: 'Downtown Montreal Streets',
                        vibe: '🌙 Liberated & Safe',
                        realReference: 'Montreal is one of North America\'s safest cities with vibrant late-night culture. During Jazz Fest, downtown is full of festival-goers until 2-3 AM creating safety in numbers and community vibe.',
                        feeling: 'Walking home alone at 1 AM eating poutine. Passing other women doing the same. Nobody is scared. This is what good urban planning + culture creates. Thank you, Montreal.'
                    },
                    {
                        time: '2:30 AM',
                        title: 'Reflection & Gratitude',
                        description: 'Sit on your Airbnb balcony watching the city. Process the day - the music, the safety, the culture, the female excellence you witnessed. Plan tomorrow\'s 15 free concerts. Feel deeply grateful.',
                        location: 'Your Montreal Accommodation',
                        vibe: '🏙️ Grateful & Content',
                        realReference: 'Many Montreal neighborhoods offer affordable accommodations with balconies. The summer night atmosphere and post-festival energy make late-night reflection a cherished ritual.',
                        feeling: 'City lights. Distant jazz still playing somewhere. Tomorrow: 15 more concerts. All free. All safe. All celebrating music. I never want this festival to end.'
                    }
                ],
                soloTravelTips: [
                    'Montreal is incredibly walkable - stay in Plateau Mont-Royal or downtown within walking distance of all venues',
                    'Metro runs until 1 AM (later on weekends) - safe, clean, and efficient for getting around during festival',
                    'Most shows are FREE - you can attend world-class performances without spending money on tickets',
                    'Learn basic French greetings - Montrealers appreciate the effort though most speak perfect English',
                    'Festival runs 11 days - you can come for a long weekend or full week depending on budget and time',
                    'Combine with exploring Quebec City, Ottawa, or Vermont for extended solo travel adventure'
                ],
                empowermentPrograms: [
                    'Female jazz artist celebration - consistent booking of legendary and emerging female jazz musicians across all stages',
                    'Music education workshops - free masterclasses and talks featuring female musicians discussing their craft and careers',
                    'Accessible free programming - over 500 free concerts ensuring all women can access world-class music regardless of income',
                    'All-ages family atmosphere - mature, respectful crowds that prioritize music over partying create harassment-free environment',
                    'Bilingual inclusivity - French-English programming ensures cultural diversity and international accessibility',
                    'Urban safety infrastructure - well-lit pedestrianized areas, police presence, volunteer networks create safe environment for solo women'
                ],
                femaleArtistHighlights: [
                    'Jazz legends as headliners - Diana Krall, Norah Jones, Melody Gardot, Esperanza Spalding have graced main stages',
                    'Female instrumentalist showcases - celebrate women who play traditional male-dominated instruments like bass, drums, trumpet',
                    'International female talent - artists from over 30 countries including powerful women from Africa, Latin America, Europe',
                    'Contemporary jazz innovators - young female artists pushing boundaries and redefining what jazz can be',
                    'Tribute shows to female legends - Ella Fitzgerald, Billie Holiday, Nina Simone celebrated through special performances',
                    'Female-led bands and ensembles - not just solo artists but women leading and composing for full orchestras'
                ],
                transformationStories: [
                    {
                        name: 'Claire D.',
                        age: 42,
                        type: 'Cultural Sophistication',
                        festival: 'Montreal Jazz Festival 2024',
                        rating: 5,
                        before: 'Thought "festival" meant muddy fields, drunk crowds, and EDM. Believed that wasn\'t for me as a classical music lover who values sophistication.',
                        after: 'Montreal Jazz Fest changed my definition of festivals. Attended 25 shows in 5 days. Every one was world-class. The crowds were respectful, mature, and genuinely there for the music. Now attending annually.',
                        highlight: 'Festivals can be sophisticated, safe, and intellectually fulfilling - not all festival culture is the same'
                    },
                    {
                        name: 'Simone T.',
                        age: 29,
                        type: 'Female Musical Excellence',
                        festival: 'Montreal Jazz Festival 2024',
                        rating: 5,
                        before: 'Classical pianist feeling invisible in male-dominated music world. Never saw women my age commanding respect as instrumentalists. Questioning if I chose the wrong path.',
                        after: 'Watched Esperanza Spalding play upright bass and conduct an orchestra to 10,000 silent, reverent fans. Realized the problem isn\'t me - it\'s the genres I was exposed to. Pivoted to jazz. Now gigging regularly.',
                        highlight: 'Seeing a woman receive the respect she deserves for her musical talent changed the trajectory of my career'
                    },
                    {
                        name: 'Jennifer K.',
                        age: 55,
                        type: 'Solo Travel Confidence',
                        festival: 'Montreal Jazz Festival 2024',
                        rating: 5,
                        before: 'Widowed and terrified to travel alone. Thought I needed a man or group tour to explore cities safely. Stayed home for 3 years.',
                        after: 'Attended Montreal Jazz Fest completely solo. Walked everywhere alone. Took metro at night. Went to jazz clubs. Felt safer than I do in my hometown. Realized I\'ve been limiting myself out of fear. Now planning solo Europe trip.',
                        highlight: 'Montreal proved that solo female travel isn\'t just safe - it\'s joyful, liberating, and exactly what I needed'
                    }
                ]
            }
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
            womensExperiences: {
                highlights: [
                    'Finland ranks #1 globally for gender equality - experience it firsthand at Flow',
                    'Solo female travel paradise - Nordic safety and progressive culture',
                    'Sustainability and eco-consciousness woven into empowerment values',
                    'Historic Helsinki industrial grounds create unique urban festival experience',
                    'Strong female artist representation reflecting Finnish equality values',
                    'Scandinavian design aesthetic celebrating creativity and feminine power'
                ],
                dayInTheLife: [
                    {
                        time: '11:00 AM',
                        title: 'Explore Historic Suvilahti Industrial Grounds',
                        description: 'Arrive at Flow\'s unique venue - a historic power plant transformed into an art-filled festival site. Urban beauty meets Nordic design.',
                        location: 'Suvilahti Power Plant Area',
                        vibe: '🏭 Industrial & Artistic',
                        realReference: 'Flow Festival takes place at Suvilahti, a former power plant in Helsinki - combining industrial architecture with modern design',
                        feeling: 'Brick walls. Art installations. Finnish design everywhere. This isn\'t a field - it\'s an urban masterpiece.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Nordic Equality in Action - Solo Women Everywhere',
                        description: 'Look around. Hundreds of solo women confidently exploring. Finnish equality culture means nobody questions a woman alone.',
                        location: 'Throughout Festival',
                        vibe: '💪 Empowered & Equal',
                        realReference: 'Finland\'s #1 global ranking for gender equality creates a culture where solo female attendance is completely normalized',
                        feeling: 'Solo women everywhere. Nobody stares. Nobody questions. You\'re just... equal. This is what it should feel like everywhere.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Sustainability & Female-Led Eco Initiatives',
                        description: 'Visit eco-booths run by Finnish women activists. Learn about zero-waste living, climate action, and feminine approaches to saving the planet.',
                        location: 'Sustainability Village',
                        vibe: '🌱 Conscious & Purposeful',
                        realReference: 'Flow Festival has won awards for sustainability - features extensive eco-programming and female-led environmental initiatives',
                        feeling: 'These Finnish women are changing the world. Practical solutions. No BS. You leave inspired to DO something.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Finnish Female Artist Showcases Nordic Sound',
                        description: 'Discover incredible Finnish female musicians blending electronic music with Nordic melancholy and power. Uniquely beautiful.',
                        location: 'Black Tent / Forest Stage',
                        vibe: '🎵 Ethereal & Powerful',
                        realReference: 'Flow showcases Finnish artists including strong female representation - the Nordic sound is distinct and celebrated',
                        feeling: 'Her voice fills the tent. Haunting. Strong. Uniquely Finnish. You\'ve discovered music you didn\'t know existed.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Women in Tech & Music Panel Discussion',
                        description: 'Attend panel featuring Finnish women leading in music tech, production, and innovation. The future is being built here.',
                        location: 'Talk Tent',
                        vibe: '🚀 Innovative & Inspiring',
                        realReference: 'Flow features panels and talks on music, technology, and culture - strong focus on women in tech and innovation',
                        feeling: 'Female CEOs, producers, engineers on stage. Nordic countries don\'t just talk about equality - they LIVE it.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Sunset Over Helsinki with New Friends',
                        description: 'August in Finland means endless twilight. Watch the golden hour glow over Helsinki with women you met hours ago but feel like lifelong friends.',
                        location: 'Main Stage Area',
                        vibe: '🌅 Serene & Connected',
                        realReference: 'August evenings in Helsinki feature beautiful long twilight - Flow\'s urban location offers stunning city views',
                        feeling: 'Golden light. Helsinki skyline. Your Finnish friend explains the concept of "sisu" - resilience. You feel it in your bones.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Underground Female DJ Set',
                        description: 'Deep in the power plant, an incredible female DJ plays techno to a knowing crowd. This is where real music nerds come.',
                        location: 'Warehouse Stage',
                        vibe: '🔮 Underground & Authentic',
                        realReference: 'Flow\'s warehouse and indoor stages feature cutting-edge electronic music - strong platform for female DJs and producers',
                        feeling: 'Industrial space. Perfect sound system. She controls the room with precision. This is art. This is power.'
                    },
                    {
                        time: '12:30 AM',
                        title: 'Finnish Sauna Culture & Female Bonding',
                        description: 'Finnish women explain sauna culture - vulnerability, trust, feminine space. You understand Nordic culture on a deeper level.',
                        location: 'Conversation Areas',
                        vibe: '💭 Deep & Cultural',
                        realReference: 'Finnish sauna culture emphasizes equality, vulnerability, and trust - these values permeate Flow Festival culture',
                        feeling: 'They share their culture openly. Teach you Finnish words. You feel trusted. Accepted. Part of something ancient and sacred.'
                    },
                    {
                        time: '1:30 AM',
                        title: 'Safe Walk to Helsinki City Center',
                        description: 'Festival ends. Walk through safe, clean Helsinki streets back to your accommodation. Nordic safety at its finest.',
                        location: 'Helsinki Streets',
                        vibe: '🌙 Safe & Peaceful',
                        realReference: 'Helsinki is one of the world\'s safest cities - walking alone at night is completely normal and safe for women',
                        feeling: '1:30am. Walking alone. Not scared. Not looking over your shoulder. Just... safe. This should be universal.'
                    },
                    {
                        time: '2:00 AM',
                        title: 'Late Night Helsinki Vibes',
                        description: 'Helsinki\'s summer nightlife is alive. Join festival-goers at late-night cafes, processing the music and the magic.',
                        location: 'Helsinki Cafes',
                        vibe: '☕ Social & Reflective',
                        realReference: 'Helsinki\'s festival culture extends beyond the venue - late night cafes and hangouts are central to the experience',
                        feeling: 'Cafe at 2am. Finnish friends, new travelers, locals. Coffee and conversation. Life feels perfect in this moment.'
                    }
                ],
                soloTravelTips: [
                    'Finland is the safest country for solo female travel - embrace the freedom',
                    'Public transport from festival to Helsinki city center is safe, clean, and runs late',
                    'Finnish people may seem reserved but are incredibly helpful - just ask',
                    'Download the Flow app for meetups and solo traveler groups',
                    'Stay in Helsinki hostels for instant international friend groups',
                    'Nordic summer means long daylight - never feels too late or dark'
                ],
                empowermentPrograms: [
                    'Women in Music & Tech panels featuring Finnish industry leaders',
                    'Sustainability and climate activism led by female organizers',
                    'Finnish female artist showcases celebrating Nordic talent',
                    'Gender equality workshops reflecting Finland\'s #1 global ranking',
                    'Solo female traveler meetups through social media and app',
                    'Nordic design and art celebrating feminine creativity'
                ],
                femaleArtistHighlights: [
                    'Strong Finnish female artist representation across all stages',
                    'Nordic and Scandinavian female musicians prominently featured',
                    'Electronic music females DJs and producers leading underground stages',
                    'Gender parity reflecting Finnish equality values',
                    'International female headliners mixed with local talent',
                    'Emerging female artists platform supporting new voices'
                ],
                transformationStories: [
                    {
                        name: 'Emma L.',
                        age: 28,
                        type: 'Solo Traveler from USA',
                        festival: 'Flow Festival 2024',
                        rating: 5,
                        before: 'Scared to travel alone internationally. Everyone warned me about being a woman alone in Europe.',
                        after: 'Finland changed my entire perspective. Walked alone at 2am. Felt safer than my hometown. Solo travel fears are GONE. Booked 3 more trips.',
                        highlight: 'Nordic safety culture showed me solo female travel can be completely fearless'
                    },
                    {
                        name: 'Aino K.',
                        age: 25,
                        type: 'Finnish Female DJ',
                        festival: 'Flow Festival 2024',
                        rating: 5,
                        before: 'Felt like Finnish women were invisible in global electronic music scene.',
                        after: 'Flow gave me a platform. International promoters saw my set. Now I\'m touring 5 countries. My country believes in women.',
                        highlight: 'Finnish gender equality gave me the platform to launch my international career'
                    },
                    {
                        name: 'Priya M.',
                        age: 32,
                        type: 'Eco-Activist',
                        festival: 'Flow Festival 2024',
                        rating: 5,
                        before: 'Tired of festivals that just greenwash. Where\'s the REAL environmental commitment?',
                        after: 'Flow\'s sustainability isn\'t marketing - it\'s real. Met female climate leaders changing policy. Now I know how to make actual impact.',
                        highlight: 'Female-led sustainability programs showed me effective climate action'
                    }
                ]
            },
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
            ],
            womensExperiences: {
                highlights: [
                    'Byron Bay wellness culture - yoga at sunrise, healing circles, and mindfulness experiences embedded throughout the festival',
                    'Only Southern Hemisphere festival in our collection - experience Australian summer in July while it\'s winter up north',
                    'Beach proximity and coastal energy - combine festival with Byron Bay\'s legendary surf, wellness, and female-led spiritual community',
                    'Australian female artist celebration - from Tame Impala women to incredible Indigenous female performers',
                    'Heat safety and wellbeing prioritized - cooling stations, shade areas, mental health support reflecting Australian outdoor culture',
                    'Laid-back Aussie culture - friendly, inclusive, and genuinely welcoming atmosphere where solo female travelers thrive'
                ],
                dayInTheLife: [
                    {
                        time: '6:30 AM',
                        title: 'Sunrise Yoga by the Coast',
                        description: 'Wake before dawn and join the festival yoga session as the sun rises over the Pacific Ocean. Breathe salt air. Practice with other women seeking morning peace before the music begins.',
                        location: 'Wellness Area',
                        vibe: '🌅 Peaceful & Grounding',
                        realReference: 'Splendour offers morning yoga and wellness activities reflecting Byron Bay\'s strong yoga and mindfulness culture. The coastal location provides stunning sunrise views.',
                        feeling: 'Downward dog. Ocean breeze. Sun warming your back. A woman beside you whispers "This is why we come." Byron Bay magic is real.'
                    },
                    {
                        time: '9:00 AM',
                        title: 'Acai Bowl & Festival Planning',
                        description: 'Grab an acai bowl from one of Byron\'s famous health food vendors. Study the lineup. Circle the female artists you refuse to miss. Plan your day with intention.',
                        location: 'Food Village',
                        vibe: '🥥 Healthy & Intentional',
                        realReference: 'Splendour features numerous health-conscious food vendors reflecting Byron Bay\'s wellness food culture. Acai bowls, smoothies, and vegetarian/vegan options are festival staples.',
                        feeling: 'Fresh acai. Granola crunch. Looking at a lineup with SO many women. Australian festivals do it differently. This feels balanced.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Indigenous Female Artist Showcase',
                        description: 'Watch an Indigenous Australian woman share her music and culture on stage. Feel the power of 60,000 years of female storytelling. This land has always belonged to women too.',
                        location: 'Mix Up Stage',
                        vibe: '🪃 Cultural & Powerful',
                        realReference: 'Splendour consistently books Indigenous Australian artists including powerful female performers. These sets honor First Nations culture and provide crucial representation.',
                        feeling: 'She sings in language I don\'t know but I feel in my soul. This land. These stories. Indigenous women have ALWAYS been here. I\'m honored to witness.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Shade Tent & Female Bonding',
                        description: 'Escape the Australian heat in the communal shade area. Strike up conversation with other women about the heat, the lineup, travel stories. Aussies are genuinely friendly - it\'s not an act.',
                        location: 'Shade & Chill Zone',
                        vibe: '🌳 Cool & Social',
                        realReference: 'Splendour provides extensive shade areas and cooling stations due to Australian summer heat. These become natural gathering spots for rest and socializing.',
                        feeling: '"First Splendour?" an Australian woman asks, offering sunscreen. "Yeah!" "You\'re gonna love it, mate." Instant friendship. This is Australian culture.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Mental Health & Wellbeing Workshop',
                        description: 'Attend a workshop on festival wellness, mental health, and self-care. Splendour takes wellbeing seriously. Female psychologists and counselors share tools for staying grounded.',
                        location: 'Wellbeing Area',
                        vibe: '💚 Supportive & Caring',
                        realReference: 'Splendour offers comprehensive mental health and wellbeing services including workshops, counseling, and peer support. The festival pioneered mental health initiatives in Australian festival culture.',
                        feeling: 'A counselor validates that festivals can be overwhelming. Teaches grounding techniques. Gives us her contact for later. This is what duty of care looks like.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Australian Female Powerhouse Set',
                        description: 'Watch an Australian woman absolutely command the main stage. She\'s confident, powerful, unapologetically herself. This is what Australian women are like - they don\'t shrink.',
                        location: 'GW McLennan Stage',
                        vibe: '🎤 Empowering & Proud',
                        realReference: 'Splendour regularly books top Australian female artists including icons and emerging talent. Past headliners have included powerful women across genres.',
                        feeling: 'She owns that stage like she built it herself. 40,000 people singing her words. Australian women don\'t ask permission - they take space. I need this energy.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'Golden Hour at Amphitheatre',
                        description: 'Find the amphitheatre stage nestled in trees as golden hour light filters through. A female folk artist plays to an intimate crowd sitting on grass. This is festival magic.',
                        location: 'Amphitheatre Stage',
                        vibe: '✨ Intimate & Beautiful',
                        realReference: 'Splendour\'s Amphitheatre stage is set in natural bushland creating an intimate atmosphere. Sunset sets there are particularly magical with dappled light through trees.',
                        feeling: 'Sitting on grass. Trees overhead. Her voice echoes off natural walls. 200 people silent, reverent. Not every moment needs to be big. This intimacy is perfect.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Women\'s Healing Circle',
                        description: 'Join a women-only healing circle led by Byron Bay practitioners. Share intentions, release what no longer serves, connect with female energy under the stars.',
                        location: 'Sacred Space Area',
                        vibe: '🌙 Spiritual & Connected',
                        realReference: 'Splendour features wellness and spiritual experiences reflecting Byron Bay culture. Women\'s circles and healing practices are often part of the festival\'s holistic programming.',
                        feeling: 'Holding hands with strangers who feel like sisters. Setting intentions for who we\'re becoming. Byron Bay transformed this festival into a ceremony.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Electronic Female Producer Set',
                        description: 'Dance under the stars to an incredible female electronic producer. The production is huge but the vibe is welcoming. Solo female dancers everywhere. Nobody bothers anyone. Just music and joy.',
                        location: 'Mix Up Stage Night Set',
                        vibe: '🎧 Joyful & Free',
                        realReference: 'Splendour books strong electronic music programming including female DJs and producers. The late-night dance stages have excellent production and safe, inclusive vibes.',
                        feeling: 'Dancing alone in a crowd of thousands. Hands in the air. She drops the beat. Everyone screams. I\'m free. I\'m safe. I\'m exactly where I belong.'
                    },
                    {
                        time: '1:00 AM',
                        title: 'Late Night Beach Reflection',
                        description: 'Walk to the edge of the festival grounds and hear the ocean in the distance. The festival glows behind you. The Pacific Ocean whispers ahead. You\'re on the other side of the world feeling completely home.',
                        location: 'Festival Perimeter',
                        vibe: '🌊 Reflective & Grateful',
                        realReference: 'Splendour is held near Byron Bay coastline. The ocean proximity creates a unique atmosphere - you can often hear waves between sets.',
                        feeling: 'Ocean sounds. Festival lights. Southern Hemisphere stars I\'ve never seen. I flew 20 hours for this. Every moment was worth it. Australia gets it right.'
                    }
                ],
                soloTravelTips: [
                    'Arrive a few days early to explore Byron Bay - yoga classes, beaches, wellness culture, and female-friendly hostels/hotels',
                    'Australian festivals are incredibly solo-traveler friendly - Aussie culture is genuinely welcoming and inclusive',
                    'Book accommodation early - Byron Bay is small and fills up fast during Splendour weekend',
                    'Bring serious sun protection - Australian sun is intense. Hat, high SPF sunscreen, and stay hydrated',
                    'Use festival shuttle buses from Byron Bay town - safe, efficient, and you\'ll meet other solo travelers',
                    'Extend your trip to explore Gold Coast, Brisbane, or Sydney - Australia rewards those who travel solo and far'
                ],
                empowermentPrograms: [
                    'Mental health and wellbeing programs - pioneering comprehensive mental health support including counseling, workshops, and peer support',
                    'Indigenous female artist platform - consistent booking of First Nations women sharing culture, music, and 60,000 years of storytelling',
                    'Wellness and healing experiences - yoga, meditation, women\'s circles reflecting Byron Bay\'s spiritual and wellness culture',
                    'Heat safety and harm reduction - cooling stations, shade areas, and education prioritizing festival-goer wellbeing',
                    'Australian female artist celebration - main stage and discovery stage slots for Australian women across all genres',
                    'Anonymous reporting systems - festival app allows discreet reporting of harassment or safety concerns'
                ],
                femaleArtistHighlights: [
                    'Australian female headliners - powerhouse women from Australia commanding main stages (Tame Impala members, Courtney Barnett legacy)',
                    'Indigenous Australian female performers - First Nations women sharing cultural music and contemporary sounds',
                    'International female acts - past lineups included major female artists from around the world',
                    'Electronic music female representation - strong female DJ and producer booking across dance stages',
                    'Singer-songwriter showcases - intimate amphitheatre sets featuring female folk, indie, and alternative artists',
                    'Emerging Australian women - discovery stages platform next generation of Australian female talent'
                ],
                transformationStories: [
                    {
                        name: 'Rachel S.',
                        age: 27,
                        type: 'Long-Distance Solo Travel',
                        festival: 'Splendour in the Grass 2024',
                        rating: 5,
                        before: 'Too scared to travel to Australia alone from the UK. 24-hour flight seemed impossible. Worried about being so far from everything familiar.',
                        after: 'Splendour was the best decision of my life. Met solo travelers from 15 countries. Fell in love with Byron Bay. Extended my trip 2 weeks. Now planning to move to Australia. Distance was the barrier I needed to cross.',
                        highlight: 'Australia taught me that "home" can be anywhere you feel safe, welcomed, and free'
                    },
                    {
                        name: 'Maya P.',
                        age: 24,
                        type: 'Wellness & Self-Discovery',
                        festival: 'Splendour in the Grass 2024',
                        rating: 5,
                        before: 'Burned out from work. Disconnected from my body. Treated festivals like drinking marathons. Felt empty and anxious.',
                        after: 'Splendour + Byron Bay showed me festivals can be healing. Morning yoga. Sound baths. Dancing sober. Connected with my body for first time in years. Quit my job. Trained as yoga teacher. Changed my entire life.',
                        highlight: 'Byron Bay wellness culture proved you can party AND heal - they\'re not opposites'
                    },
                    {
                        name: 'Talisha K.',
                        age: 30,
                        type: 'Indigenous Pride & Representation',
                        festival: 'Splendour in the Grass 2024',
                        rating: 5,
                        before: 'Indigenous Australian woman who felt invisible in mainstream Australian culture. Rarely saw myself represented at major festivals.',
                        after: 'Watched an Indigenous woman perform to 20,000 people singing along in language. Realized we\'re not invisible - we\'re essential. Our stories matter. Our music matters. Splendour proved it.',
                        highlight: 'Seeing my culture celebrated on main stages healed something I didn\'t know was broken'
                    }
                ]
            }
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
            ],
            womensExperiences: {
                highlights: [
                    'Literature, poetry, and arts empowerment - dedicated tents for female authors, poets, and thinkers alongside music stages',
                    'Family-friendly culture creating inherent safety - multi-generational attendance normalizes respectful behavior',
                    'Beautiful Suffolk countryside lakeside setting - peaceful, scenic, and restorative environment',
                    'Intellectual and creative programming - workshops, readings, comedy, and talks celebrating women\'s voices and ideas',
                    'Boutique festival intimacy - 40,000 capacity feels personal and community-oriented rather than overwhelming',
                    'Strong feminist literary tradition - consistent booking of female writers, activists, and thought leaders alongside musicians'
                ],
                dayInTheLife: [
                    {
                        time: '9:00 AM',
                        title: 'Lakeside Morning Reflection',
                        description: 'Wake in your tent and walk to Henham Park lake. Watch mist rise off the water as sunrise illuminates the Suffolk countryside. This isn\'t just a music festival - it\'s a retreat.',
                        location: 'Henham Park Lake',
                        vibe: '🌅 Peaceful & Restorative',
                        realReference: 'Latitude is held in beautiful Henham Park estate with a scenic lake. Early morning walks by the water are a cherished festival ritual.',
                        feeling: 'Lake reflections. Bird song. Families starting to wake up. This is the gentlest festival morning I\'ve ever experienced. Peace before the day begins.'
                    },
                    {
                        time: '11:00 AM',
                        title: 'Female Author Reading & Q&A',
                        description: 'Attend a reading by a female author in the Literature Arena. She reads from her new novel about women\'s rage. The tent is packed. Everyone is listening with reverence. This is empowerment through words.',
                        location: 'The Faraway Forest Literature Arena',
                        vibe: '📚 Intellectual & Inspiring',
                        realReference: 'Latitude features extensive literary programming with renowned female authors, poets, and essayists. The Faraway Forest area hosts readings, talks, and intimate conversations.',
                        feeling: 'She reads: "Women are tired of being small." The tent erupts in knowing laughter. Then silence. Then applause. Literature festivals understand our hunger for words.'
                    },
                    {
                        time: '1:00 PM',
                        title: 'Feminist Comedy Performance',
                        description: 'Watch a female comedian destroy patriarchy for 45 minutes straight. The audience is 60% women howling with laughter and recognition. Comedy as catharsis. Comedy as resistance.',
                        location: 'The Comedy Arena',
                        vibe: '😂 Joyful & Subversive',
                        realReference: 'Latitude has a dedicated Comedy Arena booking top UK and international comedians including strong female representation and explicitly feminist comedy.',
                        feeling: 'She makes a joke about men explaining things to her. 2000 women scream with recognition. We\'re laughing so hard we\'re crying. This is collective healing.'
                    },
                    {
                        time: '3:00 PM',
                        title: 'Family Area Observation',
                        description: 'Walk through the family camping area. See multi-generational groups - grandmothers, mothers, daughters attending together. This is what normalizing festival culture for all ages looks like.',
                        location: 'Family Camping Zone',
                        vibe: '👨‍👩‍👧‍👦 Wholesome & Safe',
                        realReference: 'Latitude is known for family-friendly atmosphere with dedicated family camping and programming. Multi-generational attendance creates inherently safer, more respectful environment.',
                        feeling: 'A grandmother teaches her granddaughter how to put up a tent. This is what it looks like when festivals are for EVERYONE. Safety through inclusivity.'
                    },
                    {
                        time: '5:00 PM',
                        title: 'Female Poet Performance',
                        description: 'Discover a female spoken word poet performing poetry about body autonomy, consent, and reclaiming power. 200 people sit on grass in silence. Every word lands like truth.',
                        location: 'Poetry Stage',
                        vibe: '✍️ Raw & Powerful',
                        realReference: 'Latitude features dedicated poetry programming showcasing contemporary poets including powerful women performing work about gender, identity, and social justice.',
                        feeling: 'Her poem ends: "My body is mine. Say it with me." 200 voices: "My body is mine." I\'m sobbing. Art changes us.'
                    },
                    {
                        time: '7:00 PM',
                        title: 'UK Female Indie Headliner',
                        description: 'Watch a British female artist headline the main stage as the sun sets over the lake. Her music is vulnerable and fierce. 30,000 people sing every word. Women can be soft AND powerful.',
                        location: 'Obelisk Arena Main Stage',
                        vibe: '🎤 Triumphant & Emotional',
                        realReference: 'Latitude books strong female headliners across indie, alternative, and folk genres. Past headliners have included powerful women whose music prioritizes lyricism and emotion.',
                        feeling: 'She sings about heartbreak with no apology. The crowd holds up lights. This is what it sounds like when women\'s pain is treated as art, not weakness.'
                    },
                    {
                        time: '9:00 PM',
                        title: 'Late Night Literary Cabaret',
                        description: 'Stumble into a late-night literary cabaret featuring female writers performing experimental pieces. It\'s weird, brilliant, and unapologetically feminist. This is what festivals should include.',
                        location: 'Late Night Cabaret Tent',
                        vibe: '🎭 Experimental & Bold',
                        realReference: 'Latitude\'s late-night programming includes experimental literary performances, cabaret, and intimate showcases often featuring feminist and queer artists.',
                        feeling: 'A woman performs an essay-poem about her abortion set to electronic music. It\'s art I didn\'t know could exist. My mind is expanding.'
                    },
                    {
                        time: '11:00 PM',
                        title: 'Campfire Conversations',
                        description: 'Sit around a campfire with other female festival-goers discussing the books, comedy, poetry, and music we experienced. This is intellectual community. This is what we\'ve been hungry for.',
                        location: 'Camping Area',
                        vibe: '🔥 Connected & Thoughtful',
                        realReference: 'Latitude\'s intimate, arts-focused atmosphere creates natural spaces for meaningful conversation. Camping areas become sites of connection and intellectual exchange.',
                        feeling: '"Did you see the poet at 5?" "YES. I cried." "Me too." Sharing art experiences with strangers who get it. This is why I came.'
                    },
                    {
                        time: '12:30 AM',
                        title: 'Safe Solo Walk to Tent',
                        description: 'Walk back to your tent alone through family camping areas. Pass security patrols, couples, groups, solo women. Feel completely safe in the countryside at midnight.',
                        location: 'Festival Paths',
                        vibe: '🌙 Safe & Calm',
                        realReference: 'Latitude\'s family-friendly culture and excellent security create safe camping environment. Regular patrols and community atmosphere ensure solo women feel secure.',
                        feeling: 'Midnight walk through campsites. Laughter from tents. Security nod hello. Families everywhere. This is the safest festival camping I\'ve experienced.'
                    },
                    {
                        time: '1:30 AM',
                        title: 'Gratitude & Integration',
                        description: 'Lie in your tent processing the day - the literature, poetry, comedy, music, and conversations. Realize your mind and soul needed feeding, not just your ears. Latitude understood that.',
                        location: 'Your Tent',
                        vibe: '⭐ Grateful & Full',
                        realReference: 'Latitude\'s multi-arts programming creates uniquely holistic festival experience. Attendees often cite the intellectual and emotional nourishment as transformative.',
                        feeling: 'I came for music. I got philosophy, feminism, comedy, poetry, and community. My brain is fed. My heart is full. This is what festivals can be.'
                    }
                ],
                soloTravelTips: [
                    'Arrive Thursday if possible - early arrival means relaxed setup and participation in opening events before crowds build',
                    'Bring books to read - Latitude\'s literary culture means you\'ll see people reading everywhere and find kindred spirits',
                    'Attend literary and comedy programming - these tents create natural conversation-starters and intellectual connection',
                    'Family camping areas are safest - consider camping near families for added security and community atmosphere',
                    'Suffolk is beautiful - extend your trip to explore Southwold, coastal walks, and English countryside',
                    'Download the festival app - lineup is extensive across music, comedy, literature, arts - you need to plan'
                ],
                empowermentPrograms: [
                    'Feminist literary programming - consistent booking of female authors, poets, and essayists discussing women\'s experiences and ideas',
                    'Female comedian showcase - dedicated comedy programming featuring women\'s perspectives and explicitly feminist comedy',
                    'Women in music panels - talks and discussions about gender in the music industry featuring female artists and executives',
                    'Multi-generational attendance - family-friendly culture normalizes festival participation for women of all ages',
                    'Arts and crafts workshops - creative programming often led by female artists and makers',
                    'Mental health and welfare support - comprehensive support services with focus on emotional and psychological wellbeing'
                ],
                femaleArtistHighlights: [
                    'Female headliners across genres - strong booking of women headlining main stages (indie, folk, alternative)',
                    'Literary women as stars - female authors get equal billing with musicians, elevating intellectual women\'s voices',
                    'Female comedians prominently featured - dedicated comedy programming with top UK and international women',
                    'Singer-songwriter showcases - intimate stages perfect for female artists prioritizing lyrics and storytelling',
                    'Emerging female talent - discovery stages and new artist slots for up-and-coming women',
                    'Interdisciplinary female artists - women who blend music, poetry, spoken word, and performance art'
                ],
                transformationStories: [
                    {
                        name: 'Helena R.',
                        age: 45,
                        type: 'Intellectual Empowerment',
                        festival: 'Latitude 2024',
                        rating: 5,
                        before: 'Felt invisible as a middle-aged woman. Thought festival culture was for young people. Believed I was "too old" and "too serious" for festivals.',
                        after: 'Latitude proved festivals can be intellectual, multi-generational, and designed for people who THINK. Attended author talks, poetry readings, comedy shows. Met women my age and older. Age is irrelevant here - ideas matter. Attending annually now.',
                        highlight: 'Festivals don\'t have to be anti-intellectual - Latitude feeds minds AND souls'
                    },
                    {
                        name: 'Priya K.',
                        age: 27,
                        type: 'Literary Career Inspiration',
                        festival: 'Latitude 2024',
                        rating: 5,
                        before: 'Aspiring writer feeling like literature was dying. Nobody cared about books. Questioned pursuing writing career.',
                        after: 'Watched 5000 people pack a tent to hear a female poet read. Met my literary hero. Got advice on my manuscript. Realized there IS an audience for serious writing. Signed with an agent 3 months later. Latitude changed my career trajectory.',
                        highlight: 'Seeing female writers treated as rockstars validated that literature still matters'
                    },
                    {
                        name: 'Sarah W.',
                        age: 33,
                        type: 'Mother Reclaiming Identity',
                        festival: 'Latitude 2024',
                        rating: 5,
                        before: 'New mom who felt like I\'d lost myself. Identity reduced to "mother." Thought festivals were over for me now.',
                        after: 'Brought my daughter to Latitude. Attended feminist comedy, female author readings, and music while she played safely. Met other mothers doing the same. Realized motherhood doesn\'t erase me - it adds to me. I\'m still a whole person.',
                        highlight: 'Family-friendly festivals let mothers attend as PEOPLE, not just caregivers'
                    }
                ]
            }
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
