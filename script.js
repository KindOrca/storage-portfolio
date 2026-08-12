const flowContent = {
  1: {
    step: "STEP 01",
    title: "Application",
    text: "사용자 요청과 업무 처리 과정에서 데이터 읽기·쓰기 I/O가 발생합니다."
  },
  2: {
    step: "STEP 02",
    title: "Server / OS",
    text: "운영체제는 스토리지에서 인식한 블록 디바이스를 LVM, Filesystem 등으로 구성해 애플리케이션이 사용할 수 있게 합니다."
  },
  3: {
    step: "STEP 03",
    title: "HBA",
    text: "HBA는 서버가 Fibre Channel SAN에 접속하기 위한 인터페이스이며 WWPN을 통해 SAN에서 호스트를 식별합니다."
  },
  4: {
    step: "STEP 04",
    title: "SAN Fabric",
    text: "서버와 스토리지를 직접 1:1로 연결하는 것이 아니라 SAN Switch가 중간에서 다수의 서버와 스토리지를 안정적으로 연결합니다."
  },
  5: {
    step: "STEP 05",
    title: "Storage",
    text: "스토리지에서 LUN 또는 Volume을 생성하고 Masking을 통해 허용된 호스트만 해당 스토리지를 인식할 수 있도록 제공합니다."
  },
  6: {
    step: "STEP 06",
    title: "Replication",
    text: "운영 데이터의 복제본을 Local 또는 Remote 환경에 유지하여 장애·재해 발생 시 복구 가능한 데이터 보호 체계를 구성합니다."
  }
};

const detail = document.querySelector("#flowDetail");
const flowNodes = document.querySelectorAll(".flow-node");

flowNodes.forEach((node) => {
  node.addEventListener("click", () => {
    flowNodes.forEach((n) => n.classList.remove("active"));
    node.classList.add("active");

    const item = flowContent[node.dataset.step];
    detail.innerHTML = `
      <span>${item.step}</span>
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    `;
  });
});

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
