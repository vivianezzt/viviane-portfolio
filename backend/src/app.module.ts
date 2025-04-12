import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { ContatoModule } from './contato/contato.module';
import { envSchema } from './config/env.validation'; // 👈 importa o schema
import { z } from 'zod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => {
        const parsed = envSchema.safeParse(env);

        if (!parsed.success) {
          console.error('Erro de validação nas variáveis de ambiente:', parsed.error.format());
          throw new Error('Configuração inválida do ambiente (.env)');
        }

        return parsed.data; // Retorna as variáveis validadas
      },
    }),
    DbModule,
    ProjetoModule,
    TecnologiaModule,
    ContatoModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
