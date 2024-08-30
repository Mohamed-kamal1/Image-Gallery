// Initialize the slide index and touch coordinates
let slideIndex = 1;
let startX = 0;
let endX = 0;

// Display the initial slide
slideShow(slideIndex);

// Set an interval to automatically move to the next slide every 5 seconds
let slideTime = setInterval(next, 5000);

// Function to display the slide at the given index
function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Loop back to the first slide if the index exceeds the number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Loop to the last slide if the index is less than 1
    else if (n < 1) {
        slideIndex = slides.length;
    }
    // Set the current slide index
    else {
        slideIndex = n;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to move to the next slide
function next() {
    slideShow(slideIndex += 1);
}

// Function to move to the previous slide
function pre() {
    slideShow(slideIndex -= 1);
}

// Select all buttons (previous and next)
let buttons = document.querySelectorAll("button");

// Add event listeners to pause the automatic slide change on mouseover and resume on mouseout
for (let button of buttons) {
    button.onmouseover = function () {
        clearInterval(slideTime);
    }
    button.onmouseout = function () {
        slideTime = setInterval(next, 5000);
    }
}

// Select the container element
const container = document.querySelector('.container');

// Add touch event listeners to handle swipe gestures
container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        next();
    } else if (startX < endX - 50) {
        pre();
    }
});
