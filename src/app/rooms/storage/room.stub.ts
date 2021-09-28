import { RoomDto, RoomAmenities } from "../common/room.interface";

/* eslint-disable max-len */
export const ROOMS_DTO_STUB: RoomDto[] = [
  {
    id: 1,
    building: 1,
    guests: 2,
    beds: 1,
    bedrooms: 1,
    bathrooms: 1,
    price: 2500,
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.CarbonMonoxideAlarm,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
    ],
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    photos: [
      '/assets/images/rooms/photo-22.jpg',
      '/assets/images/rooms/photo-23.jpg',
      '/assets/images/rooms/photo-24.jpg',
      '/assets/images/rooms/photo-10.jpg',
      '/assets/images/rooms/photo-11.jpg',
      '/assets/images/rooms/photo-12.jpg',
    ],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 2,
    building: 2,
    guests: 3,
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 2750,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.HairDryer,
    ],
    photos: [
      '/assets/images/rooms/photo-3.jpg',
      '/assets/images/rooms/photo-1.jpg',
      '/assets/images/rooms/photo-22.jpg',
      '/assets/images/rooms/photo-13.jpg',
      '/assets/images/rooms/photo-14.jpg',
      '/assets/images/rooms/photo-15.jpg',
    ],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 3,
    building: 2,
    guests: 3,
    beds: 2,
    bedrooms: 2,
    bathrooms: 1,
    price: 5400,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.Kitchen,
    ],
    photos: [
      '/assets/images/rooms/photo-4.jpg',
      '/assets/images/rooms/photo-5.jpg',
      '/assets/images/rooms/photo-6.jpg',
      '/assets/images/rooms/photo-16.jpg',
      '/assets/images/rooms/photo-17.jpg',
      '/assets/images/rooms/photo-18.jpg',
    ],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 4,
    building: 3,
    guests: 2,
    beds: 1,
    bedrooms: 1,
    bathrooms: 1,
    price: 1800,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.Kitchen,
    ],
    photos: ['/assets/images/rooms/photo-7.jpg', '/assets/images/rooms/photo-8.jpg', '/assets/images/rooms/photo-9.jpg'],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 5,
    building: 3,
    guests: 3,
    beds: 2,
    bedrooms: 2,
    bathrooms: 1,
    price: 3800,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.Kitchen,
    ],
    photos: ['/assets/images/rooms/photo-10.jpg', '/assets/images/rooms/photo-11.jpg', '/assets/images/rooms/photo-12.jpg'],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 6,
    building: 3,
    guests: 4,
    beds: 2,
    bedrooms: 2,
    bathrooms: 2,
    price: 6800,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.Kitchen,
    ],
    photos: ['/assets/images/rooms/photo-13.jpg', '/assets/images/rooms/photo-14.jpg', '/assets/images/rooms/photo-15.jpg'],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 7,
    building: 4,
    guests: 2,
    beds: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 2200,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.Kitchen,
    ],
    photos: ['/assets/images/rooms/photo-16.jpg', '/assets/images/rooms/photo-17.jpg', '/assets/images/rooms/photo-18.jpg'],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 8,
    building: 4,
    guests: 6,
    beds: 3,
    bedrooms: 3,
    bathrooms: 2,
    price: 6800,
    description:
      'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный парк, жд вокзал, метро, площадь Ленина.',
    amenities: [
      RoomAmenities.AirConditioning,
      RoomAmenities.Elevator,
      RoomAmenities.Hangers,
      RoomAmenities.Tv,
      RoomAmenities.Towels,
      RoomAmenities.Kitchen,
    ],
    photos: ['/assets/images/rooms/photo-19.jpg', '/assets/images/rooms/photo-20.jpg', '/assets/images/rooms/photo-21.jpg'],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
];
/* eslint-enable max-len */
