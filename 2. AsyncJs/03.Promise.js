// ==========Promises========== 

// let p = new Promise ((resolve , reject) => {
//     let a = 1+2;
//     if(a == 2){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// })  

// p.then((massage) => {
//     console.log("This is in the then " + massage);
// }).catch((massage) => {
//     console.log("This is in the catch " + massage);
// })

// --------------Callback and why promises are better than callbacks -----------

//USING_CALLBACK
// let userLeft = false;
// let userWatchingCatMeme  = true;

// function userWatchingCallbackTutorial (callback, errorCallback) {
//     if(userLeft){
//         errorCallback({
//             why : " userLeft",
//             massage :  ":)"
//         })
//     }else if (userWatchingCatMeme){
//         errorCallback({
//             why : " User watching cat meme",
//             massage :  "cat > tryIndeep"
//         })
//     }else{
//         callback("Learned callbacks")
//     }
// }

// userWatchingCallbackTutorial((massage) => {
//     console.log("Success : " + massage);
// }, (error) => {
//     console.log(error.why+ " " + error.massage);
    
// });

// why promises are better than callbacks  version with same example?
// [Callback hell], or the "pyramid of doom," is a JavaScript programming issue caused 
//by excessively nesting multiple asynchronous callbacks, making code unreadable, hard to maintain, and difficult to debug.

// let userLeft1 = true;
// let userWatchingCatMeme1  = false;
// function userWatchingCallbackPromise () {
//     return new Promise ((resolve , reject) => {
//          if(userLeft1){
//         reject({
//             why : " userLeft",
//             massage :  ":)"
//         })
//     }else if (userWatchingCatMeme1){
//         reject({
//             why : " User watching cat meme",
//             massage :  "cat > tryIndeep"
//         })
//     }else{
//         resolve("Learned callbacks")
//     }
//     })
   
// }

// userWatchingCallbackPromise().then((massage) => {
//     console.log("Success : " + massage);
// }).catch((error) => {
//     console.log(error.why+ " " + error.massage);
// });

// Promises Method!

const videoRecordOne = new Promise ((resolve , reject) => {
    resolve("video 1 recorded")
});
const videoRecordTwo = new Promise ((resolve , reject) => {
    resolve("video 2 recorded")
});
const videoRecordThree = new Promise ((resolve , reject) => {
    resolve("video 3 recorded")
});

// Promise.all([
//     videoRecordOne, 
//     videoRecordTwo, 
//     videoRecordThree]).then((massage) => {
//         console.log(massage);
//     })
// who complete first that will print
// Promise.race([
//     videoRecordOne, 
//     videoRecordTwo, 
//     videoRecordThree]).then((massage) => {
//         console.log(massage);
//     })

// Promises by Harkirat 

function callback(){
    console.log("completed after 3 sec");
    
}
setTimeoutPromisified
function setTimeoutPromisified (ms) {
    return new Promise ((resolve) => setTimeout(resolve , ms))
}

console.log(setTimeoutPromisified(3000).then(callback));

// setTimeout call back 

function logging(){
 console.log("Done!");
 
}
function waitfor5Sec(ms){
    setTimeout(logging ,ms)
}

waitfor5Sec(5000);





