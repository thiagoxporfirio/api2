import { Router} from "express";

export const router = Router();

//list categories
router.get('/categories', (req, res) => {
    res.send('OK')
})

//create category
router.post('/categories', (req, res) => {
    res.send('OK')
})


//List products
router.get('/products', (req, res) => {
    res.send('OK')
})



//Create product
router.post('/products', (req, res) => {
    res.send('OK')
})


//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK')
})

//List orders
router.get('/oders', (req, res) => {
    res.send('OK')
})



//Create order
router.post('/oders', (req, res) => {
    res.send('OK')
})


//Change order status
router.patch('/oders/:orderId', (req, res) => {
    res.send('OK')
})


//Delete / cancel order
router.delete('/oders/:orderId', (req, res) => {
    res.send('OK')
})

