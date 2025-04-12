import { Module } from '@nestjs/common';
import { ContatoController } from './contato.controller';

@Module({
  controllers: [ContatoController],
})
export class ContatoModule {}
