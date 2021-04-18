var image = ['1', '2', '3', '4', '5'];
var i = image.length;

function next() {
    var slider = document.getElementById('img');
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    slider.src = image[i - 1] + ".jpg";
}

function previous() {
    var slider = document.getElementById('img');
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider.src = image[i - 1] + ".jpg";
}