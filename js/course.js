const allMada = document.querySelectorAll(".mada");
const parentOfMada = document.querySelector(".mawad");
const parentOfTeachers = document.querySelector(".parentOfTeachers");

allMada.forEach((item, index) => {
  item.addEventListener("click", () => {
    parentOfMada.getElementsByClassName("active")[0].classList.remove("active");
    item.classList.add("active");

    parentOfTeachers
      .getElementsByClassName("active-arabic")[0]
      .classList.remove("active-arabic");
    parentOfTeachers
      .getElementsByClassName("arabic")
      [index].classList.add("active-arabic");
  });
});

// Scrool Reval Js Animation
ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(".main-title", {
  delay: 1000,
  origin: "top",
});
ScrollReveal().reveal(".cours h4", {
  delay: 600,
  origin: "top",
});
ScrollReveal().reveal(".cours .mawad", {
  delay: 600,
  origin: "bottom",
});
ScrollReveal().reveal(".cours .teachersbox", {
  delay: 1200,
  origin: "right",
  distance: "250px",
});
