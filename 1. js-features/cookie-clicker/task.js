const counter = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");

img.onclick = function () {
    counter.textContent++;
    if (img.width == 200) {
        img.width = 70;
    } else {
        img.width = 200;
    }
}

let click = 0;