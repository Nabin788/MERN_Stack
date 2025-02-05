const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const db = await mongoose.connect(process.env.DATABASE);
        if(!db){
            throw new error("Database Connection failed");
        }
        console.log("Database connected sucessfully.");
    } catch (error) {
        console.log("Error", error.message);
    }
}

module.exports = dbConnect;