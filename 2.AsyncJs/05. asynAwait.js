//( Async await)  is a syntactic sugar 
// under the hood they use promises 

const fs = require("fs/promises")

// fs.readFile("a.txt" , "utf-8")
//     .then( data => fs.writeFile("a.txt" , "utf-8"))
//     .then (() => {
//         console.log("done");
//     })


// feels like cleaner  (async , await ))
async function main (){
    const data = await fs.readFile("a.txt","utf-8");
    await fs.writeFile("b.txt" , data.toUpperCase())
    return data
}

// same under the hood 
function main (){
    return new Promise ((resolve , reject) => {
        fs.readFile("a.txt" , "utf-8")
            .then((data) => {
                fs.writeFile("b.txt" , data.toUpperCase())
                resolve(data);
            })
        })
}


/// under the hood it works like this 
// function main (){
//     return new Promise ((resolve , reject) => {
//         fs.readFile("a.txt" , "utf-8")
//             .then((data) => fs.writeFile("b.txt" , data.toUpperCase()))
//             .then(() => {
//                 console.log("done");
//                 resolve(1 or "__" ); // we have to call resolve here beacause it a promisified version 
                                // and what ever data you give it goes the to the ((data) => {data}) 

//             })
//     })

// }


main()
.then((data) => {
    console.log(data);
})

//-------------------------Diff-------------------------------// 
// Promise Chaining 
fs.readFile("a.txt" , "utf-8")
    .then(data => fs.writeFile("b.txt", data.toUpperCase()))
    .then(() => fs.readFile("c.txt" , "utf-8"))
    .then(data => {
        console.log(data);
    })


// Async Await Chaining 
async function main (){
    const a = await fs.readFile("a.txt" , "utf-8");
    await fs.writeFile("b.txt", data.toUpperCase());
    const b = fs.readFile("c.txt" , "utf-8")
    console.log(b);
}

// Handling Error 

try{

}catch(e){

}