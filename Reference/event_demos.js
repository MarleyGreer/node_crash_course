const EventEmitter = require("events");

// Create An Emitter Class. This could hold a function that triggers the .emit function.
class MyEmitter extends EventEmitter {}

// Init A new Emitter object
const myEmitter = new MyEmitter();

// Event Listener => Stipulate what happens when the event is triggered

myEmitter.on("event", () => console.log("Event Fired!"));

// Init The Event

myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
