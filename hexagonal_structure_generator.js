const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');
const rawdata = fs.readFileSync('folder_str.json');

let pkgName = '';
let directory = '';
rl.question("Where do you want to create folder ? Answer:", function (dir) {
    rl.question("What is your Root  Package Name ? Answer:", function (rName) {
        rl.question("What is your  Feature Package Name ? Answer:", function (name) {
            rPkgName = `${rName}`;
            pkgName = `${name}`;
            directory = `${dir}`;

            let hierarchy = JSON.parse(rawdata);

            hierarchy['name'] = rPkgName;
            hierarchy['root'] = directory;
            hierarchy.layer[0]['name'] = pkgName;


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

            rl.close();
        });
    });
});
