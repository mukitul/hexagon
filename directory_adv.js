var fs = require('fs');

let rawdata = fs.readFileSync('folder_str.json');
let hierarchy = JSON.parse(rawdata);
//console.log(hierarchy.name);

dfs(hierarchy.name, hierarchy.layer, hierarchy.root);


function dfs(folderName, hierarchy, str) {


    str = str + "/" + folderName;
    if (!fs.existsSync(str)) {
        fs.mkdirSync(str);
        console.log(str);
    }

    for (let index = 0; index < hierarchy.length; index++) {
        dfs(hierarchy[index].name, hierarchy[index].layer, str);
    }

}