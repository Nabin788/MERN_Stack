const User = require("../models/userModels.js");
const bcrypt = require("bcrypt");

const authController = async (req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password || username === "" || password === "" || email === ""){
        return res.status(400).send("Please Enter required fields.");
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
        res.status(500).send({message: "Failed to register user", Error: error.message});
    }
}

module.exports = authController;