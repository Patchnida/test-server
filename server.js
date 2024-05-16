const mongoose = require('mongoose')
const express = require('express');

const userRouter = require('./Routers/userRouter')
app.use(bodyParser.json());


const mongoURI = "mongodb+srv://patchnida2547:patchnida2547@cluster0.qcin6u0.mongodb.net/"
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
    res.send({
      message: "Hello World",
    });
  });

app.use("/api/user", userRouter);

// Start server
app.listen(port, async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Server is running at " + port);
    } catch (error) {
        console.log("Server fail", error)
    }
    
});
