var Demo2 = /** @class */ (function () {
    function Demo2(x, name) {
        console.log("Inside the Parameterized constructor Of Demo Class");
        this.no = x;
        this.str = name;
    }
    Demo2.prototype.fun = function () {
        console.log("Inside Fun Of Demo Class");
        console.log("Value of NO is   :" + this.no);
        console.log("Value of str is   :" + this.str);
    };
    return Demo2;
}());
var obj1 = new Demo2(11, "ANA");
var obj2 = new Demo2(12, "BNA");
obj1.fun();
obj2.fun();
