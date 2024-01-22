
import { Document, Schema, model, models } from "mongoose";


//Same thing as user.model.ts
export interface ICategory extends Document {
    _id:string;
    name:string;

}


const CategorySchema = new Schema({
    name: {type: String, required: true, unique: true},
})


const Category = models.Category || model('Category', CategorySchema);

export default Category;