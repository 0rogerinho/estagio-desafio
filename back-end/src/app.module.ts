import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { FinancialModule } from './financial/financial.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.URL),
    UserModule,
    AuthModule,
    ProductsModule,
    FinancialModule,
    UploadModule,
  ],
})
export class AppModule {}
