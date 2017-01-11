(function () {
    array = [2, 3, 4, 5, 6, 7, 8, 45, 34, "sdds", 1.2];
    max = "max";
    min = "min";

    function findMinMax(arr, value) {
        var filterData = filterInput(arr);
        if (value == "min") {
            var arrLength = arr.length;
            for (var i = 0; i < arrLength; i++) {
                return Math.min.apply(null, filterData);
            }
        }
        if (value == "max") {
            var arrLengthM = arr.length;
            for (var j = 0; j < arrLengthM; j++) {
                return Math.max.apply(null, filterData);
            }
        }
    }

    function filterInput(arr) {
        var numberArr = arr.filter(function (numb) {
            return !isNaN(parseFloat(numb)) && isFinite(numb) && !(numb % 1);
        });
        return numberArr;
    }

    findMinMax(array, max);

    console.log(findMinMax(array, max));
    console.log(findMinMax(array, min));
})();