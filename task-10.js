var customSetTimeout = setTimeout;
setTimeout = function (delay, func) {
    return customSetTimeout(func, delay);
};
setTimeout(3000, function () {
    console.log("test setTimeout");
});