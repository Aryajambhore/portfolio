gsap.from(".project-card", {
  opacity: 0,
  scale: 0.6,
  y:30,
  duration: 0.4,
  scrollTrigger: {
    trigger:" #projects",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  }
});
gsap.from("#projects h2",{
  y:10,
  x:-10,
  rotate:5,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger:" #projects",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  }
})
