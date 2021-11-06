import { IDataloaders } from '../dataloader/dataloader.interface';

declare global {
  interface IGraphQLContext {
    loaders: IDataloaders;
  }
}
