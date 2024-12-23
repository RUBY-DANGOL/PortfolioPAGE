// // Show the button when the user scrolls down 20px from the top
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     const scrollTopBtn = document.getElementById("scrollTopBtn");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollTopBtn.style.display = "block";
//     } else {
//         scrollTopBtn.style.display = "none";
//     }
// }

// // Function to scroll to the top when the button is clicked
// function scrollToTop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function() { toggleScrollTopBtn(); };

function toggleScrollTopBtn() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}