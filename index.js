let slideIndex = 1;
slideShow(slideIndex);
let slideTime= setInterval(next, 5000);
function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    } else {
        slideIndex = n
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function next() {
    slideShow(slideIndex += 1);
}
function pre() {
    slideShow(slideIndex -= 1);
}

function autoSlide() {
    setInterval(next, 2000);
}
let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.onmouseover = function () {
        clearInterval(slideTime);

    }
    button.onmouseout = function () {
        slideTime = setInterval(next, 5000);
    }
}

