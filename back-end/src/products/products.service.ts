/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
//import { ValidationRoles } from './validations/validate.role';
import { DeleteProductDto } from './dto/delete-product.dto';
import { RemoveProduct } from './dto/remove-product.dto';
import { SearchProductDto } from './dto/search-product.dtp';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly projectModel: Model<Product>,
    private readonly uploadService: UploadService,
  ) {}

  async create(
    user_id: string,
    urlImg: string,
    createProductDto: CreateProductDto,
  ) {
    createProductDto.img = urlImg;

    return await this.projectModel.create({ user_id, ...createProductDto });
  }

  async findAll() {
    return await this.projectModel.find();
  }

  async findOne(searchProductDto: SearchProductDto) {
    const product = await this.projectModel.findOne(searchProductDto);

    if (product === null) return { message: 'product not exist' };

    return product;
  }

  async update(user_id: string, updateProductDto: UpdateProductDto) {
    await this.projectModel.findOneAndUpdate(
      { _id: updateProductDto.id, user_id: user_id },
      updateProductDto,
    );

    return { message: 'Update successful' };
  }

  async remove(user_id: string, removeProduct: RemoveProduct) {
    await this.projectModel.findOneAndUpdate(
      { _id: removeProduct.id, user_id: user_id },
      { state: removeProduct.state },
    );
    return { message: 'removed successful' };
  }

  async delete(user_id: string, deleteProductDto: DeleteProductDto) {
    await this.projectModel.findOneAndDelete({
      _id: deleteProductDto.id,
      user_id: user_id,
    });
    return { message: 'deleted successful' };
  }
}
