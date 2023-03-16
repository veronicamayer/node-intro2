import fs from "fs";

fs.open("blog1.txt", "r", function (err, fd) {
    if (err) {
        throw err;
    }

    fs.readFile(fd, "utf8", function (err, data) {
        if (err) {
            throw err;
        }

        console.log(data);

        fs.close(fd, function (err) {
            if (err) {
                throw err;
            }
        });
    });
});

fs.writeFile("blog1.txt", "Heute ist Donnerstag", function (err) {
    if (err) throw err;
    console.log("changed file content");
});

fs.writeFile("blog2.txt", "Dies ist ein beliebiger Text.", function (err) {
    if (err) throw err;
    console.log("add new file + text");
});

if (!fs.existsSync("assets")) {
    fs.mkdirSync("assets");
    console.log("create folder");
} else {
    fs.rmdirSync("assets");
    console.log("delete folder");
}

if (fs.existsSync("delete.txt")) {
    fs.unlinkSync("delete.txt");
    console.log("delete file");
} else {
    fs.writeFileSync("delete.txt", "Dies ist eine Testdatei.");
    console.log("create file");
}

fs.writeFile("Hello.txt", "Dies ist eine Testdatei.", function (err) {
    if (err) throw err;
    console.log("create txt file");

    fs.rename("Hello.txt", "HelloWorld.txt", function (err) {
        if (err) throw err;
        console.log("rename txt file");
    });
});

