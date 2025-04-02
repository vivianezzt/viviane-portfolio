import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';

@Controller('tecnologias')
export class TecnologiaController {
    @Get()
    async obterTodas(): Promise<Tecnologia[]> {
        return [{
            id: 1,
            nome: 'JavaScript',
            descricao: 'Linguagem de programação para desenvolvimento web.',
            imagem: 'https://example.com/javascript.png',
            destaque: true,
        }];
    }

}
