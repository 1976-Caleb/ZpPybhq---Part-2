document.getElementById("puzzleForm").addEventListener("submit", function(e){
  e.preventDefault();

  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if(answer === "xassyria"){  // Change this to your hidden Morse answer
    feedback.textContent = "Processing, Please wait...";
    feedback.style.color = "lime";
    setTimeout(() => {
      window.location.href = "intro.html";
    }, 9000);
  } else {
    feedback.textContent = "Decode the signal more carefully.";
    feedback.style.color = "red";
  }

  window.addEventListener("DOMContentLoaded", () => {
    const finalKeyInput = document.getElementById("finalKey");
    finalKeyInput.value = ""; // reset
});

});
