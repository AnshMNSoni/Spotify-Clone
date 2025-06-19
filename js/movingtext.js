document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('pingpongText');
  const container = document.getElementById('wrapper');

  let direction = -1;
  let x = 0;
  const speed = 0.1;

  function animate() {
    x += direction * speed;
    text.style.transform = `translateX(${x}px)`;

    const textWidth = text.offsetWidth;
    const containerWidth = container.offsetWidth;

    if (x <= containerWidth - textWidth) {
      direction = 1;
    }

    if (x >= 0) {
      direction = -1;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
