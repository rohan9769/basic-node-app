console.log(__filename)
console.log(__dirname)

var url = 'http://mylogger.io/log'
const log = (message) =>{
    console.log(message)
}

module.exports = log
