import fs from 'fs';

const args = process.argv;

let dataText = '';
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    dataText = data;
    const count = dataText.split(args.splice(2).join(' ')).length - 1;
    console.log('the text appears: ' + count);
});
