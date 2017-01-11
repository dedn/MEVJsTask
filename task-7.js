(function () {
    var array = {
        "Value": 100,
        "Value2": 213,
        "Value3": 5350,
        "Value4": "string",
        "Value5": "string2",
        "Value6": NaN
    };

    function sumNumber(obj) {
        var sum = 0;
        for (var value in array) {
            if (!isNaN(parseFloat(array[value])) && isFinite(array[value])) {
                sum += array[value];
            }
        }
        return sum;
    }

    sumNumber(array);
    console.log(sumNumber(array));
})();