import { Injectable } from '@nestjs/common';
import {Id} from "@core"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Legal!' + Id.gerar();
  }
}
