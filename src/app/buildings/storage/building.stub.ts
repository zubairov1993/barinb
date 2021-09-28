import { BuildingDto } from "../common/building.interface";

export const BUILDINGS_DTO_STUB: BuildingDto[] = [
  {
    id: 1,
    person: 1,
    rooms: [1],
    name: 'Отель Иванов',
    city: 'Санкт-Петербург',
    lat: 59.94025370914283,
    lng: 30.35245818826544,
    address: 'Басков пер., 2 стр1, Санкт-Петербург, 191014',
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 2,
    person: 2,
    rooms: [2, 3],
    name: 'Баринтель',
    city: 'Санкт-Петербург',
    lat: 59.93663944788429,
    lng: 30.35304433662398,
    address: 'ул. Чехова, 3, Санкт-Петербург, 191014',
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 3,
    person: 3,
    rooms: [4, 5, 6],
    name: 'Парадный',
    city: 'Санкт-Петербург',
    lat: 59.94205216106154,
    lng: 30.36729639990369,
    address: 'Парадная ул., 3 к 2, Санкт-Петербург, 191015',
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
  {
    id: 4,
    person: 3,
    rooms: [7, 8],
    name: 'Биссектриса',
    city: 'Санкт-Петербург',
    lat: 59.936517402783004,
    lng: 30.360502046156643,
    address: 'ул. Восстания, 23, Санкт-Петербург, Ленинградская обл., 191014',
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
  },
];
