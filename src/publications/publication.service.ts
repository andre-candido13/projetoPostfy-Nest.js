import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationsDTO } from './DTO/publication-dto';


@Injectable()
export class PublicationsService {
    constructor( private readonly prisma: PrismaService) {}
    publication = []



async addPublications(data: CreatePublicationsDTO) {

   

    this.prisma.publication.create({data})
}

}
