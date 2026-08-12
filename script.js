const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const presentationButton = document.querySelector("#presentationMode");
presentationButton?.addEventListener("click", () => {
  document.body.classList.toggle("presentation");
  presentationButton.textContent = document.body.classList.contains("presentation")
    ? "일반 모드"
    : "발표 모드";
});

document.addEventListener("keydown", (event) => {
  if (!document.body.classList.contains("presentation")) return;

  const sections = [...document.querySelectorAll("main > section")];
  const currentY = window.scrollY + window.innerHeight * 0.35;
  let current = 0;

  sections.forEach((section, index) => {
    if (section.offsetTop <= currentY) current = index;
  });

  if (["ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    sections[Math.min(current + 1, sections.length - 1)]?.scrollIntoView({ behavior: "smooth" });
  }

  if (["ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    sections[Math.max(current - 1, 0)]?.scrollIntoView({ behavior: "smooth" });
  }
});
