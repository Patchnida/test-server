const express = require('express');
const { createUser } = require("../Controller/createUser")

const router = express.Router()

router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});

router.get("/createUsers", createUser);

module.exports = router;