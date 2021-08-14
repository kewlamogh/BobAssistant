let currIndex = 0;
let pastCommands = ["hark"];

document.getElementById('cmd').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) { pastCommands.push(sessionStorage.getItem("l")) }
    if (event.keyCode == 38) { currIndex += 1; if (currIndex == pastCommands.length) {currIndex = 0}; this.value = pastCommands[currIndex] }
});