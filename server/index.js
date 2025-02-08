require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/dbConnection.js");
const userRoutes = require("./routes/userRoute.js");
const userAuth = require("./routes/userAuth.js");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", userRoutes);
app.use("/users", userAuth);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        "success": false,
        statusCode,
        message
    });
});

dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`Server is running from http://localhost:${port}`);
    })
});