const express = require('express'); //express framework to have a higher level of methods
const app = express(); //assign app variable the express class/method
const cors = require("cors");
app.use(cors());
app.use(express.json());

var path = require("path");
const papa = require("papaparse")
const request = require("request");
const fs = require('fs');
const MLR = require("ml-regression-multivariate-linear");

const options = {/* options */};
// console.log(data);
console.log(options)
	const dataStream = fs.createReadStream("./myfile1.csv");
	const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

	dataStream.pipe(parseStream);

	let data = [];
	let X = [];
	let Y = [];
	parseStream.on("data", chunk => {
	    data.push(chunk);
	});

	let mlr;
	parseStream.on("finish", () => {
	    // console.log(data);
	    console.log(data.length);
	    for(let i = 1; i<data.length; i++) {
	    	X.push([parseInt(data[i][0]), parseInt(data[i][1])]);
	    	Y.push([parseInt(data[i][2])]);
	    }
	    console.log(X);
	    mlr = new MLR(X, Y);
		console.log(Math.round(mlr.predict([7, 4])));
	});

let p1 = -1, p2 = -1;

app.post("/sendValues", (req,res) => {
	const data = req.body;
	// {
	// 	FamilyMembers: ,
	// 	Guest: ,
	// 	PumpId: ,
	// }
	console.log(req.body);
	res.send(req.body);
});

app.get("/getPredictedVal", (req,res) => {
	res.json({val: "100", updatedValue: "200"});
})

app.get('/', function(req, res) {
	res.send("Working server");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log("Listening ma g");
});
