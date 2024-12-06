// Slide Show Logic
let slideIndex = 1;
showSlides(slideIndex);

// Change slide when arrow buttons or dots are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  // Remove active class from dots
    }
    
    slides[slideIndex - 1].style.display = "block";  // Display the current slide
    dots[slideIndex - 1].className += " active";  // Highlight the current dot
}

document.addEventListener('DOMContentLoaded', function() {
    const themeSlider = document.getElementById("themeSlider");
    const sliderCircle = document.getElementById("sliderCircle");
    const sliderBackground = document.getElementById("sliderBackground");
    const sliderContainer = document.querySelector('.slider-container');
    const body = document.body;

    themeSlider.addEventListener("click", function() {
      if (body.classList.contains("light")) {
        // Switch to dark mode
        body.classList.remove("light");
        body.classList.add("dark");

        // Change colors
        sliderCircle.setAttribute("fill", "black");
        sliderBackground.setAttribute("fill", "grey");

        // Animate circle position to the right
        sliderCircle.style.transform = "translateX(50px)";
      } else {
        // Switch to light mode
        body.classList.remove("dark");
        body.classList.add("light");

        // Change colors
        sliderCircle.setAttribute("fill", "grey");
        sliderBackground.setAttribute("fill", "black");

        // Animate circle position to the left
        sliderCircle.style.transform = "translateX(0)";
      }
    });
});
    // Dropdown menu toggle event
    menuButton.addEventListener("click", function() {
      // Toggle the active class on the menu dropdown
      menuDropdown.classList.toggle("active");
    });
  
    // Close the dropdown menu if clicked outside of the menu or button
    document.addEventListener("click", function(event) {
      if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
        menuDropdown.classList.remove("active");
      }
    });

/*julekule infoboks script*/
function visInfo(tekst) {
    const infoboks = document.getElementById('infoboks');
    const infotekst = document.getElementById('infotekst');

    infotekst.textContent = tekst;
    infoboks.style.display = 'block';
}

function lukkInfo() {
    const infoboks = document.getElementById('infoboks');
    infoboks.style.display = 'none';
}
/*julekule infoboks script*/