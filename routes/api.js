const express = require("express");
const { Error } = require("mongoose");
const User = require("../models/User");

const router = express.Router();

router.post("/message", (req, res) => {
  try {
    User.create(req.body).then((user)=>{
        res.send(user)
    }).catch((err)=>{
        console.log(err)
    })
  } catch {
   throw new Error('error creating ninja')
  }
});


module.exports = router;
