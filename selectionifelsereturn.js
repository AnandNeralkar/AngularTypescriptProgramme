function displayAge1(age) {
    if (age >= 60) {
        return true;
    }
    else {
        return false;
    }
}
var result2 = false;
var myAge = 34;
result2 = displayAge1(myAge);
if (result2 == true) {
    console.log("you are senior citizen");
}
else {
    console.log("you are not senior citizen");
}
