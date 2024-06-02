import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PedidoEntity } from './entities/pedido.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  savePedido(@Body() data:PedidoEntity){
    return this.appService.savePedido(data);
  }
  
}
