console.log("Welcome to Aarohi Yadav's Portfolio!");

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        console.log("Navigating to:", this.textContent);
    });
});