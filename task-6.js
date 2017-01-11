(function () {
    var array1 = [1, 2, 3, 4, 5, 6, 7, 8, "a", "b"];
    var array2 = [1, 0, 9, 8, 4, "a"];

    function test2(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                }
            }
        }
    }

    test2(array1, array2);
    console.log(array1);
})();