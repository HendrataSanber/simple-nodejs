/**
 * src/models/products.models.ts
 */
import mongoose, { Types } from "mongoose";

export interface Product {
  categoryId: Types.ObjectId;
  qty: number;
}

const Schema = mongoose.Schema;

const ProductsSchema = new Schema<Product>(
  {
    qty: {
      type: Schema.Types.Number,
      required: true,
      min:[1,"Minimal qty adalah 1"],
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"Category",
    }
  },
);

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;
