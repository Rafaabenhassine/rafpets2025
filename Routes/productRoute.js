const express=require("express")
const { addProduct, getProducts, getById ,deleteProduct, getByIdAndEdit  } = require("../Controllers/productController")

//require router
const router=express.Router()

//add new product
router.post('/add_product',addProduct)

//get all products
router.get('/get_products',getProducts)

//get product by Id
router.get('/get_byId/:_Id',getById)

//delete product
router.delete('/deleteproduct/:_Id',deleteProduct)

//get by Id and edit
router.put('/edit/:_id',getByIdAndEdit)


// Function min
router.get('/min/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const result = exports.min(a, b);
    res.send(`The minimum between ${a} and ${b} is ${result}`);
});

// Function plus
router.get('/plus/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const result = exports.plus(a, b);
    res.send(`${a} + ${b} = ${result}`);
});

// Function addCart
router.post('/add_cart/:id', (req, res) => {
    const id = req.params.id;
    exports.addCart(id);
    res.send(`Product with ID ${id} has been added to cart.`);
});

// Function availableProduct
router.get('/available_product/:id', (req, res) => {
    const id = req.params.id;
    const result = exports.availableProduct(id);
    res.send(`Product with ID ${id} is ${result ? 'available': 'unavailable'}.`);
});

//export
module.exports=router;


