# Jaydip Valiya — Personal Portfolio

> A dark, minimal, editorial-style developer portfolio built with React 19 + Vite + Tailwind CSS + Framer Motion.

**Live:** [https://jaydip-valiya.vercel.app/](https://jaydip-valiya.vercel.app/) &nbsp;·&nbsp; **Email:** jaydip.valiya.cg@gmail.com

---

## Preview

```
Dark #0a0a0a background · flowing lines animation · editorial typography
Giant split headings · iOS-style skill icons · glass folder projects
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Icons | Lucide React + Inline SVGs |
| Contact Form | EmailJS |
| Deployment | Vercel |

---

## Project Structure

```
portfolio-new/
├── public/
│   └── resume.pdf              # Resume — served at /resume.pdf
├── src/
│   ├── assets/
│   │   └── profile.jpg         # Profile photo
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav · active section tracking · mobile menu
│   │   ├── Loader.jsx          # Name reveal loader with progress bar
│   │   ├── FlowingLines.jsx    # Canvas background animation
│   │   ├── Hero.jsx            # Giant name · scrolling tech marquee · CTAs
│   │   ├── About.jsx           # Editorial layout · parallax photo · stats
│   │   ├── Journey.jsx         # Education timeline rows
│   │   ├── Skills.jsx          # iOS-style app icon grid · 3 category rows
│   │   ├── Projects.jsx        # Glass folder cards · click to open modal
│   │   ├── Certificates.jsx    # Certificate image cards · lightbox
│   │   ├── Contact.jsx         # Social links + EmailJS contact form
│   │   └── Footer.jsx          # Minimal dark footer
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme provider
│   ├── App.jsx                 # Root · scroll progress bar · loader gate
│   ├── main.jsx
│   └── index.css               # Global styles · dark base
├── index.html                  # SEO meta · OG tags · Twitter card
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jaydipvaliya/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview production build locally
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 01 | **Hero** | Full-screen intro with scrolling tech marquee |
| 02 | **About** | Editorial layout with parallax profile photo |
| 03 | **Journey** | Education timeline |
| 04 | **Skills** | iOS app icon grid — 18 technologies |
| 05 | **Projects** | Glass folder cards with 3D open hover effect |
| 06 | **Certificates** | Image cards with zoom lightbox |
| 07 | **Contact** | Social links + EmailJS contact form |

---

## Features

- **Flowing lines background** — Canvas animation of sine waves that runs across the entire page
- **Loader** — Animated name reveal with a thin progress bar
- **iOS App Grid** — Skill icons in rounded squares with brand colors, wiggle on load, scale + rotate on hover
- **Glass Folder Projects** — 3D lid-open animation reveals file names inside; click opens a modal
- **Parallax About** — Profile photo has subtle scroll parallax
- **Scroll progress bar** — Thin white line at the top tracks scroll position
- **Active nav tracking** — IntersectionObserver highlights the current section in the navbar
- **Certificate lightbox** — Click any certificate card to view full-size with a dark overlay
- **EmailJS contact form** — Form submissions sent via EmailJS (no backend required)
- **Responsive** — Mobile menu with smooth scroll navigation fix

---

## Configuring EmailJS

The contact form uses [EmailJS](https://www.emailjs.com) — free, no backend needed.

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a **service** and a **template**
3. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

---

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub first
git init && git add . && git commit -m "init"
git remote add origin https://github.com/jaydipvaliya/portfolio.git
git push -u origin main
```

Then go to [vercel.com](https://vercel.com) → Import project → Deploy.
Vercel auto-detects Vite. Zero config needed.

### Netlify (Drag & Drop)

```bash
npm run build
# Drag the /dist folder to netlify.com
```

---

## Customisation

| What | Where |
|---|---|
| Name, bio, location | `Hero.jsx`, `About.jsx` |
| Education | `Journey.jsx` → `milestones` array |
| Skills | `Skills.jsx` → `categories` array |
| Projects + links | `Projects.jsx` → `projects` array |
| Certificates | `Certificates.jsx` → `certificates` array |
| Social links | `Contact.jsx` → `socials` array |
| Profile photo | Replace `src/assets/profile.jpg` |
| Resume PDF | Replace `public/resume.pdf` |
| Background animation speed | `FlowingLines.jsx` → adjust `speed` values |

---

## License

MIT — free to use and modify. If you do use it, a credit or a star would be appreciated!

---

Made with ☕ by [Jaydip Valiya](https://github.com/jaydipvaliya)