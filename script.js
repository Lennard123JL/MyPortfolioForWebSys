


function showSideBar() {
    const sideNavBar = document.querySelector(".sideNavBar");
    sideNavBar.style.display = "flex";
}

function hideSideBar() {
    const sideNavBar = document.querySelector(".sideNavBar");
    sideNavBar.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".sideNavBar li a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            const targetSectionId = this.getAttribute("href"); // Get the href attribute value
            const targetSection = document.querySelector(targetSectionId); // Find the target section

            if (targetSection) {
                hideSideBar(); // Hide the sidebar if it's visible
                targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
            }
        });
    });
});