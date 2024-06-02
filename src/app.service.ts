import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PedidoEntity } from './entities/pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedidos } from './dto/pedido.dto';
import { Pedidos2 } from './dto/pedido2.dto';
import { Pedido2Entity } from './entities/pedido2.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepo: Repository<PedidoEntity>,
  private readonly pediroRepo2: Repository<Pedido2Entity> ){
  }
  async savePedido(data: Pedidos): Promise<PedidoEntity> {
    return await this.pedidoRepo.save(data);

  }

  async savePedido2(data:Pedidos2): Promise<Pedido2Entity> {
    const pedido = await this.pediroRepo2.save(data);
    return pedido
  }

}
