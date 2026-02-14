<<<<<<< Updated upstream
# 🚀 FSDC Website - Project Overview

This documentation covers the technical architecture and features of the official website for the **Full Stack Development Club (FSDC)**, from the high-impact **Homepage** to the elite **Team Roster**.

---

## 🎨 Visual Identity & UI/UX
The website follows a "Techno-Neon" aesthetic, utilizing a deep \`#050505\` background with vibrant purple (\`#a855f7\`) accents.

* **Aurora Engine**: A custom GPU-accelerated background that creates a fluid, deep-space aurora effect across all pages.
* **Page Transitions**: Smooth Framer Motion-based entry/exit animations for a seamless "Single Page Application" feel.
* **Reveal-on-Scroll**: Components use Intersection Observers to slide or fade into view as the user scrolls.

---

## 🏠 Modules Overview

### 1. Landing & Homepage
* **Hero Section**: Bold typography with a focus on "Innovation" and "Development".
* **Navigation**: A glassmorphic header that adapts its transparency based on scroll position.

### 2. Team Page (Executive Council)
The flagship feature of the site, showcasing leadership with an elite interactive experience:

* **Coverflow Swiper**: A 3D-rotating carousel that brings the active profile card to the forefront.
* **Accumulating Timeline (PC)**: A custom progress indicator where dots fill with color as the user swipes.
    * **Logic**: Uses CSS sibling selectors (\`:has(~ .active)\`) to highlight all "past" dots.
    * **Reset**: Automatically clears all color when the user loops back from the last member to the first.
* **Timed Progress Bar**: The active dot expands into a 60px bar that fills in real-time based on autoplay delay.
* **Mobile Adaptive**: The timeline is automatically hidden on mobile devices (under 768px) to prioritize card visibility.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js |
| **Styling** | Tailwind CSS |
| **Slider** | Swiper.js (Autoplay, Coverflow, Pagination) |
| **Icons** | Lucide React |
| **Animations** | Framer Motion & CSS Sibling Logic |

---

## 📁 Project Structure

```
src/
├── assets/          # Compressed images for team/mentors
├── components/      # Reusable UI (Aurora, ProfileCard, PageTransition)
├── pages/           # Main route views (Homepage, TeamPage)
└── App.jsx          # Route management
=======
# FSDC Official Website — Frontend

**Frontend for the FSDC official website.** Built with React + Vite and Tailwind CSS, this repo contains the single-page frontend used to present the organization, team, and contact pages.

---

## 🚀 Quick overview

- Framework: **React 19** (Vite)
- Styling: **Tailwind CSS** + PostCSS
- Animations: **Framer Motion**
- Routing: **react-router-dom**
- Other notable libs: **lucide-react**, **ogl** (WebGL), **swiper**, **shadcn**

---

## 💻 Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 (or the URL shown in the terminal)

> ⚠️ If you change Tailwind config or PostCSS settings, restart the dev server.

---

## 📦 Production build

- Create an optimized build:

  ```bash
  npm run build
  ```

- Preview the production build locally:

  ```bash
  npm run preview
  ```

---

## 🔧 Available scripts

- `npm run dev` — start Vite development server
- `npm run build` — build for production
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint

---

## 🗂 Project structure

```
src/
 ├─ assets/       # images, team/members data
 ├─ components/   # reusable UI components (NavBar, Footer, ProfileCard, etc.)
 ├─ pages/        # route pages (HomePage, TeamPage, ContactPage)
 ├─ App.jsx       # app routes and top-level layout
 └─ main.jsx      # app entry
>>>>>>> Stashed changes
```

---

<<<<<<< Updated upstream
## 🚀 Future Roadmap
* **Events Module**: Integration with a backend for live event updates.
* **Contact System**: Secure form handling for club inquiries.
* **Mobile Enhancements**: Further touch-gesture optimizations for navigation.
=======
## ⚙️ Environment

- Use a `.env` file at project root for environment-specific variables (e.g. API base URLs). Example keys and usage will depend on deployment targets.

---

## ✅ Recommendations & notes

- ESLint is configured; run `npm run lint` before commits.
- Keep UI components small and focused — many components are already split (e.g., `ProfileCard`, `FeatureCard`).
- If you add heavy WebGL or large assets, consider lazy-loading or code-splitting for performance.

---

## 🤝 Contributing

- Open issues for bugs or feature requests.
- Send pull requests against the `main` branch with a clear PR description.

---

## 📄 License

No license specified in this repository. Check with the project maintainers (or add a `LICENSE` file) before reusing code.

---

## 📬 Contact

For questions about this repo, reach out to the project maintainers or open an issue.

**Happy hacking!** ✨
>>>>>>> Stashed changes
