import { Injectable } from '@nestjs/common';
import { OwnersService } from '../owners/owners.service';
import { IDataloaders } from './dataloader.interface';
import DataLoader from 'dataloader';
import { IOwner } from '../db';

@Injectable()
export class DataloaderService {
  constructor(private readonly ownerService: OwnersService) {}

  createLoaders(): IDataloaders {
    const ownersLoader = new DataLoader<number, IOwner>(
      async (keys: readonly number[]) =>
        this.ownerService.findOwnersByBatch(keys as number[]),
    );

    return {
      ownersLoader,
    };
  }
}
