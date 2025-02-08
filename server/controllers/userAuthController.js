const User = require("../models/userModels.js");
const bcrypt = require("bcrypt");
const authError = require("../middleware/userError");

const authController = async (req,res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === "" || password === "" || email === ""){
        next(authError(400, "Please Enter required fields!"));
    }
    try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });
         await newUser.save();
         res.status(201).send("User created sucessfully.");
    } catch (error) {
        next(error);
    }
}

module.exports = authController;