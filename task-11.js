(function () { 
customSetTimeout = setTimeout;

setTimeout = function(func, delay) {
    return customSetTimeout(delay, func);
};

function setInterval(func, delay) {
    timerId = setTimeout(delay, function go() {
        console.log("test");
        setTimeout(2000, go);
    }, 2000);
}

// вызов
setInterval();
})();