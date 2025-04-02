import { Module } from '@nestjs/common';
import { TecnologiaController } from './tecnologia.controller';
import { TecnologiaProvider } from './tecnologia.provider';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [TecnologiaController],
  providers: [TecnologiaProvider]
})
export class TecnologiaModule {}
