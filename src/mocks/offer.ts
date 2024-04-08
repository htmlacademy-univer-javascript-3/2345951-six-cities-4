import { OfferType } from '../types/offer';


export const offers: OfferType[] = [
  {
    id: '0',
    title: 'Beautiful & luxurious studio at great location',
    image: 'public/img/apartment-01.jpg',
    type: 'Apartment',
    rating: 4.8,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    isFavorite: true,
    isPremium: true,
  },

  {
    id: '1',
    title: 'Wood and stone place',
    image: 'public/img/room.jpg',
    type: 'Room',
    rating: 3,
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    isFavorite: true,
    isPremium: false,
  },

  {
    id: '2',
    title: 'Canal View Prinsengracht',
    image: 'public/img/apartment-02.jpg',
    type: 'Apartment',
    rating: 4,
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    isFavorite: true,
    isPremium: false,
  },

  {
    id: '3',
    title: 'Nice, cozy, warm big bed apartment',
    image: 'public/img/apartment-03.jpg',
    type: 'Apartment',
    rating: 4.8,
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    isFavorite: true,
    isPremium: false,
  },
];
