const express = require("express")
const { userModel } = require("../model/user.model")
const ProductRouter = express.Router()

ProductRouter.get("/", async (req, res) => {
    try {
        const user = await userModel.find()
        res.send({ user })
    } catch (error) {
        res.send({"msg":"some error found" , "err":error})
    }
})
ProductRouter.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const user = await userModel(payload)
        await user.save()
        res.send({ err: "user Added Successfully" })
    } catch (error) {
        res.send({"msg":"some error found" , "err":error})
    }
})

ProductRouter.patch("/update/:id", async(req,res) => {
    let id = req.params.id;
    let payload = req.body;
    try{
        await userModel.findByIdAndUpdate({_id:id},payload)
        res.send(`Product with ${id} updated successfully`)

    }catch(err){
        res.send({"msg":"Product updated failed", "err":err})
    }
})
ProductRouter.delete("/delete/:id", async(req,res) => {
    let id = req.params.id;
    try{
        await userModel.findByIdAndDelete({_id:id})
        res.send("Product deleted successfully")

    }catch(err){
        res.send({"msg":"Product deleted failed", "err":err})
    }
})



module.exports = {
    ProductRouter
}