// ===================================Promises==========================================

let p = new Promise ((resolve , reject) => {
    let a = 1+2;
    if(a == 2){
        resolve("Success");
    }else{
        reject("Failed");
    }
})

p.then((massage) => {
    console.log("This is in the then " + massage); // This is resolve function
}).catch((massage) => {
    console.log("This is in the catch " + massage); // This is Reject function 
})

// --------------Callback and why promises are better than callbacks -----------

// USING_CALLBACK
let userLeft = false; // change to check the outputs 
let userWatchingCatMeme  = false; // change to check the outputs 

function userWatchingCallbackTutorial (callback, errorCallback) {
    if(userLeft){
        errorCallback({
            why : " userLeft",
            massage :  ":)"
        })
    }else if (userWatchingCatMeme){
        errorCallback({
            why : " User watching cat meme",
            massage :  ":)"
        })
    }else{
        callback("Learned callbacks")
    }
}

userWatchingCallbackTutorial((massage) => {
    console.log("Success : " + massage);
}, (error) => {
    console.log(error.why+ " " + error.massage);

});

// why promises are better than callbacks  version with same example?


let userLeft1 = true;
let userWatchingCatMeme1  = false;
function userWatchingCallbackPromise () {
    return new Promise ((resolve , reject) => {
         if(userLeft1){
        reject({
            why : " userLeft",
            massage :  ":)"
        })
    }else if (userWatchingCatMeme1){
        reject({
            why : " User watching cat meme",
            massage :  ":)"
        })
    }else{
        resolve("Learned callbacks")
    }
    })

}

userWatchingCallbackPromise()
    .then((massage) => {
        console.log("Success : " + massage);
    })
    .catch((error) => {
        console.log(error.why+ " " + error.massage);
    });

// =======================Promises Method!========================

const videoRecordOne = new Promise ((resolve , reject) => {
    resolve("video 1 recorded")
});
const videoRecordTwo = new Promise ((resolve , reject) => {
    resolve("video 2 recorded")
});
const videoRecordThree = new Promise ((resolve , reject) => {
    resolve("video 3 recorded")
});

// use this once 
Promise.all([
    videoRecordOne,
    videoRecordTwo,
    videoRecordThree]).then((massage) => {
        console.log(massage);
    })
// use this once 
// who complete first that will print
Promise.race([
    videoRecordOne,
    videoRecordTwo,
    videoRecordThree]).then((massage) => {
        console.log(massage);
    })

// ===========================Promises by Harkirat=============================

// promisified readfile Fucntion 
const fs = require("fs/promises")
fs.readFile("a.txt" , "utf-8");

// what returns 

fs.readFile("a.txt" , "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err); 
    })


// [Callback hell], or the "pyramid of doom," is a JavaScript programming issue caused
//by excessively nesting multiple asynchronous callbacks, making code unreadable, hard to maintain, and difficult to debug.

// callback hell 
fs.readFile("a.txt", "utf-8", (err, a) => {
    if (err) return console.log(err);

    fs.writeFile("b.txt", a.toUpperCase(), (err) => {
        if (err) return console.log(err);

        fs.readFile("b.txt", "utf-8", (err, b) => {
            if (err) return console.log(err);

            console.log(b);
        });
    });
});

// Question : write logic to read a file  (a.txt), and then write its content to b.txt


fs.readFile("a.txt" , "utf-8")
    .then(data => {
        fs.writeFile("b.txt", data.toUpperCase())
            .then(() => {
                console.log("done");
                fs.readFile("c.txt" , "utf-8")
                    .then(data => {
                        console.log(data);
                    })
            })
    })

// but it look like callbackhell right ?
//So , 
fs.readFile("a.txt" , "utf-8")
    .then(data => {
        return fs.writeFile("b.txt", data.toUpperCase())
    })
    .then(() => {
        console.log("done");
        return fs.readFile("c.txt" , "utf-8")
    })
    .then(data => {
        console.log(data);
    })

// IF YOU DON'T WANT TO WRITE (return & {}) then , do this 

fs.readFile("a.txt" , "utf-8")
    .then(data => fs.writeFile("b.txt", data.toUpperCase()))
    .then(() => fs.readFile("c.txt" , "utf-8"))
    .then(data => {
        console.log(data);
    })

// right now we get rid of callback hell 

//===================write a promisified version of fs.readFile  by own =======================

const fs = require("fs");

function readFilePromisified(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromisified("a.txt")
    .then((data) => {
        console.log("text : " + data);
    })
    .catch((err) => {
        console.log("Error : " +err);
    })

//===================write a promisified version of setTimeout by own =======================

function setTimeoutPromisified(duration){
    return new Promise((resolve , reject) => {
        setTimeout(()=> {
            resolve();
        },duration)
    })
}
// or
function setTimeoutPromisified(duration){
    return new Promise((resolve , reject) => {
        setTimeout(resolve,duration)
    })
}

setTimeoutPromisified(5000)
    then(() => {
        console.log("hi there");
        
    })
    .catch(() => {
        console.log("error");
        
    })


// Predict the output 
console.log("1");

setTimeout(() => console.log("2") ,0)

Promise.resolve().then(() => console.log("3")) // immediate resolves

console.log("4");

// 1 , 4 , 3 , 2 

// 4 first beacause promise has high priority


// // -------------------Create you own promise class --------------------------------

// // class TryInDeepPromise (resolve , reject){
// //     function resolve(resolve){

// //     }
// //     function reject(resolve){

// //     }
// // }




