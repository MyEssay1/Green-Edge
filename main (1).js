// ============================================================
//  GREEN EDGE LANDSCAPING – Main Site JS
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const data = getSiteData();
  applyData(data);
  initNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function applyData(data) {
  // Hero
  setText("hero-tag", data.heroTag);
  setHTML("hero-title", data.heroTitle);
  setText("hero-subtitle", data.heroSubtitle);

  // About
  setText("aboutTitle", data.aboutTitle);
  setText("aboutBody", data.aboutBody);
  if (data.aboutImage) {
    const img = document.getElementById("aboutImg");
    img.src = data.aboutImage;
    img.style.display = "block";
    document.getElementById("aboutImgPlaceholder").style.display = "none";
  }

  // Contact
  const e = document.getElementById("contactEmail");
  e.href = "mailto:" + data.email;
  e.textContent = data.email;

  applyPhone("contactPhone1", data.phone1);
  applyPhone("contactPhone2", data.phone2);
  setText("contactLocation", data.location);

  // Services
  renderServices(data.services);

  // Gallery
  renderGallery(data.gallery);
}

function applyPhone(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if (val && val.trim()) {
    el.href = "tel:" + val.replace(/\D/g, "");
    el.textContent = val;
    el.parentElement.style.display = "flex";
  } else {
    el.parentElement.style.display = "none";
  }
}

function renderServices(services) {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
    </div>
  `).join("");
}

function renderGallery(gallery) {
  const grid = document.getElementById("galleryGrid");
  const items = gallery.filter(g => g.url && g.url.trim());
  if (items.length === 0) {
    grid.innerHTML = `<p class="gallery-empty">Gallery images will appear here. Add them via the <a href="admin/index.html">Admin Panel</a>.</p>`;
    return;
  }
  grid.innerHTML = items.map(g => `
    <div class="gallery-item">
      <img src="${g.url}" alt="${g.caption}" loading="lazy" />
      <div class="gallery-caption">${g.caption}</div>
    </div>
  `).join("");
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.textContent = val;
}

function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.innerHTML = val;
}

// NAV
function initNav() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  document.querySelectorAll(".mobile-nav a").forEach(a => {
    a.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
}

// CONTACT FORM
function handleFormSubmit(e) {
  e.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Thanks! We'll be in touch soon.";
  note.style.color = "#4caf50";
  e.target.reset();
}
