const fs = require("fs");
const D = require('./new.json')
   
// Read users.json file
const res = fs.readFile("./csvjson.json", function(err, data) {
      
    // Check for errors
    if (err) throw err;
    let datas = {}
    let j=0
   
    // Converting to JSON
    const Data = JSON.parse(data);
    for(let i in Data){
        if(Data[i].State === 'Karnataka'){

        
            datas[i] = Data[i]
            j++
        }
    }
      
    // console.log(datas); // Print users
    fs.writeFile('./new.json', JSON.stringify(datas), (err) => {
        console.log("err");
    })
});

console.log(D)