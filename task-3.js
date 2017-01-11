var str = "This is example of log string that should be truncated";

function truncate(str, lengths) {
    str = str.substr(0, lengths);
    return (str + "...");
}

console.log(truncate(str, 7));