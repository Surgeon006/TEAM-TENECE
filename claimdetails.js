// Sidebar toggle for mobile
const navToggle = document.getElementById("navToggle");
const scrim = document.querySelector(".scrim");

scrim.addEventListener("click", () => {
  navToggle.checked = false;
});

// Dropdown menus
document.querySelectorAll(".menu").forEach((menu) => {
  menu.addEventListener("toggle", () => {
    menu.querySelector(".chev")?.classList.toggle("rotated", menu.open);
  });
});

// Print & Download buttons
document
  .querySelector(".btn:contains('Print')")
  ?.addEventListener("click", () => {
    window.print();
  });

document
  .querySelector(".btn:contains('Download')")
  ?.addEventListener("click", () => {
    alert("Downloading claim details...");
  });
