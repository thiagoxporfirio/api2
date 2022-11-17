import { Request, Response } from "express";
import { Order } from "../../../Order";

export async function changeOrderStatus(req: Request, res: Response){
    try{
        const { orderId } = req.body
        const { status } = req.body

        if(!['WAITING','IN_PRODUCTION', 'DONE'].includes(status)){
            return res.status(400).json({
                error: 'Status should be one of these: WAITING IN_PRODUCTION DONE'
            })
        }
        
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}