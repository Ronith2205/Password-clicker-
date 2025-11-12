function generatePassword() {
  const length = 14; // only strong passwords
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?";
  let password = "";

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  document.getElementById("password").value = password;
  checkStrength(password);
}

function checkStrength(password) {
  const strengthText = document.getElementById("strength-text");
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[@#$%&*!?]/.test(password);

  if (password.length >= 14 && hasUpper && hasLower && hasNumber && hasSymbol) {
    strengthText.textContent = "💪 Super Strong Password!";
    strengthText.style.color = "#4e9f3d";
  } else {
    strengthText.textContent = "⚠️ Weak! Try again";
    strengthText.style.color = "#ff6b6b";
  }
}

function copyPassword() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("✅ Password copied!");
}
