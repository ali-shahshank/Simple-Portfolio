function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu.classList.contains("open")) {
        // Menu is closed, open it and add event listeners
        menu.classList.add("open");
        icon.classList.add("open");

        // Add event listener to close menu when not hovering over it
        menu.addEventListener("mouseout", closeMenuOnMouseOut);
        // Add event listener to close menu when not hovering over the icon
        icon.addEventListener("mouseout", closeMenuOnMouseOut);
    } else {
        // Menu is open, close it and remove event listeners
        menu.classList.remove("open");
        icon.classList.remove("open");

        menu.removeEventListener("mouseout", closeMenuOnMouseOut);
        icon.removeEventListener("mouseout", closeMenuOnMouseOut);
    }
}

function closeMenuOnMouseOut(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Check if the mouse is not over the menu or the icon
    if (!menu.contains(event.relatedTarget) && !icon.contains(event.relatedTarget)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
}
