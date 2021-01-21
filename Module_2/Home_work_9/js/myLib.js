!function() {
    window.myLib = {
        getMin(arr) {
            return Math.min.apply(null, arr);
        },
        getMax(arr) {
            return Math.max.apply(null, arr);
        },
        getАverage(arr) {
            let sum =  arr.reduce(function(sum, current) {
                return sum + current;
            });

            return sum / arr.length;
        },
        getClone(arr) {
            return arr.slice();
        }
    };
}();