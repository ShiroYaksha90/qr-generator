import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Please enter your URL", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qrImage = qr.image(url, { type: "png" });
    qrImage.pipe(fs.createWriteStream("Basims portfolio.png"));
    fs.writeFile("URL log.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saver!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
