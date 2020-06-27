// Variable Description
let element = document.body;
let footer = document.getElementById("footer");
let banner = document.getElementById("banner");
let round = document.getElementById("rounded");
let card = document.getElementById("card").querySelectorAll(".skill-card, .circle-bg");

let navbar = document.getElementById("myTopnav");
let navTop = navbar.offsetTop;
let menu = document.getElementById("menu-item");
let MenuIcon = document.getElementById("icon");

let burger = document.getElementById("burger");
let x = document.getElementById("close");
let button = document.getElementById("btn");

x.style.display = "none";

// Dark Mode Toggle
function DarkMode() {
    element.classList.toggle("dark");
    footer.classList.toggle("black");
    banner.classList.toggle("dark-banner");
    round.classList.toggle("dark-rounded");
    MenuIcon.classList.toggle("bl-icon");
    
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("dark-card");
    }

    // Switch Text Dark to Light
    navbar.classList.add('light');
    if(button.innerHTML == "dark mode") {
        button.innerHTML = "light mode";
        navbar.classList.add('black');
        navbar.classList.remove('light');
    } else {
        button.innerHTML = "dark mode";
        navbar.classList.add('light');
        navbar.classList.remove('black');
    }
}

// Responsive Menu Icon Navbar
function toggleNav() {            
    menu.classList.toggle("showing");
    if (menu.classList.contains("showing")) {
        burger.style.display = "none";
        x.style.display = "block";
    } else {
        burger.style.display = "block";
        x.style.display = "none";
    }
}
