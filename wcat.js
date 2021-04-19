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

//File integrity
for(let i=0; i<filePaths.length; i++){
    
    let isFilePresent = fs.existsSync(filePaths[i]);
    if(isFilePresent == false){
        console.log("filepath",filePaths[i],"does not exist");
        return;
    }
}

//Read multiple files
let totalContent = "";
for(let i=0 ; i<filePaths.length; i++){
    let currContent = fs.readFileSync(filePaths[i]);
    totalContent += currContent+"\r\n";
}

//-s Options 
let isSoption = options.includes("-s")
if(isSoption){
    let contentArr = totalContent.split("\r\n");
    let tempArr = [];

    //Remove Whitespaces
    for(let i=0; i<contentArr.length; i++){
        if(contentArr[i] != ""){
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr;
    totalContent = tempArr.join("\n");
}


let isNoption = options.includes("-n");
if(isNoption == true){
    let contentArr = totalContent.split("\n");
    for(let i=0; i<contentArr.length; i++){
        contentArr[i] = i+1 + ". " + contentArr[i]; 
    }
    totalContent = contentArr.join("\r\n");
}
console.log(totalContent);
