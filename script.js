// ==============================
// Part 1: Event Handling (Counter)
// ==============================
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `You clicked ${count} times.`;
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("show");
  });
});

// ==============================
// Part 3: Form Validation
// ==============================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from refreshing page
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
    signupForm.reset();
  }
});
