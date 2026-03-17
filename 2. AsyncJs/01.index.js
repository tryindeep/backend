// const { log } = require("console");
// const fs = require ("fs");


// // function read(err , data){
// //     console.log(data);
// // }

// // fs.readFile("a.txt" , "utf-8", read );  // async function 
// // fs.readFileSync("b.txt" , "utf-8", read); // synchronusly

// // console.log("Done !");


// function timeout() {
//   console.log("Done from Timeout");
// }

// console.log("Hi ");

// setTimeout(timeout, 1000);

// console.log("Welcome to loupe");

// let c;
// for (let i = 0; i <= 10000000000; i++) {
//   c++;
// }

// console.log("Expensive Operation Done");
//check here for visulization : How JS executes asynchronous code - http://latentflip.com/loupe/ 


//  setTimeoutSync

function setTimeoutSync (timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if( currentTime.getTime() - startTime.getTime() > timeout)
            break;
    }
}
setTimeoutSync(1000);
console.log("Hi there");