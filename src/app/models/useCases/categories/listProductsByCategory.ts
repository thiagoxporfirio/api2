import { Request, Response } from "express";
import { Products } from "../../Products";



export async function listProductsByCategory(req: Request, res: Response){
   try{
    const { categoryId } = req.params
    const products = await Products.find().where('category').equals(categoryId)

    res.json(products)
    res.status(201).json(products)
    
   }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}