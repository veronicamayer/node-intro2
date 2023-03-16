import fs from "fs";

const jsonData = fs.readFileSync('data.json');
const data = JSON.parse(jsonData);
const textData = data.map((item) => `${item.id} - ${item.title}\n${item.description}\n`).join('');
fs.writeFileSync('data.txt', textData);

