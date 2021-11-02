import { Injectable } from '@nestjs/common';
import { IOwner, owners } from 'src/db';

@Injectable()
export class OwnersService {
  findOwnerById(id: number): IOwner {
    console.debug(`loading owner ${id}`);
    return owners.find((owner) => owner.id === id);
  }

  allOwners(): IOwner[] {
    console.debug(`loading all owners`);
    return owners;
  }
}
