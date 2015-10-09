/// <reference path="../typings/q/q.d.ts" />
var Q = require("q");
var example_class_1 = require("./example_class");
var e = new example_class_1.default();
document.writeln("The example class says: " + e.SayHi());
Q("Hello!")
    .delay(1500)
    .then(function (msg) { return document.getElementById("content").innerHTML = "And Q says " + msg; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFDNUMsSUFBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDeEIsOEJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUM7QUFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUV6RCxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQztLQUNYLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLGFBQWEsR0FBRyxHQUFHLEVBQWxFLENBQWtFLENBQUMsQ0FBQyJ9