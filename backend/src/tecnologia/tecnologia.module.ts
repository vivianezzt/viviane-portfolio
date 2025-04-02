import { Module } from '@nestjs/common';
import { TecnologiaController } from './tecnologia.controller';
import { TecnologiaProvider } from './tecnologia.provider';

@Module({
  controllers: [TecnologiaController],
  providers: [TecnologiaProvider]
})
export class TecnologiaModule {}
