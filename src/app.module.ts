import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PublicationsController } from './publications/publications.controller';
import { PublicationsService } from './publications/publications.service';
import { PublicationsModule } from './publications/publications.module';


@Module({
  imports: [UsersModule, PrismaModule, AuthModule, PublicationsModule],
  controllers: [PublicationsController],
  providers: [PublicationsService],
})
export class AppModule {}
