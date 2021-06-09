import { Schema, model, Document } from 'mongoose';

const { String } = Schema.Types;

export interface BannerDocument extends Document {
  name: String;
  imageURL: String;
  description: String;
}

const BannerSchema = new Schema(
  {
    name: String,
    imageURL: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export const Banner = model<BannerDocument>('Banner', BannerSchema);
