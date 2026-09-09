# Mario Gomes — Personal Linktree & About Me

A fast, minimalist, zero-dashboard About Me & Link-in-Bio website built with **Astro 7** and **Tailwind CSS v4**.

Everything is designed for **instant, seamless editing** using only `.md` files and configuration files.

---

## ⚡ How to Edit Your Content

You never need a CMS or administrative dashboard. All personal data lives in two files:

### 1. `src/content/profile.md` (Main Content File)
Edit this single markdown file to update your bio, links, and profile details:

- **Profile Info**: Name, handle, headline, avatar, location.
- **Live Status Indicator**:
  ```yaml
  status:
    indicator: "green" # "green" | "blue" | "purple" | "amber" | "red"
    text: "Available for new projects & collaborations"
  ```
- **Socials**: Quick icon bar directly below your bio (GitHub, X/Twitter, LinkedIn, BlueSky, Mail, etc.).
- **Categorized Links**: Group your links into sections (e.g., *Featured*, *Projects*, *Writing*, *Get in Touch*):
  ```yaml
  groups:
    - title: "⭐ Featured"
      items:
        - title: "My Cool Project"
          description: "A quick summary of what this is."
          url: "https://example.com"
          icon: "sparkles" # Any built-in icon or emoji
          badge: "New"
          highlight: true # Gives the card an ambient gradient border
  ```
- **About Me Body**: Everything written beneath the frontmatter (`---`) renders automatically in the **About Me** tab with full Markdown formatting, typography styling, blockquotes, code blocks, and links.

### 2. `src/site.config.ts` (Site Metadata & Theme)
Edit this config file to adjust site-wide settings:
- Site title & meta description
- Canonical URL & Open Graph social preview cards
- Default color scheme (`system`, `dark`, `light`)
- Footer text & copyright

---

## 🎨 Supported Icons
The built-in `<Icon />` component supports:
- **Social**: `github`, `twitter`, `x`, `linkedin`, `bluesky`, `youtube`, `instagram`, `discord`, `mastodon`, `threads`, `mail`, `globe`
- **UI & Tools**: `code`, `terminal`, `palette`, `newspaper`, `file-text`, `calendar`, `sparkles`, `arrow-up-right`, `external-link`, `map-pin`, `coffee`, `heart`, `rocket`
- **Emojis**: You can also use any emoji directly (e.g. `icon: "🚀"` or `icon: "🎧"`).

---

## 🛠️ Development & Deployment

### Start Dev Server
```bash
npm run dev
# Or in background mode:
# npx astro dev --background
```
Open `http://localhost:4321` in your browser. Changes to `src/content/profile.md` hot-reload instantly.

### Build for Production
```bash
npm run build
```
The output will be in `./dist/` as a static site ready to deploy anywhere (Vercel, Cloudflare Pages, Netlify, GitHub Pages, or any static host).
