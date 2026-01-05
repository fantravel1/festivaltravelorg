/**
 * Festival Location Images - All images from Unsplash (Copyright-Free)
 *
 * These images are free to use under the Unsplash License:
 * - Free for commercial and non-commercial use
 * - No permission needed (though attribution is appreciated)
 *
 * Image sources: https://unsplash.com
 */

const FESTIVAL_IMAGES = {
  // WOMAD Festival - Wiltshire, UK (World Music, Cultural)
  'womad': {
    hero: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80', // Festival crowd with lights
    card: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80', // Concert stage
    location: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&q=80', // English countryside
    gallery: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', // Concert crowd
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80', // Festival stage lights
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80'  // Music performance
    ],
    credit: 'Photos from Unsplash'
  },

  // Primavera Sound - Barcelona, Spain
  'primavera-sound': {
    hero: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80', // Barcelona beach cityscape
    card: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', // Barcelona architecture
    location: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=80', // Barcelona aerial view
    gallery: [
      'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80', // Barcelona streets
      'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=600&q=80', // Spanish beach sunset
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'  // Concert crowd
    ],
    credit: 'Photos from Unsplash'
  },

  // Roskilde Festival - Denmark
  'roskilde': {
    hero: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1920&q=80', // Copenhagen/Denmark colorful buildings
    card: 'https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&q=80', // Nordic scenery
    location: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', // Danish landscape
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', // Festival tents
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80', // Music festival crowd
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80'  // Concert lights
    ],
    credit: 'Photos from Unsplash'
  },

  // Shambhala Music Festival - British Columbia, Canada
  'shambhala': {
    hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', // Canadian mountains
    card: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80', // BC mountain lake
    location: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80', // Forest mountains
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', // EDM festival lights
      'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80', // Mountain forest
      'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=600&q=80'  // DJ performance
    ],
    credit: 'Photos from Unsplash'
  },

  // Electric Forest - Michigan, USA
  'electric-forest': {
    hero: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80', // Magical forest
    card: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80', // Forest with lights
    location: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80', // Forest path
    gallery: [
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80', // Sunlight through trees
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', // Night festival lights
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=600&q=80'  // Electronic music crowd
    ],
    credit: 'Photos from Unsplash'
  },

  // Tramlines - Sheffield, UK
  'tramlines': {
    hero: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80', // UK city street
    card: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80', // Urban cityscape
    location: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80', // British city
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', // Urban festival
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80', // City concert
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80'  // Festival lights
    ],
    credit: 'Photos from Unsplash'
  },

  // Osheaga - Montreal, Canada
  'osheaga': {
    hero: 'https://images.unsplash.com/photo-1519178614-68673b201f36?w=1920&q=80', // Montreal skyline
    card: 'https://images.unsplash.com/photo-1558489580-faa74691fdc5?w=800&q=80', // Montreal architecture
    location: 'https://images.unsplash.com/photo-1535041422672-8c3254ab2927?w=800&q=80', // Montreal cityscape
    gallery: [
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80', // Summer festival
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', // Concert crowd
      'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=600&q=80'  // Festival stage
    ],
    credit: 'Photos from Unsplash'
  },

  // Coachella - California, USA
  'coachella': {
    hero: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80', // Festival lights
    card: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Desert sunset
    location: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', // California desert
    gallery: [
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', // Concert crowd
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80', // Stage lights
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80'  // Performance
    ],
    credit: 'Photos from Unsplash'
  },

  // Glastonbury - Somerset, UK
  'glastonbury': {
    hero: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=1920&q=80', // Festival main stage
    card: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Festival tents
    location: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80', // English countryside
    gallery: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80', // Festival crowd
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80', // Music performance
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80'  // Stage show
    ],
    credit: 'Photos from Unsplash'
  },

  // Tomorrowland - Belgium
  'tomorrowland': {
    hero: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80', // Massive EDM crowd
    card: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=800&q=80', // DJ booth lights
    location: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800&q=80', // Belgian landscape
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', // Festival pyrotechnics
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=600&q=80', // EDM crowd
      'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80'  // Festival night
    ],
    credit: 'Photos from Unsplash'
  },

  // Fuji Rock - Japan
  'fuji-rock': {
    hero: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80', // Mount Fuji
    card: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80', // Japanese mountains
    location: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80', // Japan landscape
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', // Japanese nature
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80', // Mountain scenery
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80'  // Japan atmosphere
    ],
    credit: 'Photos from Unsplash'
  },

  // Montreal Jazz Festival - Montreal, Canada
  'montreal-jazz': {
    hero: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1920&q=80', // Jazz performance
    card: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80', // Jazz musician
    location: 'https://images.unsplash.com/photo-1558489580-faa74691fdc5?w=800&q=80', // Montreal night
    gallery: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80', // Jazz instruments
      'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&q=80', // Live music
      'https://images.unsplash.com/photo-1519178614-68673b201f36?w=600&q=80'  // Montreal
    ],
    credit: 'Photos from Unsplash'
  },

  // Flow Festival - Helsinki, Finland
  'flow-festival': {
    hero: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1920&q=80', // Helsinki waterfront
    card: 'https://images.unsplash.com/photo-1565279799937-b397e6483124?w=800&q=80', // Nordic city
    location: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=800&q=80', // Finland nature
    gallery: [
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&q=80', // Modern architecture
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&q=80', // Nordic atmosphere
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80'  // Festival crowd
    ],
    credit: 'Photos from Unsplash'
  },

  // Splendour in the Grass - Byron Bay, Australia
  'splendour': {
    hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80', // Australian beach
    card: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', // Byron Bay coastline
    location: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80', // Australian landscape
    gallery: [
      'https://images.unsplash.com/photo-1527915676329-fd5ec8a12d4b?w=600&q=80', // Aussie beach sunset
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80', // Beach festival vibe
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80'  // Summer crowd
    ],
    credit: 'Photos from Unsplash'
  },

  // Latitude Festival - Suffolk, UK
  'latitude': {
    hero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80', // English countryside
    card: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Festival tents
    location: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80', // UK nature
    gallery: [
      'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=600&q=80', // English fields
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80', // Festival atmosphere
      'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=600&q=80'  // Music stage
    ],
    credit: 'Photos from Unsplash'
  },

  // Default/fallback images
  'default': {
    hero: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80',
    card: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    location: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
      'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=600&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80'
    ],
    credit: 'Photos from Unsplash'
  }
};

/**
 * Get images for a specific festival
 * @param {string} festivalId - The festival ID
 * @returns {object} Image URLs for the festival
 */
function getFestivalImages(festivalId) {
  return FESTIVAL_IMAGES[festivalId] || FESTIVAL_IMAGES['default'];
}

/**
 * Get a specific image type for a festival
 * @param {string} festivalId - The festival ID
 * @param {string} imageType - Type: 'hero', 'card', 'location', 'gallery'
 * @returns {string|array} Image URL(s)
 */
function getFestivalImage(festivalId, imageType) {
  const images = getFestivalImages(festivalId);
  return images[imageType] || FESTIVAL_IMAGES['default'][imageType];
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FESTIVAL_IMAGES, getFestivalImages, getFestivalImage };
}
