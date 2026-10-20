
const fs = require ("fs");

// // async function 
fs.readFile("a.txt" , "utf-8", read );
function read(err , data){
    console.log(data);
}
// or 
fs.readFile("a.txt" , "utf-8", (err ,data ) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

// // synchronusly
fs.readFileSync("b.txt" , "utf-8", read); 
console.log("Done !");


// ============================================================

// Q1 . what will be the order of printing the ouput ?
function timeout() {
  console.log("Done from Timeout");
}

console.log("Hi ");

setTimeout(timeout, 1000);

console.log("Welcome to loupe");

let c;
for (let i = 0; i <= 10000000000; i++) {
  c++;
}

console.log("Expensive Operation Done");

//check here for visulization : How JS executes asynchronous code - http://latentflip.com/loupe/ 



//==============================================================================

// So we have created  setTimeoutSynchronusly (setTimeoutSync) 

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