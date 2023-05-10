const express = require("express");
const { connection } = require("./Utils/db");
const { ProductRouter } = require("./Routes/user.Route");
require("dotenv").config();
const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("welcome")
})

app.use("/user", ProductRouter)


app.listen(process.env.port, async() => {
    try {
        await connection
        console.log('Connected To Database')

    } catch (error) {
        console.log("connection Failed")
    }
    console.log(`server is running on port ${process.env.port}`)
})