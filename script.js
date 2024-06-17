var text = document.getElementById("text");
window.onscroll = function () {
    text.innerHTML = "pageYOffset : " + window.pageYOffset + "<br>";
    text.innerHTML += "pageXOffset : " + window.pageXOffset + "<br>";
}