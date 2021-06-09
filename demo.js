// const test = () =>{
//     console.log('Hey There !')
// }
// test()


// //Creating a server
// const http = require('http')
// http.createServer((request,response)=>{
//     response.write('Hello from localhost 5050')
//     response.end()
// }).listen(5050)


//Anonymous and Callback Function
// const add = (a,b) =>{
//     return a + b
// }
// console.log(add(10,20))
// const complexEx = (add) =>{
//     console.log(add(20,30))
// }
// complexEx(add)


//Making a module and importing file
// const other = require('./other')
// console.log(other(10,20))


//Making an api with http module
// const http = require('http')
// http.createServer((request,response)=>{
//     const data = [
//         {name:'Anil',age:22},
//         {name:'Rachel',age:22},
//         {name:'Kendra',age:22},
//         {name:'Priya',age:22},
//         {name:'Ajay',age:24}
//     ]
//     response.writeHead(200,{'Content-Type':'application\json'})
//     response.write(JSON.stringify(data))
//     response.end()
// }).listen(5000)


//Making a web page
// const http = require('http')
// const page = `
// <input type="text"/>
// <h1>Hello</h1>
// `
// http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':"text/html"})
//     response.write(page)
//     response.end()
// }).listen(5000)


//Sending email using nodemailer
// const nodeMailer = require('nodemailer')
// const transport = nodeMailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//         user:'nathandrake2197@gmail.com',
//         pass:''
//     }
// })
// const mailOptions={
//     from:'nathandrake2197@gmail.com',
//     to:'rohannayak2073@gmail.com',
//     subject:'test node mail',
//     text:'Hello Test Mail'
// }
// transport.sendMail(mailOptions,(error,info)=>{
//     if(error){
//         console.warn(error)
//     }
//     else{
//         console.warn('email sent !',info.response)
//     }
// })


//Nodemon demonstration
// const http = require('http')
// http.createServer((request,response)=>{
//     response.write('Hello Nodemon ,Hello world')
//     response.end()
// }).listen(5000)


//Reading files
// const http = require('http')
// const fs = require('fs')
// http.createServer((request,response)=>{
//     fs.readFile('demo.html',(error,data)=>{
//         response.writeHead(200,{'Content-Type':'text/html'})
//         response.write(data)
//         return response.end()
//     })
// }).listen(5000)


//event | eventEmitter
// const fs = require('fs')
// const readString = fs.createReadStream('./demo.txt')
// readString.on('open',()=>{
//     console.log('Demo file opened !')
// })

// const events = require('events')
// const eventEmitter = new events.EventEmitter()
// eventEmitter.on('speak',(name)=>{
//     console.log(`${name} is speaking`)
// })
// eventEmitter.emit('speak','Roger')




//------------- Express.js------------//
