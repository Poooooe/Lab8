function changeColor() {
    var r = document.getElementById("redInput").value;
    var g = document.getElementById("greenInput").value;
    var b = document.getElementById("blueInput").value;
    var w = document.getElementById("widthValue").value;
    var rbg = document.getElementById("redInputBG").value;
    var gbg = document.getElementById("greenInputBG").value;
    var bbg = document.getElementById("blueInputBG").value;

    document.getElementById("Par").style.backgroundColor = "rgb(" + rbg + "," + gbg + "," + bbg + ")";
    document.getElementById("Div").style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Div").style.borderWidth = w + "px";
}