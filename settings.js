// Toggle dark mode dynamically
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
