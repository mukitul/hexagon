var fs = require('fs');

let rawdata = fs.readFileSync('folder_str.json');
let hierarchy = JSON.parse(rawdata);

if (!fs.existsSync(hierarchy.root)) {
    fs.mkdirSync(hierarchy.root);
}

hexgon(hierarchy.name, hierarchy.layer, hierarchy.root);

function hexgon(folderName, hierarchy, str) {

    str = str + "/" + folderName;
    if (!fs.existsSync(str)) {
        fs.mkdirSync(str);
    }

    for (let index = 0; index < hierarchy.length; index++) {
        hexgon(hierarchy[index].name, hierarchy[index].layer, str);
    }

}

console.log("hexagonal folder structure created: ", hierarchy.root)