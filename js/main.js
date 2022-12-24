// Show Menu Box When Click On Menu Icon
const menu = document.getElementById("menu");
const MenuBox = document.querySelector(".menu-box");
menu.addEventListener("click", (eo) => {
  MenuBox.classList.add("open");
});
// Hide Menu Box When click On Colse Menu
const closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", (eo) => {
  MenuBox.classList.remove("open");
});

// Question Section
const questionSection = document.querySelectorAll(".questBox");
const questions = document.querySelectorAll(".quest");
questionSection.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    const contentBox = questions[index].querySelector(".content-box");
    console.log(contentBox);
    contentBox.classList.toggle("open");
    if (contentBox.classList.contains("open")) {
      contentBox.style.height = `${contentBox.scrollHeight}px`;
    } else {
      contentBox.style.height = "0";
    }
    item.querySelector("i").classList.toggle("saber");
  });
});

// Craet Login Page
const close = document.getElementById("close");
const okay = document.getElementById("okay");
const loginPage = document.getElementById("loginPage");
login.addEventListener("click", (eo) => {
  loginPage.style.display = "flex";
  setTimeout(() => {
    form.style.transform = "scale(1)";
  }, 100);
});
oki.addEventListener("click", (eo) => {
  loginPage.style.display = "none";
  form.style.transform = "scale(0)";
});
close.addEventListener("click", (eo) => {
  form.style.transform = "scale(0)";
  setTimeout(() => {
    loginPage.style.display = "none";
  }, 500);
});
// Verify The Information For Login Page
const infologin = () => {
  if (email.classList.contains("true") && password.classList.contains("true")) {
    oki.removeAttribute("disabled");
  } else {
    oki.setAttribute("disabled", "");
  }
};
email.addEventListener("keyup", (eo) => {
  email.classList.add("eroor");
  messageemail.style.display = "block";
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regEmail.test(email.value)) {
    email.classList.add("true");
    messageemail.style.display = "none";
  } else {
    email.classList.remove("true");
  }
  infologin();
});
password.addEventListener("keyup", (eo) => {
  password.classList.add("eroor");
  messagemot.style.display = "block";
  if (password.value.length > 7) {
    password.classList.add("true");
    messagemot.style.display = "none";
  } else {
    password.classList.remove("true");
  }
  infologin();
});
// Scrool Reval Js Animation
ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(".landing-page .content,.question .text", {
  delay: 800,
  origin: "right",
});
ScrollReveal().reveal(".landing-page .image", {
  delay: 500,
  origin: "left",
  ease: "ease-in-out",
});
ScrollReveal().reveal(".main-title,.title,.footer .logo", {
  delay: 500,
  origin: "top",
  distance: "50px",
});
ScrollReveal().reveal(
  ".online .image img ,.why-us #why-usImage,.works .image-box",
  { delay: 600, origin: "right" }
);
ScrollReveal().reveal(
  ".online .content,.works .content,.question p,.question a,.contact-me p,.footer .parag",
  { delay: 300, origin: "bottom" }
);
ScrollReveal().reveal(".why-us .box", { delay: 500, origin: "top" });
ScrollReveal().reveal(".works .arow-img", { delay: 800, origin: "left" });
ScrollReveal().reveal(".teachers .teachearbox", {
  duration: 1000,
  distance: "250px",
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".teachers .teachearbox-2", {
  distance: "250px",
  delay: 250,
  origin: "right",
});
ScrollReveal().reveal(".teachers .teachearbox-3", {
  distance: "250px",
  delay: 1000,
  origin: "right",
});
ScrollReveal().reveal(".teachers .teachearbox-4", {
  distance: "250px",
  delay: 750,
  origin: "right",
});
ScrollReveal().reveal(".testimonial .testimonial-box", {
  duration: 1000,
  distance: "250px",
  delay: 1000,
  origin: "right",
});
ScrollReveal().reveal(".testimonial .testimonial-box-2", {
  distance: "250px",
  delay: 750,
  origin: "right",
});
ScrollReveal().reveal(".testimonial .testimonial-box-3", {
  distance: "250px",
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".footer .social-media .fa-twitter", {
  distance: "250px",
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".footer .social-media .fa-youtube", {
  distance: "250px",
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(".footer .social-media .fa-instagram", {
  distance: "250px",
  delay: 900,
  origin: "right",
});
ScrollReveal().reveal(".footer .social-media .fa-facebook-f", {
  distance: "250px",
  delay: 1100,
  origin: "right",
});
ScrollReveal().reveal(".footer ul", {
  distance: "250px",
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".footer .contac", {
  distance: "250px",
  delay: 500,
  origin: "right",
});
