(function () {
    var max = "max";
    var min = "min";

    function findMinMax(arr, value) {
        if (value == "max") {
            var arrLen = arr.length;
            maxEl = arr[0];
            for (var i = 0; i < arrLen; i++) {
                if (maxEl < arr[i]) {
                    maxEl = arr[i];
                }
            }
            return maxEl;
        }
        if (value == "min") {
            var arrLen = arr.length;
            minEl = arr[0];
            for (var i = 0; i < arrLen; i++) {
                if (minEl > arr[i]) {
                    minEl = arr[i];
                }
            }
            return minEl;
        }
    }

    console.log(findMinMax([1, 2, -20, 3, 4, -5, 44, 200, -100, "string", {}], process.argv[2]));
})();