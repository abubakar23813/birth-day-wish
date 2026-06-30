const titleName = "TAIYYABA KULSUM"; // Replace with the birthday person's name

const particles = document.getElementById("particles");
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = musicBtn.querySelector(".music-icon");

for (let i = 0; i < 42; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.width = `${2 + Math.random() * 4}px`;
  p.style.height = p.style.width;
  p.style.opacity = 0.15 + Math.random() * 0.6;
  p.style.animation = `float ${8 + Math.random() * 10}s ease-in-out infinite`;
  p.style.animationDelay = `${Math.random() * 8}s`;
  particles.appendChild(p);
}

const style = document.createElement("style");
style.textContent = `
@keyframes float {
  0%,100% { transform: translate3d(0,0,0) scale(1); }
  50% { transform: translate3d(${Math.random() * 20 - 10}px, -${10 + Math.random() * 20}px, 0) scale(1.15); }
}
`;
document.head.appendChild(style);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", { duration: 1.2, y: 40, opacity: 0, ease: "power3.out" });
gsap.from(".hero-title .accent", { duration: 1.2, opacity: 0, y: 22, delay: 0.3, ease: "power3.out" });
gsap.from(".hero-subtitle, .hero-actions, .scroll-hint", {
  duration: 1,
  opacity: 0,
  y: 18,
  stagger: 0.15,
  delay: 0.5,
  ease: "power3.out"
});

gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(el, { opacity: 0, y: 28 }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 82%" }
  });
});

gsap.to(".bg-image", {
  scale: 1.12,
  duration: 16,
  ease: "none",
  repeat: -1,
  yoyo: true
});

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicIcon.textContent = "❚❚";
    } else {
      music.pause();
      musicIcon.textContent = "▶";
    }
  } catch (e) {
    musicIcon.textContent = "▶";
  }
});

window.addEventListener("load", () => {
  const attemptAutoplay = async () => {
    try {
      await music.play();
      musicIcon.textContent = "❚❚";
    } catch (e) {
      musicIcon.textContent = "▶";
    }
  };
  attemptAutoplay();
});