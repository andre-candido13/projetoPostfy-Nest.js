import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PublicationsController } from './publications/publications.controller';
import { PublicationsModule } from './publications/publication.module';
import { PublicationsService } from './publications/publication.service';



@Module({
  imports: [UsersModule, PrismaModule, AuthModule, PublicationsModule],
  controllers: [PublicationsController],
  providers: [PublicationsService],
})
export class AppModule {}
