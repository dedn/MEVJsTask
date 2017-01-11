function originalFunc(str) {
    str = str.split('');
    for (var i = 1; i < str.length; i++) {
        str[0] = str[0].toUpperCase();
        if (str[i - 1] === " ") {
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
}

function createPipe(func, arr) {
    return function () {
        str = func.apply(this, arguments);
        for (i = 0; i < arr.length; i++) {
            str = arr[i].apply(str);
        }
        return originalFunc(str);
    };
}

function filterDigits() {
    return this.replace(/\d/g, "");
}

function filterSpecial() {
    return this.replace(/\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=/g, "");
}

function filterWhiteSpaces() {
    return this.replace(/\s/g, " ");
}

var pipe = createPipe(originalFunc, [filterDigits, filterSpecial, filterWhiteSpaces]);
pipe(" on345l90y    te**x((((t     h$&er@@@e ");


document.write(pipe(" on345l90y  te**x((((t  h$&er@@@e "));






