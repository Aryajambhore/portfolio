// Smooth scrolling with Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP animations
gsap.from(".pixel-text", { opacity: 0, y: -50, duration: 1.5, ease: "power2.out" });
gsap.from(".project-card", { opacity: 0, scale: 0.5, stagger: 0.2, duration: 1.2 });

// Parallax effect
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth) * 10;
  let y = (e.clientY / window.innerHeight) * 10;
  document.getElementById("hero").style.transform = `translate(${x}px, ${y}px)`;
});
<audio id="hoverSound" src="https://www.myinstants.com/media/sounds/coin.mp3"></audio>
document.querySelectorAll('nav a, .pixel-button').forEach(el => {
  el.addEventListener('mouseenter', () => {
      document.getElementById('hoverSound').play();
  });
});