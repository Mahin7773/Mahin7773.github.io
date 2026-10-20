const GITHUB_USER = "Mahin7773";

// Projects; `repo` is the GitHub repository name, or null if the code isn't public.
const projects = [
  {
    name: "3D Space Shooter",
    repo: "3D-Space-Shooter",
    description: "Two-player space shooter with shooting and movement mechanics, a points system, textures and dynamic lighting.",
    tags: ["C++", "OpenGL"],
  },
  {
    name: "Omega Tech",
    repo: "Omega-Technologies",
    description: "Web application for an online computer parts store with customer accounts, cart and checkout, and an admin panel for deliveries.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    name: "GridLock",
    repo: "GridLock",
    description: "Two-player strategy game on a 6×6 grid where each move blocks nearby cells, built for the CSE 4110 Artificial Intelligence Lab. The computer opponent uses Minimax with alpha-beta pruning.",
    tags: ["Python", "PyGame"],
  },
  {
    name: "eShikkha",
    repo: "eShikkha",
    description: "Learning management system built for the CSE 3200 System Development Project.",
    tags: ["Python", "Django"],
  },
  {
    name: "Compiler Project",
    repo: "Compiler-Project",
    description: "Lexical analyzer and parser for a small language built with Flex and Bison.",
    tags: ["C", "Flex", "Bison"],
  },
  {
    name: "HishabKoi",
    repo: "HishabKoi",
    description: "Personal expense and loan tracker built for the CSE 2200 Advanced Programming Lab.",
    tags: ["Java"],
  },
  {
    name: "BPMonitor",
    repo: null,
    description: "Android app for tracking and visualizing heart rate and blood pressure data.",
    tags: ["Java", "Android", "Firebase", "SQLite"],
  },
  {
    name: "HBM",
    repo: null,
    description: "iOS app for monitoring available hospital beds in Bangladesh during the COVID-19 pandemic.",
    tags: ["Swift", "iOS", "Firebase"],
  },
  {
    name: "Peripheral Project",
    repo: "Peripheral-Project",
    description: "Hardware interfacing project for the CSE 3104 Peripherals and Interfacing Lab.",
    tags: ["C++", "Embedded"],
  },
  {
    name: "VMS",
    repo: "VMS",
    description: "Vehicle management system database design and queries.",
    tags: ["PL/SQL", "Oracle"],
  },
];

const repoUrl = (repo) => `https://github.com/${GITHUB_USER}/${repo}`;

document.getElementById("project-grid").innerHTML = projects
  .map((p) => {
    const tag = p.repo ? `a href="${repoUrl(p.repo)}" target="_blank" rel="noopener"` : "div";
    const close = p.repo ? "a" : "div";
    const repoLine = p.repo
      ? `<div class="repo">github.com/${GITHUB_USER}/${p.repo} →</div>`
      : `<div class="repo none">Repository not public</div>`;
    return `
      <${tag} class="card">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        ${repoLine}
      </${close}>`;
  })
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();

// Copy email, for visitors who don't use Gmail
const copyBtn = document.getElementById("copy-email");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("mashrur.alam73@gmail.com");
    copyBtn.textContent = "Copied";
  } catch (e) {
    copyBtn.textContent = "Copy failed";
  }
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});

// Theme toggle, remembered per browser
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const isDark =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const next = isDark ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});
