const express = require('express'); //express framework to have a higher level of methods
const app = express(); //assign app variable the express class/method
const cors = require("cors");
app.use(cors());
app.use(express.json());

var path = require("path");

app.get("/getPredictedVal", (req,res) => {
	res.send({val: 3, updatedValue: false});
})

app.get('/', function(req, res) {
	res.send("Working server");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log("Listening ma g");
});
