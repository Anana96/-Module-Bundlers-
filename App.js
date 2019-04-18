const path = require('path');
const fs = require('fs');
const entry = path.resolve(__dirname, 'src/index.js');
const bundler = require('./index');




fs.writeFile("bundle.js", bundler(entry), function(error){
    if(error){
        console.log("Ошибка при сохранении файла:");
        throw error; 
    }
});

