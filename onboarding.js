// Redirect buttons dynamically
document.querySelector(".sign-up button").addEventListener("click", () => {
  window.location.href = "login.html";
});

document.querySelector(".create-acc button").addEventListener("click", () => {
  window.location.href = "signup.html";
});

// Adjust button text on smaller screens
function adjustButtonText() {
  const buttons = document.querySelectorAll("button");
  if (window.innerWidth < 600) {
    buttons.forEach(
      (btn) => (btn.textContent = btn.textContent.replace("→", "")),
    );
  }
}
window.addEventListener("resize", adjustButtonText);
adjustButtonText();
