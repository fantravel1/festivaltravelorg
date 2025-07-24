/*
  JavaScript functionality for the Festivals For Women website.
  Includes dynamic generation of festival cards and simple UI helpers.
*/

// Festival data definition. Each object contains information used to
// populate the festival cards on the festivals page. More events
// can be added to this array to expand the library.
const festivalData = [
  {
    id: 'igloofest',
    name: 'Igloofest',
    location: 'Montreal, Canada',
    description: 'A winter festival known for its inclusive atmosphere and emphasis on attendee safety.',
    highlights: [
      'Held in the freezing Montreal winter, encouraging warm clothing and personal safety',
      'Organisers strive to prevent issues such as harassment and personal space invasion',
      'Packages include lodging, tickets and transfers for hassle‑free travel'
    ],
    link: 'igloofest.html'
  },
  {
    id: 'laneway',
    name: 'Laneway Festival',
    location: 'Australia / Singapore',
    description: 'A multi‑city festival celebrated for its female‑friendly environment and diverse line‑up.',
    highlights: [
      'More than half of the performers are female and unearthed artists are welcomed regardless of gender',
      'Takes place across cities including Melbourne, Adelaide, Auckland, Brisbane, Sydney, Fremantle and Singapore',
      'Supports causes such as Plus 1, Dean Turner Project and Fight NMD'
    ],
    link: 'laneway.html'
  },
  {
    id: 'ctm',
    name: 'CTM Festival',
    location: 'Berlin, Germany',
    description: 'A festival for adventurous music and visual arts with a strong social conscience.',
    highlights: [
      'Running since 1999 with continually improving programmes and formats',
      'Supports local and international arts, media cultures and technological developments',
      'Tackles social issues through music and arts'
    ],
    link: 'ctm.html'
  },
  {
    id: 'snowbombing',
    name: 'Snowbombing',
    location: 'Mayrhofen, Austria',
    description: 'An alpine festival combining music with wholesome activities in a safe setting.',
    highlights: [
      'Winner of the “Best Small Festival” at the 2016 European Festival Awards',
      'Offers paragliding, igloo raving, fancy dress parties and alpine yoga classes',
      'Features world‑famous bands, artists and DJs in an idyllic mountain setting'
    ],
    link: 'snowbombing.html'
  },
  {
    id: 'tomorrowland',
    name: 'Tomorrowland',
    location: 'Boom, Belgium',
    description: 'One of the world’s most famous festivals, known for its vibrant atmosphere and safety.',
    highlights: [
      'Held over two weekends and sells out within minutes',
      'Celebrated for being safe, friendly and welcoming to women and LGBTQ+ communities',
      'Offers a truly immersive musical experience with elaborate stages and decor'
    ],
    link: 'tomorrowland.html'
  }
  ,
  // Newly added festivals focusing on women’s empowerment and safe spaces
  {
    id: 'sherises',
    name: 'She Rises Festival',
    location: 'Taos, New Mexico, USA',
    description: 'A transformative celebration of women in music that uplifts female artists and supports charitable causes.',
    highlights: [
      'Empowers female artists and fosters community connection while supporting Music Helps programs for traumatized children and women in shelters',
      'Bridges art and heart by uplifting women in music and creating lasting social impact',
      'Features an international all-female lineup and welcomes everyone to celebrate diversity and creativity'
    ],
    link: 'sherises.html'
  },
  {
    id: 'statement',
    name: 'Statement Festival',
    location: 'Gothenburg, Sweden',
    description: 'A pioneering festival designed as a safe space for women, non‑binary and transgender people.',
    highlights: [
      'Created by comedian Emma Knyckare as a response to assaults at other festivals, offering a place where attendees can enjoy music without fear',
      'Welcomes women, non‑binary and transgender individuals, creating a supportive environment free from cisgender male presence',
      'Its success demonstrates the demand for inclusive festivals that prioritise safety and respect'
    ],
    link: 'statement.html'
  },
  {
    id: 'electricforest',
    name: 'Electric Forest',
    location: 'Rothbury, Michigan, USA',
    description: 'An eclectic festival with a dedicated “Her Forest” program that offers a supportive and empowering environment for women.',
    highlights: [
      'Her Forest programme provides a supportive and empowering environment for women attending and camping alone',
      'Features a women’s group camp in the heart of general camping where female attendees can meet and share their experiences',
      'Offers a four‑day immersive festival experience surrounded by nature and music'
    ],
    link: 'electricforest.html'
  }
];

/**
 * Populate festival cards on the festivals page. This function
 * dynamically inserts card elements into the DOM based on the
 * festivalData array. To load more events, simply append objects
 * to the festivalData array above.
 */
function populateFestivalGrid() {
  const grid = document.getElementById('festival-grid');
  if (!grid) return;
  festivalData.forEach(festival => {
    const card = document.createElement('div');
    card.className = 'card';

    const header = document.createElement('div');
    header.className = 'card-header';
    const title = document.createElement('h3');
    title.textContent = festival.name;
    header.appendChild(title);
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'card-body';
    const loc = document.createElement('p');
    loc.innerHTML = `<strong>Location:</strong> ${festival.location}`;
    body.appendChild(loc);
    const desc = document.createElement('p');
    desc.textContent = festival.description;
    body.appendChild(desc);
    const ul = document.createElement('ul');
    festival.highlights.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    body.appendChild(ul);
    card.appendChild(body);

    const footer = document.createElement('div');
    footer.className = 'card-footer';
    const link = document.createElement('a');
    link.href = festival.link;
    link.textContent = 'Read more';
    footer.appendChild(link);
    card.appendChild(footer);

    grid.appendChild(card);
  });
}

// When the DOM is loaded, call populateFestivalGrid on the relevant page
document.addEventListener('DOMContentLoaded', () => {
  populateFestivalGrid();
});