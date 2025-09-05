document.getElementById("puzzleForm").addEventListener("submit", function(e){
  e.preventDefault();

  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if(answer === "9 october 1940"){ // Change this to the actual answer hidden in IG
    feedback.textContent = "Moving to Level 3...";
    feedback.style.color = "lime";
    setTimeout(() => {
      window.location.href = "level3.html";
    }, 2000);
  } else {
    feedback.textContent = "Check that picture again...";
    feedback.style.color = "red";
  }

  window.addEventListener("DOMContentLoaded", () => {
    const finalKeyInput = document.getElementById("finalKey");
    finalKeyInput.value = ""; // reset
});

});
