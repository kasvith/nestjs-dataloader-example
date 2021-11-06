export interface IOwner {
  id: number;
  name: string;
}

export interface ICat {
  id: number;
  name: string;
  likes?: string;
  ownerId: number;
}

export const owners: IOwner[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Jhon' },
];

export const cats: ICat[] = [
  { id: 1, name: 'Kitty', ownerId: 1 },
  { id: 2, name: 'Leo', ownerId: 2 },
  { id: 3, name: 'Milo', ownerId: 1 },
  { id: 4, name: 'Garfield', ownerId: 3 },
  { id: 5, name: 'Charlie', ownerId: 1 },
];
