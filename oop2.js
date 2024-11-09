var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside the constructor Of Demo Class");
    }
    Demo.prototype.fun = function () {
        console.log("Inside Fun Of Demo Class");
    };
    return Demo;
}());
var obj1 = new Demo();
var obj2 = new Demo();
obj1.fun();
obj2.fun();
