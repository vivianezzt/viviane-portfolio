import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { Res } from '@nestjs/common';

@Controller('contato')
export class ContatoController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  redirecionarParaWhatsApp(@Res() res: Response) {
    const numero = this.configService.get<string>('WHATSAPP_NUMBER');
    const mensagem = encodeURIComponent('Viviane Aguiar');
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    res.redirect(url); // 👈 aqui o redirecionamento
  }
}

