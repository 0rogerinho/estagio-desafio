import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  user_id: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  img: string;
  @Prop()
  price: number;
  @Prop({ default: 1 })
  stock: number;
  @Prop({ default: true })
  state: boolean;
}

export const ProductsSchema = SchemaFactory.createForClass(Product);
