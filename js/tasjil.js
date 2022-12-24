// Verify The Information For subscribe Page
const activereg = () => {
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
});
psw.addEventListener("keyup", () => {
  psw.classList.add("eroor");
  messagemot.style.display = "block";
  const regPassword = /^[A-Za-z]\w{7,14}$/;
  if (regPassword.test(psw.value)) {
    psw.classList.add("true");
    messagemot.style.display = "none";
  } else {
    psw.classList.remove("true");
    messagemot.style.display = "block";
  }
  activereg();
});
confpsw.addEventListener("keyup", () => {
  confpsw.classList.add("eroor");
  messageconfpsw.style.display = "block";

  if (confpsw.value == psw.value) {
    confpsw.classList.add("true");
    messageconfpsw.style.display = "none";
  } else {
    confpsw.classList.remove("true");
    messageconfpsw.style.display = "block";
  }
  activereg();
});

// Show Corect Login When Click On Next Button
next.addEventListener("click", () => {
  corectLogin.style.transform = "scale(1)";
});

// Scrool Reval Js Animation
ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 100,
});
ScrollReveal().reveal(".main-title,.title,.footer .logo,.conatct-us p", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".info-tasjil p", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".info-tasjil form", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".info-tasjil .btn", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".info-tasjil .image", {
  delay: 500,
  origin: "right",
});
