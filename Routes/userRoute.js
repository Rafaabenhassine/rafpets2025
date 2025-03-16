const express =require("express");
const { register, upuser, deleteuser, getall } = require("../Controllers/userController");

const auth = require("../Middleware/auth");

//require router
const router=express.Router()

//get user
router.get("/getusers",getall);


router.post("/register",register);

//update user
router.put("/edit/:_id",upuser);

//delete user
router.delete("/delete/:_id",deleteuser);



//export
module.exports = router;
