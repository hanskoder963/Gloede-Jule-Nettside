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

// Menu Button Toggle (Desktop and Mobile)
const menuButton = document.getElementById('menuButton');
const menuDropdown = document.getElementById('menuDropdown');
const toggleThemeButton = document.getElementById('toggleTheme');

// Show/Hide Dropdown Menu
if (menuButton && menuDropdown) {
    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevent click from closing the dropdown immediately
        // Toggle visibility of the dropdown
        if (menuDropdown.style.display === 'block') {
            menuDropdown.style.display = 'none';
        } else {
            menuDropdown.style.display = 'block';
        }
    });

    // Close Dropdown Menu When Clicking Outside (For both Desktop and Mobile)
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.style.display = 'none';  // Hide dropdown when clicking outside
        }
    });
}

// Theme Toggle Button Logic
if (toggleThemeButton) {
    toggleThemeButton.addEventListener('click', () => {
        // Toggle between light and dark theme
        const body = document.body;
        
        // Check the current theme and switch it
        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleThemeButton.textContent = 'Light Mode';  // Change text to "Light Mode"
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            toggleThemeButton.textContent = 'Dark Mode';  // Change text to "Dark Mode"
        }
    });
}