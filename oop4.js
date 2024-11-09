var Arithmatic1 = /** @class */ (function () {
    function Arithmatic1(x, y) {
        this.no1 = x;
        this.no2 = y;
    }
    //Behaviour
    Arithmatic1.prototype.Addition = function () {
        var ans = 0;
        ans = this.no1 + this.no2;
        return ans;
    };
    Arithmatic1.prototype.Substraction = function () {
        var ans = 0;
        ans = this.no1 - this.no2;
        return ans;
    };
    return Arithmatic1;
}());
var obj = new Arithmatic1(11, 10);
Result = obj.Addition();
console.log("Addition  " + Result);
Result = obj.Substraction();
console.log("Substraction  " + Result);
var obj3 = new Arithmatic1(51, 11);
var Result = 0;
Result = obj3.Addition();
console.log("Addition  " + Result);
Result = obj3.Substraction();
console.log("Substraction  " + Result);
