# 🧾 Spring Bottom Sheet (React)

> ⚙️ \*README generated with the help of AI to save time and focus on core development.

---

## ✅ Features Implemented

- 📱 **Bottom sheet UI** with snap points: `90%`, `50%`, and `10%` of viewport height.
- 🧩 Spring **transition animation** using css tanslate.
- 👤 **User Profile View** with(these are dummy and uses random API):
  - Name, occupation, and avatar
  - About section
  - Hobbies (with emojis)
  - Favorite photos using `https://picsum.photos` API
- 📐 Fully **responsive** layout using Tailwind CSS
- 🧠 **No external motion libraries** (custom snap logic)

---

## 📸 Screens (Preview)

> ⚠️ Preview not added here, please see the deployed link.

---

## 📦 Project Structure

- `SpringSheet.jsx` – Single file containing all logic for now
  - UI rendering
  - Snap calculation
  - Tab switching
  - Content display

---

## 🧪 Things Left To Do

- 🧠 **Add Drag/Swipe Gesture**: Currently only snapping via button click. Next: Add touch/mouse drag interaction.
- 🧼 **Refactor into components**:
  - `ProfileHeader.jsx`
  - `Tabs.jsx`
  - `TabContent.jsx`

---

## 🚀 How to Run

```bash
npm install
npm start
```
