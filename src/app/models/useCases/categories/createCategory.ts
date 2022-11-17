import { Request, Response } from "express";
import { Category } from "../../Category";



export async function createCategory(req: Request, res: Response){
    try{
        const { icon, name } = req.body
        
        if(!name){
            return res.status(400).json({
                error: "Name is required"
                
            })
        }

        if(!icon){
            return res.status(400).json({
                error: "icon is required"
                
            })
        }

        const category = await Category.create({ icon, name })
        res.json(category)

        res.status(201).json(category)
        
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}