import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Req,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { Request } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { DeleteProductDto } from './dto/delete-product.dto';
import { RemoveProduct } from './dto/remove-product.dto';
import { SearchProductDto } from './dto/search-product.dtp';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private uploadService: UploadService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
    @Body() createProductDto: CreateProductDto,
  ) {
    const user_id = req['User']._id;

    const img = await this.uploadService.create(file);

    const urlImg = await this.uploadService.findImg(img);

    return this.productsService.create(user_id, urlImg, createProductDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Public()
  @Get('/search')
  findOne(@Body() searchProductDto: SearchProductDto) {
    return this.productsService.findOne(searchProductDto);
  }

  @Patch()
  update(@Body() updateProductDto: UpdateProductDto, @Req() req: Request) {
    const user_id = req['User']._id;

    return this.productsService.update(user_id, updateProductDto);
  }

  @Patch('/removeproject')
  remove(@Body() removeProduct: RemoveProduct, @Req() req: Request) {
    const user_id = req['User']._id;
    return this.productsService.remove(user_id, removeProduct);
  }

  @Delete()
  delete(@Body() deleteProductDto: DeleteProductDto, @Req() req: Request) {
    const user_id = req['User']._id;
    return this.productsService.delete(user_id, deleteProductDto);
  }
}
