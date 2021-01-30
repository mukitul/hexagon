var fs = require('fs');

let rawdata = fs.readFileSync('folder_str.json');
let str = JSON.parse(rawdata);
console.log(str.com_name);

let visited = [];

function dfs(folderName){
    visited.push(folderName);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}
fs.mkdirSync(str.com_name);