document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("feedback");

  const correctUsername = "hemerodromos";
  const correctPassword = "500400600478";

  if(username === correctUsername && password === correctPassword){
    feedback.textContent = "Access Granted";
    feedback.style.color = "lime";
    setTimeout(() => {
      window.location.href = "welcome.html"; // go to welcome page
    }, 2000);
  } else {
    feedback.textContent = "Access Denied";
    feedback.style.color = "red";
  }

  window.addEventListener("DOMContentLoaded", () => {
    const finalKeyInput = document.getElementById("finalKey");
    finalKeyInput.value = ""; // reset
});
});
