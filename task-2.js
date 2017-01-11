var inputString1 = 'A big red apple.';
var inputString2 = 'RED is a registered trade mark.';
var inputString3 = 'Red is his nickname.';
var checkString = 'Red';

function stringCheck(str, checkword) {
    checkword = checkword.toLowerCase();
    str = str.toLowerCase();
    if (~str.indexOf(checkword)) {
        return true;
    } else {
        return false;
    }
}

console.log(stringCheck(inputString1, checkString));
console.log(stringCheck(inputString2, checkString));
console.log(stringCheck(inputString3, checkString));