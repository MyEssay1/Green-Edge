// ============================================================
//  GREEN EDGE LANDSCAPING – Admin Panel JS
//  Change the ADMIN_PASSWORD below to your preferred password
// ============================================================

const ADMIN_PASSWORD = "greenedge2024"; // ← CHANGE THIS

let currentData = {};

// ── AUTH ──────────────────────────────────────────────────
function login() {
  const input = document.getElementById("passwordInput").value;
  const stored = localStorage.getItem("greenedge_admin_pass") || ADMIN_PASSWORD;
  if (input === stored) {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    loadData();
  } else {
    document.getElementById("loginError").textContent = "Incorrect password. Try again.";
  }
}

function logout() {
  document.getElementById("loginScreen").classList.remove("hidden");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("passwordInput").value = "";
}

document.getElementById("passwordInput")?.addEventListener("keydown", e => {
  if (e.key === "Enter") login();
});

// ── TABS ──────────────────────────────────────────────────
function showTab(name, el) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.add("hidden"));
  document.querySelectorAll(".sidebar-nav a").forEach(a => a.classList.remove("active"));
  document.getElementById("tab-" + name)?.classList.remove("hidden");
  if (el) el.classList.add("active");
  return false;
}

// ── LOAD DATA ─────────────────────────────────────────────
function loadData() {
  currentData = getSiteData();
  // Contact
  val("f-phone1", currentData.phone1);
  val("f-phone2", currentData.phone2);
  val("f-email", currentData.email);
  val("f-location", currentData.location);
  // Hero
  val("f-heroTag", currentData.heroTag);
  val("f-heroTitle", currentData.heroTitle);
  val("f-heroSubtitle", currentData.heroSubtitle);
  val("f-heroImage", currentData.heroImage || "");
  // About
  val("f-aboutTitle", currentData.aboutTitle);
  val("f-aboutBody", currentData.aboutBody);
  val("f-aboutImage", currentData.aboutImage);
  // Services & Gallery
  renderServicesEditor(currentData.services);
  renderGalleryEditor(currentData.gallery);
}

function val(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value || "";
}

// ── SERVICES EDITOR ───────────────────────────────────────
function renderServicesEditor(services) {
  const wrap = document.getElementById("servicesEditor");
  wrap.innerHTML = services.map((s, i) => `
    <div class="card" id="svc-${i}">
      <div class="card-header">
        <span>Service ${i + 1}</span>
      </div>
      <div class="form-grid">
        <div class="field-group">
          <label>Icon (emoji)</label>
          <input type="text" id="svc-icon-${i}" value="${s.icon}" style="font-size:1.5rem;width:80px;" />
        </div>
        <div class="field-group">
          <label>Title</label>
          <input type="text" id="svc-title-${i}" value="${s.title}" />
        </div>
        <div class="field-group full">
          <label>Description</label>
          <textarea id="svc-desc-${i}" rows="3">${s.description}</textarea>
        </div>
      </div>
    </div>
  `).join("");
}

function collectServices() {
  return currentData.services.map((s, i) => ({
    id: s.id,
    icon: document.getElementById(`svc-icon-${i}`)?.value || s.icon,
    title: document.getElementById(`svc-title-${i}`)?.value || s.title,
    description: document.getElementById(`svc-desc-${i}`)?.value || s.description
  }));
}

// ── GALLERY EDITOR ────────────────────────────────────────
function renderGalleryEditor(gallery) {
  const wrap = document.getElementById("galleryEditor");
  wrap.innerHTML = gallery.map((g, i) => galleryItemHTML(g, i)).join("");
}

function galleryItemHTML(g, i) {
  return `
    <div class="card" id="gal-${i}">
      <div class="card-header">
        <span>Image ${i + 1}</span>
        <button class="btn-icon" onclick="removeGalleryItem(${i})">✕ Remove</button>
      </div>
      <div class="form-grid">
        <div class="field-group full">
          <label>Image URL or path (e.g. ../images/project1.jpg)</label>
          <input type="text" id="gal-url-${i}" value="${g.url}" placeholder="https://... or ../images/photo.jpg" />
        </div>
        <div class="field-group full">
          <label>Caption</label>
          <input type="text" id="gal-cap-${i}" value="${g.caption}" placeholder="Project description" />
        </div>
      </div>
    </div>
  `;
}

function addGalleryItem() {
  currentData.gallery.push({ url: "", caption: "New Project" });
  renderGalleryEditor(currentData.gallery);
}

function removeGalleryItem(i) {
  if (!confirm("Remove this image?")) return;
  currentData.gallery.splice(i, 1);
  renderGalleryEditor(currentData.gallery);
}

function collectGallery() {
  return currentData.gallery.map((g, i) => ({
    url: document.getElementById(`gal-url-${i}`)?.value || "",
    caption: document.getElementById(`gal-cap-${i}`)?.value || ""
  }));
}

// ── SAVE ──────────────────────────────────────────────────
function saveAll() {
  const newData = {
    ...currentData,
    phone1: document.getElementById("f-phone1")?.value || "",
    phone2: document.getElementById("f-phone2")?.value || "",
    email: document.getElementById("f-email")?.value || currentData.email,
    location: document.getElementById("f-location")?.value || currentData.location,
    heroTag: document.getElementById("f-heroTag")?.value || currentData.heroTag,
    heroTitle: document.getElementById("f-heroTitle")?.value || currentData.heroTitle,
    heroSubtitle: document.getElementById("f-heroSubtitle")?.value || currentData.heroSubtitle,
    heroImage: document.getElementById("f-heroImage")?.value || "",
    aboutTitle: document.getElementById("f-aboutTitle")?.value || currentData.aboutTitle,
    aboutBody: document.getElementById("f-aboutBody")?.value || currentData.aboutBody,
    aboutImage: document.getElementById("f-aboutImage")?.value || "",
    services: collectServices(),
    gallery: collectGallery()
  };

  saveSiteData(newData);
  currentData = newData;

  const status = document.getElementById("saveStatus");
  status.textContent = "✓ Saved successfully!";
  status.style.color = "#4caf50";
  setTimeout(() => (status.textContent = ""), 3000);
}

// ── CHANGE PASSWORD ───────────────────────────────────────
function changePassword() {
  const np = document.getElementById("f-newPass").value;
  const cp = document.getElementById("f-confirmPass").value;
  const msg = document.getElementById("passMsg");
  if (!np) { msg.textContent = "Please enter a new password."; msg.style.color = "#e53935"; return; }
  if (np !== cp) { msg.textContent = "Passwords do not match."; msg.style.color = "#e53935"; return; }
  localStorage.setItem("greenedge_admin_pass", np);
  msg.textContent = "Password updated! Remember to also update admin.js for permanent changes.";
  msg.style.color = "#4caf50";
  document.getElementById("f-newPass").value = "";
  document.getElementById("f-confirmPass").value = "";
}
