import { Request, Response } from "express";
import { Order } from "../../models/Order";


export async function createOrder(req: Request, res: Response){
    try{
        const { table, products } = req.body
        
        // if(!name){
        //     return res.status(400).json({
        //         error: "Name is required"
                
        //     })
        // }

        // if(!icon){
        //     return res.status(400).json({
        //         error: "icon is required"
                
        //     })
        // }

        const order = await Order.create({ table, products })
        res.json(order)

        res.status(201).json(order)
        
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}