import { Route, Phrase, EtiquetteTip, TransportationOption } from './types';

export const ROUTES: Route[] = [
  {
    id: 'gobi-1',
    name: 'Gobi Desert Explorer',
    duration: '8 Days',
    distance: '1,200 km',
    description: 'A classic route through the legendary Gobi. From the Flaming Cliffs to the Khongor Sand Dunes.',
    highlights: ['Yol Valley', 'Flaming Cliffs (Bayanzag)', 'Khongor Sand Dunes', 'Baga Gazriin Chuluu'],
    image: 'https://picsum.photos/seed/gobi/800/600'
  },
  {
    id: 'khuvsgul-1',
    name: 'Blue Pearl of North',
    duration: '10 Days',
    distance: '1,500 km',
    description: 'Adventure to Lake Khuvsgul, the deepest lake in Central Asia, through the Tariat volcanic field.',
    highlights: ['Lake Khuvsgul', 'Khorgo Volcano', 'Terkhiin Tsagaan Lake', 'Amarbayasgalant Monastery'],
    image: 'https://picsum.photos/seed/lake/800/600'
  },
  {
    id: 'altai-1',
    name: 'Altai Mountains & Eagles',
    duration: '12 Days',
    distance: '2,000 km',
    description: 'Visit the home of the Kazakh golden eagle hunters in the rugged Altai Mountains.',
    highlights: ['Altai Tavan Bogd', 'Golden Eagle Hunters', 'Tolbo Lake', 'Khovd City'],
    image: 'https://picsum.photos/seed/mountains/800/600'
  }
];

export const PHRASES: Phrase[] = [
  { mongolian: 'Sain baina uu?', pronunciation: 'Sain bai-nah oo', english: 'Hello', category: 'Greetings' },
  { mongolian: 'Bayarlala.', pronunciation: 'Bay-ar-lah-lah', english: 'Thank you', category: 'Greetings' },
  { mongolian: 'Uuchlaarai.', pronunciation: 'Oo-chla-rai', english: 'Sorry / Excuse me', category: 'Greetings' },
  { mongolian: 'Tsai.', pronunciation: 'Tsai', english: 'Tea', category: 'Food' },
  { mongolian: 'Khorkhog.', pronunciation: 'Khor-khog', english: 'Traditional BBQ', category: 'Food' },
  { mongolian: 'Ene khed ve?', pronunciation: 'Ene khed ve', english: 'How much is this?', category: 'Numbers' },
  { mongolian: 'Khaana ve?', pronunciation: 'Khaan-ah ve', english: 'Where is it?', category: 'Directions' },
  { mongolian: 'Tuslaarai!', pronunciation: 'Tus-lar-ai', english: 'Help!', category: 'Emergency' }
];

export const ETIQUETTE: EtiquetteTip[] = [
  {
    title: 'Entering a Ger',
    content: 'Always step over the threshold, never on it. If you stumble on the threshold, it is considered bad luck and you must return outside and re-enter.',
    category: 'Ger'
  },
  {
    title: 'Accepting Tea',
    content: 'Always accept food or tea with your right hand, or both hands. Use your right hand to offer things as well.',
    category: 'Food'
  },
  {
    title: 'The Blue Sky',
    content: 'Mongolians have deep respect for "Munkh Khukh Tenger" (Eternal Blue Sky). Do not throw trash into water sources or fires.',
    category: 'Nature'
  },
  {
    title: 'Passing Items',
    content: 'Never pass items over someone s head. If you accidentally kick someone s foot, immediately shake their hand as a sign of apology.',
    category: 'Social'
  }
];

export const EMERGENCY_CONTACTS = [
  { name: 'Police', number: '102' },
  { name: 'Ambulance', number: '103' },
  { name: 'Fire Department', number: '101' },
  { name: 'Road Rescue', number: '111' }
];

export const FESTIVALS = [
  {
    id: 'naadam-1',
    name: 'Naadam Festival',
    date: 'July 11-13',
    location: 'Ulaanbaatar & Nationwide',
    description: 'The "Three Manly Games" including wrestling, horse racing, and archery.'
  },
  {
    id: 'eagle-1',
    name: 'Golden Eagle Festival',
    date: 'October 1st Weekend',
    location: 'Bayan-Ulgii',
    description: 'Kazakh hunters celebrate their tradition of hunting with trained golden eagles.'
  },
  {
    id: 'tsagaan-1',
    name: 'Tsagaan Sar',
    date: 'Jan/Feb (Lunar)',
    location: 'Nationwide',
    description: 'White Moon, the Mongolian Lunar New Year celebration of spring and kinship.'
  }
];

export const TRANSPORT_OPTIONS: TransportationOption[] = [
  {
    id: 'bus',
    type: 'Intercity Bus',
    title: 'Dragon & Bayanzurkh Terminals',
    description: 'The most economical way to travel between major provinces. Dragon Terminal serves the west and north, while Bayanzurkh serves the east and south.',
    costs: '25,000 - 65,000 MNT ($7 - $18 USD)',
    times: '6 - 24 hours depending on the distance.',
    bookingAdvice: 'Tickets can be bought at the terminals or online via eticket.trans.gov.mn. Book at least 24 hours in advance during high season.'
  },
  {
    id: 'train',
    type: 'Train',
    title: 'Trans-Mongolian Railway',
    description: 'Comfortable and scenic rail travel connecting Ulaanbaatar with Erdenet, Darkhan, Sukhbaatar, and Zamyn-Uud.',
    costs: '15,000 - 95,000 MNT ($4 - $28 USD)',
    times: 'Ulaanbaatar to Zamyn-Uud takes about 14 hours.',
    bookingAdvice: 'Tickets available at the central train station or eticket.ubtz.mn. Soft sleepers are recommended for overnight trips.'
  },
  {
    id: 'private',
    type: 'Private 4x4 & Driver',
    title: 'Off-Road Nomad Expeditions',
    description: 'The only practical way to see the deep steppes and remote gobi. Usually involves a Russian UAZ-452 "Furgon" or a Japanese Land Cruiser.',
    costs: '$80 - $160 per day (includes fuel, driver, and car).',
    times: 'Flexible, usually 4-8 hours of driving per day.',
    bookingAdvice: 'Book through local tour operators or guesthouses in Ulaanbaatar. Negotiate fuel costs clearly before departure.'
  },
  {
    id: 'guide',
    type: 'Local Guides',
    title: 'Cultural Interpreters',
    description: 'Essential for bridgeing the language gap with nomadic families and explaining complex cultural traditions.',
    costs: '$30 - $70 per day plus food/lodging.',
    times: 'N/A',
    bookingAdvice: 'Hire guides with multi-lingual skills. Ask for references or check reviews on travel communities.'
  }
];
