import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { OwnersModule } from '../owners/owners.module';

@Module({
  imports: [OwnersModule],
  providers: [CatsService, CatsResolver],
})
export class CatsModule {}
