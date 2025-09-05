window.addEventListener("DOMContentLoaded", () => {
  const cd = document.querySelector(".cd");
  const tray = document.querySelector(".dvd-tray");

  // Step 1: Slide tray out
  tray.style.transform = "translateX(20px)";

  // Step 2: After tray slides out, move CD in
  setTimeout(() => {
    cd.style.left = "320px";

    // Step 3: Close tray after CD inserted
    setTimeout(() => {
      tray.style.transform = "translateX(0)";

      // Optional: redirect to final congratulations page
      setTimeout(() => {
        window.location.href = ""; // create a final page for end game
      }, 100000);

    }, 3000);

  }, 2000);
});
