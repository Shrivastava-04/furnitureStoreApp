import Furniture from "../model/furniture.model.js";

export const getFurniture = async(req,res)=>{
    try {
        const furniture =await Furniture.find()
        res.status(200).json(furniture)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}
