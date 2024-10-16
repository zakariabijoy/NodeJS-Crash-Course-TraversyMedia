import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

//basename()
console.log(path.basename(filePath)); // output: test.txt

//dirname()
console.log(path.dirname(filePath)); // output:./dir1/dir2

//extname()
console.log(path.extname(filePath)); // output: .txt

// parse()
console.log(path.parse(filePath)); // output: { root: '', dir: './dir1/dir2', base: 'test.txt', ext: '.txt', name: 'test' }

const __fileName = url.fileURLToPath(import.meta.url); // output: d:\Work\Personal\Practice_Learning\NodeJS\NODEJS-CRASH-COURSE-TraversyMedia\pathDemo.js
const __dirName = path.dirname(__fileName); // output: d:\Work\Personal\Practice_Learning\NodeJS\NODEJS-CRASH-COURSE-TraversyMedia
console.log(__dirName);
console.log(__fileName);

// join()
const filePath2 = path.join(__dirName, "dir1", "dir2", "newFile.txt");
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirName, "dir1", "dir2", "newFile.txt");
console.log(filePath3);
