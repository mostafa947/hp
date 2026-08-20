# 💕 Our Little World — Romantic Website

A beautiful, private single-page romantic website designed for GitHub Pages.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Password Screen** | Elegant lock screen with a secret code |
| 💖 **Heart Gate** | Animated pulsing heart — click to "open" your world |
| ⏳ **Live Timers** | Counting up from "The Day We Met" & "The Day We Fell in Love" |
| 📸 **Photo Gallery** | Upload and display photos via Firebase Storage |
| 💌 **Love Notes** | Post-it style notes saved in real-time via Firestore |

---

## 🚀 Quick Start

### 1. Change the Password

Open `index.html` and find:

```js
const SECRET_PASSWORD = "iloveyou"; // ← change this
```

### 2. Configure Firebase

> ⚠️ You need a free Firebase project for the gallery & notes to sync across devices.

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a project → add a **Web app**
3. Copy the `firebaseConfig` object
4. In `index.html`, replace the placeholder `firebaseConfig`:

```js
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

5. In Firebase Console:
   - Enable **Firestore Database** (start in test mode for now)
   - Enable **Storage** (start in test mode)

> **Without Firebase**, the site still works fully in **Demo Mode** — photos and notes are saved to `localStorage` on that device only.

### 3. Change the Dates

In `index.html` find the `startTimers()` call and update:

```js
const dateMet  = new Date("2026-07-21T00:00:00"); // ← your date
const dateLove = new Date("2026-08-17T00:00:00"); // ← your date
```

Also update the visible labels in the HTML:
```html
<p class="timer-date">July 21, 2026</p>
<p class="timer-date">August 17, 2026</p>
```

### 4. Deploy to GitHub Pages

```bash
# From the hp/ folder:
git init
git add .
git commit -m "💕 Initial commit — Our Little World"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then in GitHub: **Settings → Pages → Source: main branch / root** → Save.

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 🎨 Customisation

| What | Where |
|---|---|
| Colour palette | `style.css` → `:root` variables |
| Fonts | Google Fonts `<link>` in `index.html` head |
| Particle emojis | `index.html` → `const emojis = [...]` |
| Post-it colours | `index.html` → `const noteColours = [...]` |

---

## 📁 File Structure

```
hp/
├── index.html   — Main single-page app (HTML + Firebase module JS)
├── style.css    — All styles, animations, responsive rules
├── app.js       — Misc helpers (scroll animations, touch fixes)
└── README.md    — This file
```

---

*Made with 💖*
