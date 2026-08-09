document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-icon");

  // Toggle password visibility
  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    toggleBtn.querySelector("span").textContent = isPassword
      ? "visibility_off"
      : "visibility";
  });

  // Prevent empty fields
  form.addEventListener("submit", (e) => {
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      e.preventDefault();
      alert("Email and Password cannot be empty.");
    }

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  });
});
