(function () {
    function stringCheck(str, checkword) {
        checkword = checkword.toLowerCase();
        str = str.toLowerCase();
        if (~str.indexOf(checkword)) {
            return true;
        } else {
            return false;
        }
    }

    console.log(stringCheck(process.argv[2], process.argv[3]));

})();