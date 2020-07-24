import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
});

router.post("/", /*isAdmin, isAuth,*/ async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    })

    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({ message: ' New Product Created', data: newProduct })
    }

    return res.status(500).send({ message: 'Error in creating Product.' })

});

router.put("/:id", /*isAdmin, isAuth,*/ async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });

    if (product) {
        product.name = req.body.name;
        product.image = req.body.image;
        product.price = req.body.price;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;

        const updatedProduct = await product.save();
        if (updatedProduct) {
            return res.status(200).send({ message: 'Product Updated', data: updatedProduct })
        }
    }
    return res.status(500).send({ message: 'Error in updating Product.' })

});

router.delete("/:id", /*isAdmin, isAuth,*/ async (req, res) => { //!!NEED TO BE FIXED, UNDEFINED OBJ COMING FROM FRONTEND
    const deletedProduct = await Product.findById(req.params.id);

    if (deletedProduct) {
        await deletedProduct.remove()
        res.send({ message: "Product Deleted" })
    } else {
        res.send("Error in Deletion.")
    }

});

export default router;