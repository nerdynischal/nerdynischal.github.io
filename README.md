# 🚀 Personal Portfolio Dashboard

A modern, database-driven portfolio built with React, Supabase, and shadcn UI.
This project dynamically displays my projects and experiments in a clean, structured dashboard.

---

## ✨ Features

- 📊 **Dynamic Tables** — Data fetched from Supabase and rendered automatically
- 🎨 **Modern UI** — Built with shadcn + Tailwind CSS
- 🔗 **Live Links** — Quick access to source code and live previews
- ⚡ **Fully Static Deployment** — Hosted on GitHub Pages
- 🔄 **CI/CD** — Auto-deploy via GitHub Actions
- 🧩 **Reusable Components** — Scalable table system with configurable columns

---

## 🛠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase
- **Icons:** lucide-react + simple-icons
- **Deployment:** GitHub Pages (via GitHub Actions)

---

## ⚙️ Setup & Development

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

### 4. Run locally

```bash
npm run dev
```

---

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment.

Every push to `main`:

- builds the project
- deploys to GitHub Pages

Live site:
👉 https://nerdynischal.github.io/

---

## 🔐 Security Notes

- Uses Supabase **Row Level Security (RLS)**
- Only public `SELECT` access is enabled
- No sensitive keys are exposed

---

## 📌 Future Improvements

- Sorting & filtering
- Search functionality
- Dark mode toggle
- Mobile optimization
- Animations & transitions

---

## 🙌 Acknowledgements

- Supabase for backend services
- shadcn/ui for UI components
- Tailwind CSS for styling

---

## 📄 License

This project is open source and available under the MIT License.
