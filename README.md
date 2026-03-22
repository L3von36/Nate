# Terraline Consulting Engineers

A pixel-faithful clone of [narrative-navi-nook.lovable.app](https://narrative-navi-nook.lovable.app/) — the website of **Terraline Consulting Engineers**, an Ethiopia-based firm specializing in highway design, transport infrastructure, and geotechnical engineering.

**Live site:** https://l3von36.github.io/Nate/

---

## Tech Stack

- **React 18** + **Vite 8** — fast dev server and optimized builds
- **Tailwind CSS 3** — utility-first styling
- **React Router v6** — client-side routing
- **Lucide React** — icon library

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, client types, partnership models |
| `/about` | About — mission/vision, company overview, founders |
| `/services` | Services — full breakdown of 6 service categories |
| `/contact` | Contact — contact form and office information |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install & run locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to GitHub Pages

This repo ships with a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages on every push to `main`.

### One-time GitHub setup

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow runs automatically

The live URL will be:
```
https://<your-github-username>.github.io/Nate/
```

### Workflow file

Located at `.github/workflows/deploy.yml`. It:
1. Checks out the code
2. Sets up Node 20 with npm cache
3. Runs `npm ci` and `npm run build`
4. Uploads the `dist/` folder as a Pages artifact
5. Deploys to GitHub Pages

### Manual trigger

You can also trigger a deployment manually from **Actions → Deploy to GitHub Pages → Run workflow**.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with mobile menu
│   └── Footer.jsx       # Footer with links and contact info
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # Company overview + founders
│   ├── Services.jsx     # Service categories
│   ├── Contact.jsx      # Contact form + info
│   └── NotFound.jsx     # 404 page
├── App.jsx              # Router setup
├── main.jsx             # Entry point
└── index.css            # Tailwind + global styles
```

## Design Tokens

| Token | Value |
|-------|-------|
| Primary | `hsl(215, 55%, 20%)` — dark navy |
| Accent | `hsl(38, 80%, 55%)` — amber/gold |
| Background | `hsl(210, 20%, 98%)` — near-white |
| Heading font | Playfair Display (serif) |
| Body font | Source Sans 3 (sans-serif) |
