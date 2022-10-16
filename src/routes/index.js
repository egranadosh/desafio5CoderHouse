import { Router } from "express";

import {Products} from '../components/products.js';

const router = Router();
const products = new Products();


router.get('/', (req, res) => {
  res.render('home')
});

router.get('/products', (req,res) =>{
  res.render('products',{products : products.getAll() })
})

router.post('/api/customers', (req,res) => {
        products.add(req.body)
        res.redirect('/')
})

export { router };
