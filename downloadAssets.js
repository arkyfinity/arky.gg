import https from 'https';
import fs from 'fs';

const darkTheme = fs.createWriteStream('Night-Owl-color-theme.json');
const lightTheme = fs.createWriteStream('Night-Owl-Light-color-theme.json');

https.get('https://raw.githubusercontent.com/sdras/night-owl-vscode-theme/master/themes/Night%20Owl-color-theme.json', (res) => {
    res.pipe(darkTheme);
});

https.get('https://raw.githubusercontent.com/sdras/night-owl-vscode-theme/master/themes/Night%20Owl-Light-color-theme.json', (res) => {
    res.pipe(lightTheme);
});
