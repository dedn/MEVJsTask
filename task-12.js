(function () {
    function createPipe(func, arr) {
        return function () {
            var str = func.call(this, arguments);
            for (i = 0; i < arr.length; i++) {
                str = arr[i].call(str);
            }
            return str;
        };
    }

    var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
    pipe();
})();