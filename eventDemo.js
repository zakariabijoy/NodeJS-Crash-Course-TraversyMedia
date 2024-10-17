import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello World " + name);
}

function goodByHandler(name) {
  console.log("Good Bye " + name);
}

// register event listener
myEmitter.on("greet", greetHandler);
myEmitter.on("goodBy", goodByHandler);

// emit event
myEmitter.emit("greet", "Jhone");
myEmitter.emit("goodBy", "Jhone");

//error handling

myEmitter.on("error", (err) => {
  console.log("Error occurred: " + err.message);
});

//simulate error
myEmitter.emit("error", new Error("Something went wrong"));
