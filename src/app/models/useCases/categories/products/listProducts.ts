import { Request, Response } from "express";
import { Products } from "../../../Products";



export async function listProducts(req: Request, res: Response){
   try{
    const products = await Products.find()

    res.json(products)
    res.status(201).json(products)
    
   }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}