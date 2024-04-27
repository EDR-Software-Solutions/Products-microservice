import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './ProductsController';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
