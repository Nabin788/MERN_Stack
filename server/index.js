require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/dbConnection.js");
const userRoutes = require("./routes/userRoute.js");
const app = express();

const port = process.env.PORT || 3000;

app.use("/", userRoutes);

dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`Server is running from http://localhost:${port}`);
    })
});