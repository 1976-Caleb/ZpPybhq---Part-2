document.getElementById("puzzleForm").addEventListener("submit", function(e){
  e.preventDefault();

  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if(answer === "apollo 13" || answer === "apollo13"){
    feedback.textContent = "Proceeding...";
    feedback.style.color = "lime";
    setTimeout(() => {
      window.location.href = "level2.html"; // next level
    }, 2000);
  } else {
    feedback.textContent = "Try again.";
    feedback.style.color = "red";
  }
  window.addEventListener("DOMContentLoaded", () => {
    const finalKeyInput = document.getElementById("finalKey");
    finalKeyInput.value = ""; // reset
});

});
