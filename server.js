// importation express
const express = require("express");

// importation connect
const connect = require("./config/connectDB.JS");

// create instance
const app = express();

//middleware (test des requests)
app.use(express.json());

//require dotenv
require("dotenv").config();

//connecting to DB (we add connect() function to connect to DB after creating connectDB.js)
connect();

//create PORT
const PORT = process.env.PORT;
//require routes
app.use("/api/product", require("./Routes/productRoute"));
app.use("/api/user", require("./Routes/userRoute"));
app.use("/api/cart", require("./Routes/cartRoute"));
app.use("/api/order", require("./Routes/orderRoute"));

//run server
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server is running on PORT ${PORT}`);
});
