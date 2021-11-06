import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { DataloaderModule } from './dataloader/dataloader.module';
import { DataloaderService } from './dataloader/dataloader.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [DataloaderModule],
      inject: [DataloaderService],
      useFactory: (dataloaderService: DataloaderService) => {
        return {
          autoSchemaFile: true,
          context: () => ({
            loaders: dataloaderService.createLoaders(),
          }),
        };
      },
    }),
    CatsModule,
    OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
