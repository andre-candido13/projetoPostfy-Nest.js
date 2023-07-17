import { Controller, Post, Get, Body } from '@nestjs/common';
import { PublicationsService } from './publication.service';
import { CreatePublicationsDTO } from './DTO/publication-dto';

@Controller('publication')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}


  @Post()
  addUser(@Body() body: CreatePublicationsDTO) {
    
    return this.publicationsService.addPublications(body);
  }

  @Get()
  getPublications() {
    return this.publicationsService.();
  }
}