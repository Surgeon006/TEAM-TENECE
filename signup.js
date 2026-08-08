document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");
  const nameField = document.querySelector(
    'input[placeholder="Enter your full name"]',
  );
  const emailField = document.querySelector(
    'input[placeholder="Enter your work email"]',
  );
  const passwordField = document.querySelector(
    'input[placeholder="Create a password"]',
  );
  const confirmPasswordField = document.querySelector(
    'input[placeholder="Confirm your password"]',
  );
  const helper = document.querySelector(".helper-text");

  // Toggle password visibility
  document.querySelectorAll(".toggle-icon").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      input.type = input.type === "password" ? "text" : "password";
      btn.querySelector("span").textContent =
        input.type === "password" ? "visibility" : "visibility_off";
    });
  });

  // Live password strength feedback
  passwordField.addEventListener("input", () => {
    if (
      passwordField.value.length < 8 ||
      !/[0-9]/.test(passwordField.value) ||
      !/[!@#$%^&*]/.test(passwordField.value)
    ) {
      helper.style.color = "red";
      helper.textContent =
        "Must be at least 8 characters with a number and symbol";
    } else {
      helper.style.color = "green";
      helper.textContent = "Strong password ✔";
    }
  });

  // Validation + success message + redirect
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop default form action

    if (
      !nameField.value.trim() ||
      !emailField.value.trim() ||
      !passwordField.value.trim() ||
      !confirmPasswordField.value.trim()
    ) {
      alert("All fields must be filled out.");
      return;
    }
    if (passwordField.value !== confirmPasswordField.value) {
      alert("Passwords do not match.");
      return;
    }
    if (
      passwordField.value.length < 8 ||
      !/[0-9]/.test(passwordField.value) ||
      !/[!@#$%^&*]/.test(passwordField.value)
    ) {
      alert(
        "Password must be at least 8 characters long and include a number and symbol.",
      );
      return;
    }

    // ✅ Success message
    alert("Account created successfully! Redirecting to login...");

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
});
