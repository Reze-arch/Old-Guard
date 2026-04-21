export interface Route {
  id: string;
  name: string;
  duration: string;
  distance: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Phrase {
  mongolian: string;
  pronunciation: string;
  english: string;
  category: 'Greetings' | 'Food' | 'Directions' | 'Emergency' | 'Numbers';
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  currency: 'MNT' | 'USD';
  category: string;
  date: string;
}

export interface Festival {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

export interface EtiquetteTip {
  title: string;
  content: string;
  category: 'Ger' | 'Social' | 'Nature' | 'Food';
}

export interface TransportationOption {
  id: string;
  type: string;
  title: string;
  description: string;
  costs: string;
  times: string;
  bookingAdvice: string;
}
