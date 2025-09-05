document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const jumpBtn = document.getElementById('jumpBtn');
  const scoreEl = document.getElementById('scoreDisplay');

  // game state
  const groundY = canvas.height - 40; // y coordinate of ground baseline
  const playerSize = 30;
  const player = { x: 50, y: groundY, dy: 0, size: playerSize };
  const gravity = 0.8;

  let obstacles = [];
  let score = 0;
  let gameOver = false;

  // helper: jump
  function jump() {
    // allow jump when player is on/near the ground to avoid float equality issues
    if (player.y >= groundY - 0.5) {
      player.dy = -14;
    }
  }

  // input handlers (keyboard)
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      e.preventDefault();
      jump();
    }
  });

  // pointer (mouse/touch/stylus) on canvas to jump
  // pointerdown is preferred: supports mouse and touch
  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    jump();
  });

  // pointer on the jump button (use pointerdown so it responds quickly)
  jumpBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    jump();
  });

  // fallback for older browsers that might not support pointer events well:
  canvas.addEventListener('touchstart', (e) => {
    // prevent default so page won't scroll
    e.preventDefault();
    jump();
  }, { passive: false });

  // simple obstacle spawn and update
  function spawnObstacle() {
    const h = 20 + Math.floor(Math.random() * 15); // varied heights
    obstacles.push({ x: canvas.width, y: groundY, width: 24, height: h });
  }

  function update() {
    if (gameOver) return;

    // physics
    player.dy += gravity;
    player.y += player.dy;
    if (player.y > groundY) {
      player.y = groundY;
      player.dy = 0;
    }

    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw ground line (optional)
    ctx.strokeStyle = '#444';
    ctx.beginPath();
    ctx.moveTo(0, groundY + 2);
    ctx.lineTo(canvas.width, groundY + 2);
    ctx.stroke();

    // draw player
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y - player.size, player.size, player.size);

    // update obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const obs = obstacles[i];
      obs.x -= 6 + Math.floor(score / 200); // speed up slightly with score
      ctx.fillStyle = 'lime';
      ctx.fillRect(obs.x, obs.y - obs.height, obs.width, obs.height);

      // collision check (AABB)
      if (
        player.x < obs.x + obs.width &&
        player.x + player.size > obs.x &&
        player.y - player.size < obs.y &&
        player.y > obs.y - obs.height
      ) {
        gameOver = true;
        // simple game over handling
        alert('Game Over! Try again.');
        location.reload();
        return;
      }

      // off-screen => remove and score
      if (obs.x + obs.width < 0) {
        obstacles.splice(i, 1);
        score++;
        scoreEl.textContent = 'Score: ' + score;
      }
    }

    // goal reached?
    if (score >= 100) {
      gameOver = true;
      // show proceed button or redirect
      setTimeout(() => {
        window.location.href = 'level4.html';
      }, 300);
      return;
    }

    requestAnimationFrame(update);
  }

  // spawn obstacles interval
  const spawnInterval = setInterval(() => {
    if (!gameOver) spawnObstacle();
  }, 1500); // spawn every 1.5s (you can speed this up or down)

  // start the loop
  update();
});
