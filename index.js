const express = require('express')
const mongoose = require("mongoose")
const Product = require('./models/product.model')
const productRoute = require("./routes/product.route")
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))



//routes
app.use("/api/products",productRoute);


app.get('/',function(req,res){
    res.send("hello from node api")
});

//make sure to change password
mongoose.connect("mongodb+srv://dbAmmar:<password>@backenddb.u1zec.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("connected to database!")
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    });
})
.catch(()=>{
    console.log("connection is failed")
})



// following code will make my index.js messay
// that's way it is not used
// get all products
// app.get('/api/product/:id',async (req,res)=>{
//     try
//     {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message})
//     }
// })

//find a product
// app.get('/api/products',async(req,res)=>{
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message})
//     }
// })

//save a product
// app.post('/api/products',async (req,res)=>{
//     // console.log(req.body);
//     // res.send(req.body);
//     try{
//         const product = await Product.create(req.body)
//         res.status(200).json(product);
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message});
//         console.log(errpr)
//     }
// })

// update a product
// app.put("/api/product/:id",async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);
//         if(!product)
//         {
//             return res.status(404).json({message:"Product not found"})
//         }
//         const updatedProduct = await Product.findById(id);
       
//             res.status(200).json(updatedProduct);
//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message})
//     }
// })


//delete a product
// app.delete('/api/product/:id',async(req,res)=>{
//     try
//     {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product)
//         {
//                 return res.status(404).json({message:"Product not found"})
//         }
        
//         res.status(200).json({message:"Product deleted successfully"})

//     }
//     catch(error)
//     {
//         res.status(500).json({message:error.message});
//     }
// })

