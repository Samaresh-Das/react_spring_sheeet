# 🧾 Spring Bottom Sheet (React)

> ⚙️ \*README generated with the help of AI to save time and focus on core development.

---

## ✅ Features Implemented

- 📱 **Bottom sheet UI** with snap points: `90%`, `50%`, and `10%` of viewport height.
- 🧩 Spring **transition animation** using css tanslate.
- 👤 **User Profile View** with(these are dummy and uses random API):
  - Name, occupation, and avatar
  - About section
  - Hobbies
  - Favorite photos using `https://picsum.photos` API. Please wait a little for the images to load.
- 📐 Fully **responsive** layout using Tailwind CSS
- 🧠 **No external motion libraries** (custom snap logic)

---

## 📸 Screens (Preview)

> ⚠️ Preview not added here, please see the deployed link.

---

## 📦 Project Structure

```bash
src/
├── assets/                     # (Optional) Static files like images or icons
├── components/
│   └── SheetContent/           # All UI content for the Bottom Sheet
│       ├── About.jsx           # About tab content
│       ├── Favorites.jsx       # Favorites tab (image grid)
│       ├── FullContent.jsx     # Combines profile, tabs, and content logic
│       ├── Hobbies.jsx         # Hobbies tab content
│       ├── ProfileCard.jsx     # User profile section
│       └── Tabs.jsx            # Tab switching UI
│   ├── Buttons.jsx             # Snap buttons (90%, 50%, 10%)
│   └── SpringSheet.jsx         # Main sheet with drag & snap logic
├── context/
│   └── DarkMode.jsx            # Dark mode context provider
├── App.jsx                     # App entry point
├── App.css                     # Global styles (if any)
├── main.jsx                    # ReactDOM render
└── .gitignore                  # Git ignored files

```

---

## 🚀 How to Run

```bash
npm install
npm run dev
```
