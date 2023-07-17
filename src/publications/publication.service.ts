import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationsDTO } from './DTO/publication-dto';


@Injectable()
export class PublicationsService {
    constructor( private readonly prisma: PrismaService) {}
    publication = []


async addPublications(data: CreatePublicationsDTO) {

   await this.prisma.publication.create({
    data: {
      image: data.image,
      title: data.title,
      text: data.text,
      dateToPublish: data.dateToPublish,
      published: data.published || false,
      socialMedia: data.socialMedia,
      user: { connect: { id: data.user_id } }
      
    },
  });
}

async getPublications(userId: number) {
  return this.prisma.publication.findMany({
    where: {
      user: { id: userId }, 
    },
  });
}
}