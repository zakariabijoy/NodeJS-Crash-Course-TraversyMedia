//import fs from "fs";
import fs from "fs/promises";

// // readfile() - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // readFileSync() - synchronous version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

//readFile() - promise.then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

// writefile()

const writeFile = async () => {
  try {
    const data = "This is a demo test file.";
    await fs.writeFile("./test.txt", data, "utf8");
    console.log("File written successfully!");
  } catch (err) {
    console.error(err);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    const data = "\nThis is a new line.";
    await fs.appendFile("./test.txt", data, "utf8");
    console.log("File appended successfully!");
  } catch (err) {
    console.error(err);
  }
};

writeFile();

appendFile();

readFile();
