const darkbtn = document.getElementById("dark");
const darkbtn_interno = document.getElementById("interno_dark");

function darkativar(event) {
  const raiz = document.querySelector(":root");
  raiz.classList.toggle("dark");
  darkbtn.classList.toggle("dark");
  darkbtn_interno.classList.toggle("dark");
  console.log(darkbtn_interno);
}
darkbtn.addEventListener("click", darkativar);
