(function () {
    function capitalizeIt(str) {
        str = str.split('');
        for (var i = 1; i < str.length; i++) {
            str[0] = str[0].toUpperCase();
            if (str[i - 1] === " ") {
                str[i] = str[i].toUpperCase();
            }
        }
        return str.join('');
    }

    console.log(capitalizeIt(process.argv[2]));
})();