import path from 'node:path'
import { Router} from "express";
import multer from 'multer'

import { createCategory } from "./app/models/useCases/categories/createCategory";
import { listCategories } from "./app/models/useCases/categories/listCategories";
import { createProducts } from "./app/models/useCases/categories/products/createProducts";
import { listProducts } from "./app/models/useCases/categories/products/listProducts";
import { listProductsByCategory } from './app/models/useCases/categories/listProductsByCategory';
import { listOrder } from './app/models/useCases/categories/order/listOrders';
import { createOrder } from './app/models/useCases/categories/order/createOrders';
import { changeOrderStatus } from './app/models/useCases/categories/order/changeOrderStatus';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename(req, file, callbak){
            callbak(null, `${Date.now()}-${file.originalname}`)
        },
    })
})

//list categories
router.get('/categories', (listCategories))

//create category
router.post('/categories', (createCategory))


//List products
router.get('/products', listProducts)



//Create product
router.post('/products', upload.single('image'), createProducts)


//Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory)

//List orders
router.get('/orders', listOrder)



//Create order
router.post('/orders', createOrder)


//Change order status
router.patch('/oders/:orderId', changeOrderStatus)


//Delete / cancel order
router.delete('/oders/:orderId', (req, res) => {
    res.send('OK')

})

