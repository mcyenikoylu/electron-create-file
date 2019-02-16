var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');

document.getElementById('createButton').onclick = () => {

    alert('test');
    console.log('asda');

    dialog.showSaveDialog((fileName) => {
        if(fileName === undefined){
            alert('dosya kayit olamadi.');
            return;
        }

        var content = document.getElementById('content').value;

        fs.writeFile(fileName, content, (err) => {
            if (err) console.log(err);
            alert('dosya basarili sekilde kayit oldu.');
        })
    } )
}

