// Verify The Information For twasol Page
const activereg = () => {
  if (
    username.classList.contains("true") &&
    email.classList.contains("true") &&
    titleofmessage.classList.contains("true") &&
    message.classList.contains("true")
  ) {
    btnoftwasal.removeAttribute("disabled");
  } else {
    btnoftwasal.setAttribute("disabled", "");
  }
};
const activeregsubs = () => {
  if (
    username.classList.contains("true") &&
    email.classList.contains("true") &&
    psw.classList.contains("true") &&
    confpsw.classList.contains("true")
  ) {
    next.removeAttribute("disabled");
  } else {
    next.setAttribute("disabled", "");
  }
};
username.addEventListener("keyup", (eo) => {
  username.classList.add("eroor");
  messageUser.style.display = "block";
  if (username.value.length > 8) {
    username.classList.add("true");
    messageUser.style.display = "none";
  } else {
    username.classList.remove("true");
    messageUser.style.display = "block";
  }
  activereg();
  activeregsubs();
  sessionStorage.setItem("username", username.value);
});
email.addEventListener("keyup", (eo) => {
  email.classList.add("eroor");
  messageEmail.style.display = "block";

  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEmail.test(email.value)) {
    email.classList.add("true");
    messageEmail.style.display = "none";
  } else {
    email.classList.remove("true");
  }
  activereg();
  activeregsubs();
});
titleofmessage.addEventListener("keyup", (eo) => {
  titleMessage.style.display = "block";
  titleofmessage.classList.add("eroor");

  if (titleofmessage.value.length >= 10) {
    titleofmessage.classList.add("true");
    titleMessage.style.display = "none";
  } else {
    titleofmessage.classList.remove("true");
    titleMessage.style.display = "block";
  }
  activereg();
});
message.addEventListener("keyup", (e0) => {
  messageofmessage.style.display = "block";
  message.classList.add("eroor");

  if (message.value.length >= 40) {
    messageofmessage.style.display = "none";
    message.classList.add("true");
  } else {
    messageofmessage.style.display = "block";
    message.classList.remove("true");
  }
  activereg();
});

btnoftwasal.addEventListener("click", (eo) => {
  corectLogin.style.transform = "scale(1)";
});
okay.addEventListener("click", (eo) => {
  corectLogin.style.transform = "scale(0)";
  setTimeout(() => {
    okay.setAttribute("href", "");
  }, 1000);
});

// Scrool Reval Js Animation
ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(".question .text", { delay: 800, origin: "right" });
ScrollReveal().reveal(".conatct-us .image", {
  delay: 500,
  origin: "right",
  ease: "ease-in-out",
});
ScrollReveal().reveal(".main-title,.title,.footer .logo,.conatct-us p", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".why-us #why-usImage,.works .image-box", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".question p,.question a,.contact-me p,.footer .parag", {
  delay: 300,
  origin: "bottom",
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
ScrollReveal().reveal(".footer .contac,.conatct-us .form,.conatct-us .btn", {
  distance: "250px",
  delay: 500,
  origin: "bottom",
});
