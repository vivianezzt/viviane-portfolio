import { Module } from '@nestjs/common';
import { TecnologiaController } from './tecnologia.controller';
import { TecnologiaPrisma } from './tecnologia.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [TecnologiaController],
  providers: [TecnologiaPrisma]
})
export class TecnologiaModule { }
