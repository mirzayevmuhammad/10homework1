import { Global, Module } from '@nestjs/common';
import { PrismaService } from './database.service';

@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
