import { IsString } from 'class-validator';

export class Pedidos {
  @IsString()
  Bairro:string;
  @IsString()
Categoria:string;
@IsString()
Cliente:string;
@IsString()
Endereco:string;
@IsString()
Item	:string;
@IsString()
Pedido:string;
@IsString()
pedido_Lista	:string;

}
