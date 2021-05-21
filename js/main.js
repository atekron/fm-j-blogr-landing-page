document
  .querySelector(".header__hamburger-btn")
  .addEventListener("click", function () {
    let menu = document.querySelector(".header__hamburger-btn__open");
    let close = document.querySelector(".header__hamburger-btn__close");
    let mobileMenu = document.querySelector(".mobile-menu__links-wrapper");

    if (menu.style.display !== "none") {
      menu.style.display = "none";
      close.style.display = "inline-block";
      mobileMenu.style.display = "flex";
    } else {
      menu.style.display = "inline-block";
      close.style.display = "none";
      mobileMenu.style.display = "none";
    }
  });

window.addEventListener("resize", () => {
  document.querySelector(".mobile-menu__links-wrapper").style.display = "none";
  document.querySelector(".header__hamburger-btn__open").style.display =
    "inline-block";
  document.querySelector(".header__hamburger-btn__close").style.display =
    "none";
});
