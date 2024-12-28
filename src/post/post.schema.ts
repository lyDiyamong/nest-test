import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Posts extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({
    enum: { values: ["Good", "Bad"], message: "Tag is either Good or Bad" },
  })
  tag: string;
}

export const PostSchema = SchemaFactory.createForClass(Posts);
