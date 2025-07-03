const leakedPasswords = [
  '123456', 'password', '123456789', 'qwerty', 'abc123', '123123'
];

function checkPassword() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  if (!password) {
    result.innerText = "Моля, въведи парола.";
    result.style.color = "orange";
    return;
  }

  if (leakedPasswords.includes(password)) {
    result.innerText = "⚠️ Паролата е компрометирана!";
    result.style.color = "red";
  } else if (password.length < 8) {
    result.innerText = "🔒 Паролата е слаба – използвай поне 8 символа.";
    result.style.color = "yellow";
  } else {
    result.innerText = "✅ Паролата изглежда силна.";
    result.style.color = "lightgreen";
  }
}
