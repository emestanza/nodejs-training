const fs = require('fs');

let base = 3
let data = "";

for (let i = 0; i <= 10; i++) {
    data += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});