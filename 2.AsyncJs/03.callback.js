const fs = require("fs");


// Synchronus read file 
// const data = fs.readFileSync("a.txt" , "utf-8");
// console.log(data);

// const data2 = fs.readFileSync("b.txt" , "utf-8");
// console.log(data2);

// const data3 = fs.readFileSync("c.txt" , "utf-8");
// console.log(data3);

// Event loop 
//check here for visulization : How JS executes asynchronous code - http://latentflip.com/loupe/ 


//============Asynchronus============

// Error-first Callbacks 
fs.readFile("a.txt", "utf-8", (err , data) => {
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})

// Q1: Read contents of inputFile
// write contents of a converted to uppercase to outputFile
// let the calling function know when its done using a callback. 
// use error first arguments

function readFromAWriteToB(inputFile , outputFile, cb){
    fs.readFile(inputFile,"utf-8" ,(err ,data) => {
        if(err){
            cb("Error while reading the file")
        }else{
            fs.writeFile(outputFile , data.toUpperCase() , (err) => {
                if(err){
                    cb("Error while writing the file");
                }else{
                    cb(null , "");
                }
            })
        }
    })
}

readFromAWriteToB("a.txt","b.txt", (err , data) => {
    if(err) {
        console.log(err);
    }else{
        console.log("done!!");
    }
});



// Q2: Read the contents of a file, then wait for n seconds, 
// then write the contents back to the same file after converting to upper case
// then wait for m seconds and then finish the async function

function readTimer(n,m, path, cb){
    fs.readFile(path , "utf-8", (err , data) => {
        if(err){
            cb("Error while reading the file")
        }else{
            setTimeout( () => {
                fs.writeFile(path , data.toUpperCase() , (err , data) => {
                    if(err){
                        cb("Error While writing the file");
                    }else{
                       setTimeout(() => {
                            cb(null,"")
                       },m)
                    }
                })
            },n)
        }
    })
}

readTimer(1000, 2000, "a.txt", (err ,data) => {
    if(err) {
        console.log(err);
    }else{
        console.log("done!!");
    }
})





/*
	Q3: given a input file (a.txt) which has a bunch of paths and contents of files, 
	    write a function createCode(filePath) that reads the file and 
		creates new files/folders and puts the respective contents in them
		based on the input file. 
		One all files have been written to, the callback should be called
*/

/*
	Sample a.txt - 
	[   
        {
            "path": "./code/package.json",
            "contents": "{name: 'code-project'}"
        }, {
            "path": "./code/index.js",
            "contents": "console.log('hi there')"
        }
    ]

*/

function createCode(filepath , cb){
    fs.readFile(filepath , "utf-8", (err , data) => {
        const parsedData = JSON.parse(data);
        const arrLength = parsedData.length;
        let counter = 0;
        parsedData.forEach(({path , contents}) => {
            fs.writeFile(path, contents , (err , data) => {
                counter++;
                if(counter == arrLength){
                    cb();
                }
            })
        });
    })
}
 
createCode("a.txt" , (err , data) => {
   console.log("all data has been parsed!");
   
});

// delete file in code folder and try 









// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("heloow");
//     setTimeout(function f() {
//       console.log("hellow there");
//     }, 5000);
//   }, 3000);
// }, 1000);


// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();
