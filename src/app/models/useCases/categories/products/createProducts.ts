import { Request, Response } from "express";
import { Products } from "../../../Products";



export async function createProducts(req: Request, res: Response){
   try{
        const imagePath = req.file?.filename
        const { name, description, price, category, ingredients } = req.body

        await Products.create({
            name,
            description,
            imagePath,
            price: Number(price),
            category,
            ingredients: JSON.parse(ingredients),
        })

   }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}


