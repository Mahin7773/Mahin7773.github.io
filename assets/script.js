const GITHUB_USER = "Mahin7773";

// Thesis repository. `id` is GitHub's permanent numeric repo ID, so the link keeps
// working after a rename; `name` is only the fallback if the API can't be reached.
// Get the ID from https://api.github.com/repos/Mahin7773/<repo-name> ("id" field).
const THESIS_REPO = { id: null, name: "Thesis_Undergrad" };

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
    repo: null,
    description: "6×6 grid game with single- and multi-player modes. The AI opponent uses Minimax with alpha-beta pruning.",
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

// Thesis link: look the repo up (by ID when set, so renames don't break it) and only
// show the link once GitHub confirms it's public. A private repo stays hidden.
(async function linkThesisRepo() {
  const api = THESIS_REPO.id
    ? `https://api.github.com/repositories/${THESIS_REPO.id}`
    : THESIS_REPO.name && `https://api.github.com/repos/${GITHUB_USER}/${THESIS_REPO.name}`;
  if (!api) return;
  try {
    const res = await fetch(api);
    if (!res.ok) return;
    document.getElementById("thesis-repo").href = (await res.json()).html_url;
    document.getElementById("thesis-links").hidden = false;
  } catch (e) {}
})();

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
