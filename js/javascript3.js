console.log("hi!")

let header__button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let header__themeName = document.querySelector(".header__themeName");
let header__secondButton = document.querySelector(".header__secondButton");
let header__secondThemeName = document.querySelector(".header__secondThemeName");

header__button.addEventListener("click", () => {
    body.classList.toggle("changeBackground");

    if (body.classList.contains("changeBackground")) {
        header__themeName.innerText = "jasne";
    } else {
        header__themeName.innerText = "ciemne";
    }
});

header__secondButton.addEventListener("click", () => {
    body.classList.toggle("changeText");

    header__secondThemeName.innerText = body.classList.contains("changeText") ? "Wyłącz" : "Włącz";
});