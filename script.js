var text = document.getElementById("text");
var height = document.getElementById("height");
window.onresize = function () {
    text.innerHTML = "innerWidth : " + window.innerWidth + "<br>";
    text.innerHTML += "innerHeight : " +window.innerHeight+"<br>";
    text.innerHTML += "outerWidth : " +window.outerWidth +"<br>";
    text.innerHTML += "outerHeight : " +window.outerHeight +"<br>";
    // height.innerHTML = "innerHeight: " + window.innerHeight + "<br>";
}