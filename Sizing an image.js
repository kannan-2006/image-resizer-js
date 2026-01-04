let imageElement = document.getElementById("image");
let spanElement = document.getElementById('imageWidth');
let defaultImageWidth = 200;
let paragraphElement = document.getElementById('warningMessage');
imageElement.style.width = defaultImageWidth + "px";

function decrement() {
    defaultImageWidth = defaultImageWidth - 5;
    if (defaultImageWidth < 100) {
        paragraphElement.textContent = "Can't visible, increase the size of the image";
        defaultImageWidth = 100;
        spanElement.textContent = defaultImageWidth + "px";
    } else {
        spanElement.textContent = defaultImageWidth + "px";
        imageElement.style.width = (defaultImageWidth + "px");
        paragraphElement.textContent = "";
    }

}

function increment() {
    defaultImageWidth = defaultImageWidth + 5;
    if (defaultImageWidth > 300) {
        paragraphElement.textContent = "Too big, Decrease the size of the image";
        defaultImageWidth = 300;
        spanElement.textContent = defaultImageWidth + "px";
    } else {
        spanElement.textContent = defaultImageWidth + "px";
        imageElement.style.width = (defaultImageWidth + "px");
        paragraphElement.textContent = "";
    }

}