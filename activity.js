let fs=require('fs');
let path=require('path');//path given by user
let extentions={          //to see files in organised format use objects

"images":['.png','.jpg','.jpeg'],
"audio":['.mp3'],
"documents":['.pdf','.txt','doc'],
"compressed":['.zip','.rar'],
"videos":['.mkv','.mp4']
}
let input=process.argv.slice(2);//take path frm user
console.log(input[0]);
let content=fs.readdirSync(input[0]);//read content frm directory that user given 
for(let i=0;i<content.length;i++)
{
    //console.log(content[i]);
    //extensions whether  it is jpg mp3 etc
    console.log(path.extname(content[i]));
}
//now put these jpg files into extensions obj