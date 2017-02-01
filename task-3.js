(function () {
    function truncate(str, lengths) {
        str = str.substr(0, lengths);
        return (str + "...");
    }

    console.log(truncate(process.argv[2], process.argv[3]));
})();


