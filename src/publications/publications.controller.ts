import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PublicationsService } from './publication.service';
import { CreatePublicationsDTO } from './DTO/publication-dto';

@Controller('publication')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}


  
  @Post()
  addUser(@Body() body: CreatePublicationsDTO) {
    
    return this.publicationsService.addPublications(body);
  }

  @Get('user/:id')
  getPublications(@Param('id', ParseIntPipe) user_id: number) {
    
    return this.publicationsService.getPublications(user_id);
  }
}