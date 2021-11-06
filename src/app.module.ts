import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    CatsModule,
    OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
