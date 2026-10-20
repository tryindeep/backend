// // Q1: Read contents of inputFile
// // write contents of a converted to uppercase to outputFile
// // let the calling function know when its done using a callback. 
// // use error first arguments


const fs = require ("fs");
function readFromWriteToB(inputFile, outputFile , cb ){

}

readFromWriteToB("a.txt" , "b.txt", (err , data) => {
    if(err){
        console.log(err);
        
    }else{
        console.log("Done!!");
    }
})


// // Q2: Read the contents of a file, then wait for n seconds, then write the contents back to the same file after converting to upper case
// // then wait for m seconds and then finish the async function
function readTimer (n,m, path ,cb ){
    fs.readFile(path , "utf-8", (err , data ) => {
        if(err){
            cb("error while reading the file");
        }else{
            setTimeout(()=> {
                fs.writeFile(inputFile, )
            },n)
        }
    })
}


readTimer(1000, 2000, "a.txt" , (err , data) => {
    if(err){
        console.log(err);
        
    }else{
        console.log("Done!!");
        
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
	[{
		path: "./code/package.json",
		contents: "{name: "code-project"}"
	}, {
		path: "./code/index.js",
		contents: "console.log('hi there')"
	}]

*/