import os from "os";

//userInfo()
console.log(os.userInfo()); // returns an object containing user information

console.log(os.platform()); // returns the platform of the system
console.log(os.arch()); // returns the architecture of the system

//totalMemory()
console.log(os.totalmem()); // returns the total amount of system memory in bytes

//freemem()
console.log(os.freemem()); // returns the amount of free system memory in bytes

//cpus()
console.log(os.cpus()); // returns an array of objects containing information about each CPU/core installed on the system

//loadavg()
console.log(os.loadavg()); // returns an array containing the 1, 5, and 15 minute load averages
//networkInterfaces()
console.log(os.networkInterfaces()); // returns an object containing information about the system network interfaces

//type()
console.log(os.type()); // returns the operating system name

//release()
console.log(os.release()); // returns the operating system release

//uptime()
console.log(os.uptime()); // returns the system uptime in seconds
