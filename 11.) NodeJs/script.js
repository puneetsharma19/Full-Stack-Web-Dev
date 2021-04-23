const lib = require('./lib.js')
console.log(lib)

//writing to a file
const fs = require('fs')
fs.writeFile(__dirname + '/myFile.txt',"some data",function(err){
    if(err) throw err
    console.log("File was written")
})

//reading from a file
fs.readFile(__dirname + '/myFile.txt',function(err,data){
    if(err) throw err
    console.log(data.toString())
})