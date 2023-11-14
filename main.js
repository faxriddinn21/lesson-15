
const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".gamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// dark-light

const body = document.body;
const modeToggle = document.querySelector(".btn-1");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
