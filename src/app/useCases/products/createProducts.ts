import { Request, Response } from "express";
import { Products } from "../../models/Products";


export async function createProducts(req: Request, res: Response){
   try{
        const imagePath = req.file?.filename
        const { name, description, price, category, ingredients } = req.body

        if(!name){
            return res.status(400).json({
                error: "Name is required"
                
            })
        }

        if(!description){
            return res.status(400).json({
                error: "description is required"
                
            })
        }

        if(!price){
            return res.status(400).json({
                error: "price is required"
                
            })
        }

        if(!category){
            return res.status(400).json({
                error: "category is required"
                
            })
        }

        // if(!ingredients){
        //     return res.status(400).json({
        //         error: "ingredients is required"
                
        //     })
        // }

        const product = await Products.create({
            name,
            description,
            imagePath,
            price: Number(price),
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [],
        })
        res.status(201).json(product)

   }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}


