// ============================================================
//  GREEN EDGE LANDSCAPING – Site Data
//  Edit this file OR use the Admin Panel at /admin/index.html
// ============================================================

const DEFAULT_DATA = {
  // --- CONTACT INFO ---
  phone1: "",          // e.g. "(262) 555-1234"
  phone2: "",          // e.g. "(262) 555-5678"
  email: "Greenedgelandscapingwi@gmail.com",
  location: "Washington & Waukesha County, WI",

  // --- HERO SECTION ---
  heroTag: "Washington & Waukesha County, Wisconsin",
  heroTitle: "Your Property,<br/><em>Perfected.</em>",
  heroSubtitle: "Professional landscaping & groundskeeping rooted in Wisconsin pride.",

  // --- ABOUT SECTION ---
  aboutTitle: "Green Edge Landscaping",
  aboutBody: "We are a locally owned landscaping company serving Washington and Waukesha County, Wisconsin. Our team is committed to keeping your property looking sharp through every season — from spring cleanups to ongoing maintenance. We take pride in our attention to detail and our roots in the community.",
  aboutImage: "",   // URL or relative path to about image

  // --- SERVICES ---
  services: [
    {
      id: "groundskeeping",
      icon: "🌱",
      title: "Groundskeeping",
      description: "Full-service lawn and property maintenance to keep your grounds pristine year-round. Mowing, edging, cleanup, and more."
    },
    {
      id: "mulching",
      icon: "🪵",
      title: "Mulching",
      description: "Professional mulch installation that protects your beds, retains moisture, and gives your landscape a polished, finished look."
    },
    {
      id: "tree-pruning",
      icon: "🌳",
      title: "Tree Pruning & Trimming",
      description: "Expert tree and shrub pruning to promote healthy growth, improve structure, and keep your property safe and beautiful."
    },
    {
      id: "weed-maintenance",
      icon: "🌾",
      title: "Weed Maintenance",
      description: "Targeted weed control for beds, lawns, and borders — keeping unwanted plants out so your landscape can thrive."
    }
  ],

  // --- GALLERY IMAGES ---
  // Each item: { url: "path/to/image.jpg", caption: "Caption text" }
  gallery: [
    { url: "", caption: "Groundskeeping Project" },
    { url: "", caption: "Fresh Mulch Installation" },
    { url: "", caption: "Tree Trimming" },
    { url: "", caption: "Weed Control" }
  ]
};

// Load saved data from localStorage (admin edits), fall back to defaults
function getSiteData() {
  try {
    const saved = localStorage.getItem("greenedge_data");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Deep merge: keep any new default keys not yet in saved data
      return deepMerge(DEFAULT_DATA, parsed);
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveSiteData(data) {
  localStorage.setItem("greenedge_data", JSON.stringify(data));
}

function deepMerge(defaults, overrides) {
  const result = Object.assign({}, defaults);
  for (const key of Object.keys(overrides)) {
    if (Array.isArray(overrides[key])) {
      result[key] = overrides[key];
    } else if (typeof overrides[key] === "object" && overrides[key] !== null) {
      result[key] = deepMerge(defaults[key] || {}, overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}
