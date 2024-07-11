import mongoose from "mongoose";

const furnitureSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String,
    where:String
})

const Furniture = mongoose.model("Furniture",furnitureSchema);

export default Furniture;