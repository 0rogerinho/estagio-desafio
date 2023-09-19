import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Financial {
  @Prop()
  _id: string;

  @Prop({ default: 0 })
  shopping: number;

  @Prop({ default: 0 })
  sales: number;
}

export const FinancialSchema = SchemaFactory.createForClass(Financial);
