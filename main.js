const menuBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("mobileOverlay");

function openMenu() {
    overlay.classList.add("active");
    }
function closeMenu() {
    overlay.classList.remove("active");
    }
    
    
    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    
