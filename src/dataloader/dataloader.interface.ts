import DataLoader from 'dataloader';
import { IOwner } from '../db';

export interface IDataloaders {
  ownersLoader: DataLoader<number, IOwner>;
}
