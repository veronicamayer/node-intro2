import fs from "fs";

const folderPath = './myfolder';
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

function writeToTextFile(filename, content) {
    const filePath = `${folderPath}/${filename}.txt`;
    if (fs.existsSync(filePath)) {
      fs.appendFileSync(filePath, `\n${content}`);
    } else {
      fs.writeFileSync(filePath, content);
    }
  }

  writeToTextFile('mytextfile', 'Hier steht der Text.');

