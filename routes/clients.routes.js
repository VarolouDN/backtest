const Router=require('express');
const router=new Router();
const Client=require('../models/Client.js')


router.get("/clients", async (req, res) => {
    try {
        const clients=await Client.find()
        console.log(clients)
        return res.status(200).json(clients)
    } catch (e) {
        res.send({ message: "Server error" });
    }
});

module.exports=router