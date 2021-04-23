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

//assignment
fs.writeFile(__dirname+'/ass.txt',"cat \ndog \ncat \nrat \nmonkey \ndog \n", function(err){
    if(err) throw err
    console.log("File created")
})



fs.readFile(__dirname + '/ass.txt',function(err,data){
    if(err) throw err

    let str = data.toString()
    str = str.split('\n');
    var countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev),{});
    var arr = countOccurrences(str)
    delete arr['']   
    
    for(let val in arr){
        
        fs.writeFile(__dirname + '/copied.txt', val,function(err){
            if(err) throw err
            console.log("File successfully written")
        })
    }
    
    

})








