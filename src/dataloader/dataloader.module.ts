import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { OwnersModule } from '../owners/owners.module';

@Module({
  providers: [DataloaderService],
  imports: [OwnersModule],
  exports: [DataloaderService],
})
export class DataloaderModule {}
