var testArray = ['string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string',]
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function toObject(arr) {
    var obj = {};
    var CharArraylength = abc.length;
    for (var i = 0; i < arr.length; i++) {
        if (i > CharArraylength) {
            obj[i - CharArraylength] = arr[i];
        } else {
            obj[abc[i]] = arr[i];
        }
    }
    return obj;
}

console.log(toObject(testArray));