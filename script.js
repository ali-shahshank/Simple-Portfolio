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

// This is the new Java Function for the PHONE-ICON to display the phone number upon click 

        let isPhoneNumberVisible = false;

        function openNewWindow(url) {
          window.open(url, "_blank");
        }

        function togglePhoneNumber(event) {
          const phoneNumber = "+1(571)329-2436"; // Replace with your actual phone number
          const phoneTooltip = document.getElementById("phone-tooltip");
          const phoneNumberSpan = document.getElementById("phone-number");

          if (isPhoneNumberVisible) {
            // If phone number is visible, hide the tooltip
            phoneTooltip.style.display = "none";
          } else {
            // If phone number is not visible, show the tooltip
            phoneNumberSpan.innerText = `Phone Number: ${phoneNumber}`;
            phoneTooltip.style.display = "block";

            // Calculate tooltip position
            const iconRect = event.target.getBoundingClientRect();
            phoneTooltip.style.top = `${iconRect.bottom}px`;
            phoneTooltip.style.left = `${iconRect.left}px`;
          }

          // Toggle the visibility flag
          isPhoneNumberVisible = !isPhoneNumberVisible;
        }

        // Close the tooltip when clicking anywhere else on the page
        document.addEventListener("click", function (event) {
          const phoneTooltip = document.getElementById("phone-tooltip");
          if (
            event.target !== document.getElementById("phone-icon") &&
            event.target !== phoneTooltip
          ) {
            phoneTooltip.style.display = "none";
            isPhoneNumberVisible = false;
          }
        });