document.addEventListener("DOMContentLoaded", () => {
  // Reset boxes on load
  document.querySelectorAll(".key-box").forEach(box => box.value = "");

  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("feedback");

  submitBtn.addEventListener("click", () => {
    const enteredKey = [
      document.getElementById("box1").value,
      document.getElementById("box2").value,
      document.getElementById("box3").value,
      document.getElementById("box4").value
    ].join("");

    const correctKey = "2012";

    if (enteredKey === correctKey) {
      feedback.textContent = "Congratulations - You've completed Part 2 of the Game.";
      feedback.style.color = "lime";

      setTimeout(() => {
        window.location.href = "cd-dvd.html"; // Next page
      }, 8000);
    } else {
      feedback.textContent = "Try again! Sing the song. It should all add up.";
      feedback.style.color = "red";
    }
  });
});
