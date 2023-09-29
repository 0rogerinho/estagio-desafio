import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsSchema } from './entities/product.entity';
import { UserModule } from 'src/user/user.module';
import { ProductsController } from './products.controller';

//import { ValidationRoles } from './validations/validate.role';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductsSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
