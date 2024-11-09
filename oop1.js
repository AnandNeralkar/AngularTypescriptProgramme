var Arithmatic = /** @class */ (function () {
    function Arithmatic() {
    }
    //Behaviour
    Arithmatic.prototype.Addition = function () {
        var ans = 0;
        ans = this.no1 + this.no2;
        return ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var ans = 0;
        ans = this.no1 - this.no2;
        return ans;
    };
    return Arithmatic;
}());
var obj = new Arithmatic();
obj.no1 = 11;
obj.no2 = 10;
var Result = 0;
Result = obj.Addition();
console.log("Addition  " + Result);
Result = obj.Substraction();
console.log("Substraction  " + Result);
