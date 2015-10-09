/// <reference path="../typings/q/q.d.ts" />
import Q = require("q");
import ExampleClass from "./example_class";

var e = new ExampleClass();
document.writeln("The example class says: " + e.SayHi());

Q("Hello!")
   .delay(1500)
   .then(msg => document.getElementById("content").innerHTML = "And Q says " + msg);
