
import express from 'express'    //imports express
const app = express()            //stores express

//a route handler, / route on GET method
app.get('/', (req, res) => {      //if request reaches / endpoint, res.send hello worrld should execute 
  res.send('Hello World')
})

app.post('/asd', (req, res) => {      //if request reaches / endpoint, res.send hello worrld should execute 
  res.send('Hello World abc')
})
//req, res = request and response object

//port
app.listen(3000)  //makes sure process run infinitely

/*

const fs = require('fs');
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

*/