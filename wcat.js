//wcat is a clone of cat command for windows

let fs = require("fs");
let input = process.argv.slice(2);
let options = [];
let filePaths = [];

// Separate filepaths and options
for(let i=0; i<input.length; i++){
    if(input[i] == "-s" ||  input[i] == "-b" || input[i] == "-n"){
        options.push(input[i]);
    }
    else {
        filePaths.push(input[i]);
    }
}
console.log("options",options,"filePaths",filePaths);

for(let i=0; i<filePaths.length; i++){
    
    let isFilePresent = fs.existsSync(filePaths[i]);
    if(isFilePresent == false){
        console.log("filepath",filePaths[i],"does not exist");
        return;
    }
}