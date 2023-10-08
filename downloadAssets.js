import https from 'https';
import fs from 'fs';

const darkTheme = fs.createWriteStream('catppuccin-mocha.json');
const lightTheme = fs.createWriteStream('catppuccin-latte.json');

https.get('https://raw.githubusercontent.com/catppuccin/vscode/compiled/mocha.json', (res) => {
    res.pipe(darkTheme);
});

https.get('https://raw.githubusercontent.com/catppuccin/vscode/compiled/latte.json', (res) => {
    res.pipe(lightTheme);
});
