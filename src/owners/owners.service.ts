import { Injectable } from '@nestjs/common';
import { IOwner, owners } from 'src/db';

@Injectable()
export class OwnersService {
  findOwnerById(id: number): IOwner {
    console.debug(`loading owner ${id}`);
    return owners.find((owner) => owner.id === id);
  }

  findOwnersByBatch(ownerIds: number[]): (IOwner | Error)[] {
    console.debug(`loading ids ${ownerIds}`);
    const results = owners.filter((owner) => ownerIds.includes(owner.id));
    const mappedResults = ownerIds.map(
      (id) =>
        results.find((result) => result.id === id) ||
        new Error(`Could not load owner ${id}`),
    );
    return mappedResults;
  }

  allOwners(): IOwner[] {
    console.debug(`loading all owners`);
    return owners;
  }
}
