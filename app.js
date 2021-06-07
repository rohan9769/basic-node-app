const logger = require('./logger')
logger('Hello World')

//path module
const mypath = require('path')
const pathobj = mypath.parse(__filename)
console.log(pathobj)

//os module
const myos = require('os')
const systemUpTime = myos.uptime()
const totalMemory = myos.totalmem()
const freeMemory = myos.freemem()
console.log(systemUpTime)
console.log(`${totalMemory}`)
console.log(`The free memory is ${freeMemory}`)

//filesystem module
const myfs = require('fs')
const files = myfs.readdirSync('./')
console.log(files)


//events module
const EventEmitter = require('events')
const emitter = new EventEmitter()

//Register a listener
emitter.on('Message Logged',function(){
    console.log('Listener called')
})

//Raise an event
emitter.emit('Message is Logged')
