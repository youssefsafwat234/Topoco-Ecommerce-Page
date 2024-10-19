// cart button
document.querySelector(".cart-close").addEventListener("click", function () {
    document.querySelector(".cart-body").style.right = "-400px";
});
document.querySelector(".cart-open").addEventListener("click", function () {
    document.querySelector(".cart-body").style.right = "0px";
});

// categories button
function showOrhide() {
    if (document.getElementById("hide-categories").style.height != "0px") {
        document.getElementById("hide-categories").style.height = "0px";
        document.getElementById("hide-categories").style.overflow = "hidden";
        document.getElementById("hide-categories").style.padding = "0px";
    } else {
        document.getElementById("hide-categories").style.height = "fit-content";
        document.getElementById("hide-categories").style.overflow = "";
        document.getElementById("hide-categories").style.padding = "10px";
    }
}

var menu = document.querySelector("#low_nav");

function openMenu() {
    menu.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
}

// scroll to top
document.querySelector(".back-to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function scrollToAllProducts() {
    window.scrollTo({
        top: 800,
        behavior: "smooth",
    });
}

function scrollToAboutUs() {
    window.scrollTo({
        top: 1500,
        behavior: "smooth",
    });
}
function scrollToContact() {
    window.scrollTo({
        top: 2800,
        behavior: "smooth",
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("div");
    elements.forEach(function (element) {
        element.classList.add("animated");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll("section");
    elements.forEach(function (element) {
        element.classList.add("animated");
    });
});
