// Async Way

const fs = require("fs");
const path = require("path");



let fileName = "read.md";
let pathName = path.join(__dirname,fileName);

// CRUD Opration on read.md file



// Create
fs.writeFile(pathName, "# Hello I am initial Data", "utf-8", () => {
    console.log("File Has Been Created");
    
});


// Read
// console.log(fs.readFile(pathName, "utf-8"));


// Update
// fs.appendFile(fileName, "\n # Hello I am Updated Data", "utf-8")
// console.log("File Has Been Updated");


// Delete
// fs.unlink(fileName)
// console.log("File Has Been Deleted");





// rename file read.mc into read.txt
// let newPathName = path.join(__dirname, "read.txt")
// fs.rename(pathName, newPathName)