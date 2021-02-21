// this file is not part of the rules, it's used for rule merging
const fs = require("fs");

const pathOfLocal = "./DOMAIN-SET/AdRuleTest.list";
const path2 = "../../Script/Surge/AdRuleTest.list";
var arrayLocal = fs
  .readFileSync(pathOfLocal, "utf8")
  .split("\n");
// array.forEach(arr => console.log(arr));
var fixed = [];
var arrayNobyDa = fs
  .readFileSync(path2, "utf8")
  .split("\n")
  .forEach((arr) => {
    arr.replace("DOMAIN-SUFFIX,", ".");
    if (arr.startsWith(".")) {
      fixed.push(arr);
    }
  });

var newArray = arrayLocal.concat(fixed);
newArray = [...new Set([...arrayLocal, ...fixed])];

var file = fs.createWriteStream(path2);
file.on("error", function (err) {
  Console.log(err);
});
newArray.forEach((value) => file.write(`${value}\n`));
file.end();


console.log("Completed")