# Green Edge Landscaping Website

A complete, professional website for Green Edge Landscaping — Washington & Waukesha County, WI.

---

## 📁 File Structure

```
greenedge/
├── index.html          ← Main website homepage
├── css/
│   └── style.css       ← Website styles
├── js/
│   ├── data.js         ← All editable content defaults
│   └── main.js         ← Site behavior
├── admin/
│   ├── index.html      ← Admin panel (login protected)
│   ├── admin.js        ← Admin logic
│   └── admin.css       ← Admin styles
├── images/             ← Upload your photos here
│   ├── hero.jpg        ← Hero background image
│   ├── about.jpg       ← About section photo
│   └── (gallery images...)
└── README.md
```

---

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub repository** (e.g. `greenedge-website`)
2. **Upload all files** from this folder into the repository root
3. Go to **Settings → Pages**
4. Set **Source** to `main` branch, `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/greenedge-website/`

---

## 🔒 Admin Panel

- **URL:** `yoursite.com/admin/`
- **Default password:** `greenedge2024`

### To change the password permanently:
Open `admin/admin.js` and change line 3:
```js
const ADMIN_PASSWORD = "your-new-password";
```

---

## 📸 Adding Photos

1. Add image files to the `images/` folder in your GitHub repository
2. Go to your Admin Panel → Hero, About, or Gallery section
3. Enter the image path, e.g.: `../images/hero.jpg` or `images/hero.jpg`

**Recommended image sizes:**
- Hero background: 1920×1080px (landscape)
- About photo: 800×600px
- Gallery photos: 800×600px

---

## ✏️ What You Can Edit in the Admin Panel

| Section | What you can change |
|---|---|
| Contact Info | Phone 1, Phone 2, Email, Location |
| Hero | Tag line, headline, subtitle, background image |
| About | Title, description text, photo |
| Services | Icon, title, description for each service |
| Gallery | Add/remove photos and captions |
| Password | Change admin login password |

---

## 📞 Contact

- **Email:** Greenedgelandscapingwi@gmail.com
- **Service Area:** Washington & Waukesha County, Wisconsin
