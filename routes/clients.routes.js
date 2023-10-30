const Router = require("express");
const router = new Router();
const Client = require("../models/Client.js");
const mongoose = require("mongoose");

router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.find();

    return res.status(200)
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Headers", "Content-Type")
        .json(clients);
  } catch (e) {
    res.send({ message: "Server error" });
  }
});

router.put("/clients/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const id = req.params.id;
    console.log(id);
    console.log(req.params.id);
    console.log(req.body);
    if (!mongoose?.Types?.ObjectId?.isValid(id)) {
      console.log("given object id is not valid");
      return res.status(400).json({
        message: "given object id is not valid",
      });
    } else {
      const client = await Client.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          username: req.body.username,
        },
        { new: true }
      );
      if (!client) {
        return res
          .status(404)
          .json({ message: "Client with this id doesn't exist" });
      }
      console.log(client);
      return res
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Headers", "Content-Type")
        .json({
          client: client,
          message: "Client was updated",
          success: true,
        });
    }
  } catch (e) {
    res.send({ message: "Server error" });
  }
});

module.exports = router;
