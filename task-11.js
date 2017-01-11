customSetTimeout = setTimeout;

setTimeout = function (delay, func) {
    return customSetTimeout(func, delay);
};

function setInterval(func, delay) {
     setTimeout(delay, function () {
        func();
        setInterval(func, delay);
    });
}

setInterval(function () {
console.log("test setinterval");
}, 5000);
