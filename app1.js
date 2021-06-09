//Express

//Simple Express Hello World Program
const express = require('express')
const app = express()
app.get('/',(request,response)=>{
    response.send('Hello Express')
}).listen(5000)