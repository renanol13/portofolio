const i_am = document.querySelector("#profile h1");
const img_Profile = document.querySelector("#profileInfo img");
const p_Profile = document.querySelector("#profileInfo p");
const interrogation = document.querySelector("#profile h1  strong");
const iconsprofile = document.querySelectorAll("#profileIcons");


const iconMenu = document.querySelector("#iconBurguer");
const showNav = document.querySelector("nav");


window.addEventListener("load", () => {
  if (window.innerWidth >= 700) {
    gsap.to(i_am, {
      y: 0,
      duration: 1,
      opacity: 1,
    });

    gsap.to(img_Profile, {
      x: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.to(interrogation, {
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "bounce.out",
    });

    gsap.to(p_Profile, {
      duration: 1.2,
      opacity: 1,
    });

    gsap.to(iconsprofile, {
      y: 0,
      opacity: 1,
      duration: 1.2,
    });
  }
});

//Show menu
let animationButMenu = false;

iconMenu.addEventListener("click", () => {
  if (!animationButMenu) {
    iconMenu.classList.add("activeMenu");
    showNav.classList.add("showMenu");
    console.log("oi");
    animationButMenu = true;
  } else {
    iconMenu.classList.remove("activeMenu");
    showNav.classList.remove("showMenu");
    animationButMenu = false;
  }
});
