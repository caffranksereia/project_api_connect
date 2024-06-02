import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './entities/pedido.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: ' 162.214.98.95',
    port:3306 ,
    username: 'connectz_beto',
    password: 'Bt@25061983',
    database: 'connectz_teste',
    entities: [PedidoEntity],
    synchronize: true,
  }), TypeOrmModule.forRoot({
    type:  "postgres",
    host:"localhost",
    port: ,
    username:"postgres",
    password:"2506",
    database:"",
    synchronize: true,
    entities:[PedidoEntity]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
