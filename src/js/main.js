const goToTop = document.querySelector("#go-to-top");
const cta = document.querySelector(".cta-call");

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const header = document.querySelector(".header__bottom");
const headerTop = document.querySelector(".header__top");

var swiper = new Swiper(".slider", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-140%", 500, -1000]
    },
    next: {
      shadow: true,
      translate: ["140%", -500, -1000]
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

goToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
  removeClassActive();
});
document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 200) {
    goToTop.classList.add("active");
  } else {
    goToTop.classList.remove("active");
  }
});

function handleScroll() {
  if (window.scrollY > 10) {
    cta.classList.add("active");
  } else {
    cta.classList.remove("active");
  }

  if (window.scrollY > headerTop.offsetHeight) {
    document.body.style.marginTop = header.offsetHeight + "px";
    header.classList.add("scrolled");
  } else {
    document.body.style.marginTop = "0px";
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 400) {
    goToTop.classList.add("scrolled");
  } else {
    goToTop.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);

// Scrollspy
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".js-nav li a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

$('a[href*="#"]').click(function () {
  // removeClassActive();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 80
    },
    100
  );
  return false;
});

AOS.init();
let flag = true;
const display = document.querySelector(".display");
display.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#seo").scrollIntoView();
  if (flag == true) {
    display.textContent = "Zwiń";
    flag = false;
  } else {
    display.textContent = "Rozwiń";
    flag = true;
  }
  document.querySelector(".seo-wraper").classList.toggle("active");
});
