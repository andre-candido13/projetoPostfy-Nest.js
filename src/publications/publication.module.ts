import { Module } from '@nestjs/common';
import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publication.service';


@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService],
})
export class PublicationsModule {}