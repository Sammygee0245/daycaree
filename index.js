// navigation dropdown effect
let bars = document.querySelector("#bars");
let ul2 = document.querySelector("#ul2");
let book = document.querySelector("#book");

let showNav = false;

function displayNav() {
  if (!showNav) {
    ul2.style.top = 141 + "px";
    ul2.style.opacity = 1;
    book.style.display = "flex";
    showNav = !showNav;
  } else {
    ul2.style.opacity = 0;
    ul2.style.top = -1000 + "px";
    book.style.display = "none";
    showNav = !showNav;
  }
}

bars.addEventListener("click", displayNav);

// gsddsgds?
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
