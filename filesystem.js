let fs=require('fs');//we use fs to take module frm node js to access files
let data=fs.readFileSync('abcd.txt');//to read the existing file that is present
console.log(data.toString());
let wdata='this is a demo';
fs.writeFileSync('write.txt',wdata);//to write data  in new file
fs.appendFileSync('write.txt','this is me');// to add text
fs.unlinkSync('write.txt');//delete file
// //fs.mkdirSync('other');//make folder in current directory
// console.log(fs.existsSync('abcd.txt'));//to see if abcd file exist or not