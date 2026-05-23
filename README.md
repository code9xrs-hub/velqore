# 🎬 Velqore — Premium Netflix-Style Streaming Platform

<div align="center">

![Velqore Banner](https://img.shields.io/badge/Velqore-Premium%20Streaming-E50914?style=for-the-badge\&logo=netflix\&logoColor=white)
![Version](https://img.shields.io/badge/version-2.0.0-blue?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?style=for-the-badge\&logo=firebase\&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB-API-01D277?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge)

### 🚀 Modern OTT Streaming Platform with Netflix-Inspired UI & Powerful Admin Dashboard

**Live Demo:** [https://velqore.vercel.app/](https://velqore.vercel.app/)
**Admin Panel:** [https://velqore.vercel.app/admin.html](https://velqore.vercel.app/admin.html)
**Documentation:** [https://github.com/code9xrs-hub/velqore](https://github.com/code9xrs-hub/velqore)

</div>

---

# ✨ Overview

**Velqore** is a fully responsive Netflix-style movie & web series streaming platform built using **HTML, CSS, JavaScript, Firebase, and TMDB API**.

It includes:

* 🎬 Cinematic Hero Slider
* 🔥 Dynamic Trending Sections
* 🎥 Floating Video Player
* 📱 Progressive Web App (PWA)
* 🛠️ Powerful Admin Dashboard
* 🔐 User Authentication
* ❤️ Watchlist & History
* 🌙 Multiple Themes
* ⚡ Smooth Animations & Fast Performance

Designed for both **desktop and mobile devices** with a premium OTT experience.

---

# 🎯 Core Features

## 🎬 User App Features (`index.html`)

| Feature              | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| 🎞️ Hero Carousel    | Netflix-style stacked hero slider with blur effects & 3D transitions |
| 🔍 Live Search       | Real-time movie & series search                                      |
| 🎭 Categories        | Browse by genres and collections                                     |
| ❤️ My List           | Save favorite content                                                |
| 📚 Watch History     | Continue watching anytime                                            |
| 🎥 Embedded Player   | Floating video player with subtitle support                          |
| 🌙 Theme System      | Dark, AMOLED, Crimson & Midnight themes                              |
| 📱 PWA Support       | Installable mobile/desktop app                                       |
| ⚡ Smooth Scrolling   | Lenis-powered cinematic scrolling                                    |
| 🔔 Dynamic UI        | Animated cards, hover previews & transitions                         |
| 🎨 Responsive Layout | Optimized for mobile, tablet & desktop                               |

---

## 🛠️ Admin Panel Features (`admin.html`)

| Feature                     | Description                             |
| --------------------------- | --------------------------------------- |
| 🔐 Secure Admin Login       | Protected admin authentication          |
| 🎬 TMDB Integration         | Import movies/series directly from TMDB |
| ➕ CRUD Operations           | Add, edit & delete content              |
| 📂 Category Manager         | Manage genres/categories                |
| 📺 Season & Episode Control | Full web series management              |
| 🎭 Cast Management          | Add cast profiles & images              |
| 👥 User Dashboard           | View registered users                   |
| 📊 Analytics Dashboard      | Real-time stats & content overview      |
| 💾 JSON Backup Export       | Export database backups                 |
| ⚙️ Full Content Control     | Manage featured & trending sections     |

---

# 🛠️ Tech Stack

<div align="center">

| Category       | Technology                      |
| -------------- | ------------------------------- |
| Frontend       | HTML5, CSS3, Vanilla JavaScript |
| Backend        | Firebase Realtime Database      |
| Authentication | Firebase Auth                   |
| API            | TMDB API                        |
| UI Icons       | Google Material Symbols         |
| Animations     | CSS3 + JavaScript               |
| Scrolling      | Lenis Smooth Scroll             |
| PWA            | Service Worker + Web Manifest   |
| Hosting        | Firebase / Vercel / Netlify     |

</div>

---

# 📦 Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/code9xrs-hub/velqore.git
cd velqore
```

---

## 2️⃣ Configure Firebase

Create a Firebase project and add your configuration inside:

* `index.html`
* `admin.html`

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

---

## 3️⃣ Setup TMDB API

1. Create account at:
   [https://www.themoviedb.org](https://www.themoviedb.org)

2. Generate API Key

3. Add your key in `admin.html`

```javascript
const TMDB_API_KEY = "YOUR_TMDB_API_KEY";
```

---

## 4️⃣ Firebase Database Rules

Go to:

Firebase Console → Realtime Database → Rules

Paste:

```json
{
  "rules": {
    "movies": {
      ".read": true,
      ".write": true
    },
    "webseries": {
      ".read": true,
      ".write": true
    },
    "categories": {
      ".read": true,
      ".write": true
    },
    "registered_users": {
      ".read": true,
      ".write": true
    },
    "admin_credentials": {
      ".read": true,
      ".write": true
    }
  }
}
```

---

## 5️⃣ Run Project Locally

### Using VS Code Live Server

Simply open the project and start Live Server.

### Using Python

```bash
python -m http.server 8000
```

Open:

```bash
http://localhost:8000
```

---

# 🚀 Deployment

## 🔥 Firebase Hosting

```bash
npm install -g firebase-tools

firebase login

firebase init hosting

firebase deploy
```

---

## ▲ Deploy on Vercel

1. Push project to GitHub
2. Import repository in Vercel
3. Deploy instantly

---

## 🌐 Deploy on Netlify

1. Connect GitHub repository
2. Select project folder
3. Auto deploy enabled

---

# 🔑 Default Admin Credentials

| Username | Password   |
| -------- | ---------- |
| `admin`  | `admin123` |

> ⚠️ Change admin credentials immediately after first login for security.

---

# 📂 Database Structure

```plaintext
/movies
   └── movie_id
         ├── title
         ├── poster
         ├── backdrop
         ├── category
         ├── description
         ├── rating
         ├── cast
         └── video

/webseries
   └── series_id
         ├── title
         ├── seasons
         ├── episodes
         ├── cast
         └── category

/categories
   └── category_id
         └── name

/registered_users
   └── user_id
         ├── name
         ├── email
         └── password
```

---

# 🎨 UI Highlights

## 🎬 Netflix-Style Hero Section

* Cinematic backdrop
* Card stack slider
* Glassmorphism overlay
* Dynamic blur effects
* Animated CTA buttons
* Auto content rotation

---

## 📱 Progressive Web App (PWA)

Velqore works like a native app.

### Features

* 📲 Install on Android/Desktop
* ⚡ Offline support
* 🧠 Smart caching
* 🚀 Faster loading
* 🔔 Push notification ready

---

# 🌙 Theme Modes

| Theme            | Description           |
| ---------------- | --------------------- |
| 🔴 Velqore Red   | Classic OTT red theme |
| ⚫ AMOLED Black   | Pure black OLED mode  |
| 🔵 Midnight Blue | Cinematic dark blue   |
| 🔥 Crimson       | Deep red premium look |

---

# 📊 API Endpoints

Base API:

```bash
https://mirrorbox.dpdns.org/
```

| Endpoint            | Method | Description          |
| ------------------- | ------ | -------------------- |
| `/movies`           | GET    | Fetch all movies     |
| `/movies/{id}`      | GET    | Fetch single movie   |
| `/webseries`        | GET    | Fetch all web series |
| `/webseries/{id}`   | GET    | Fetch single series  |
| `/categories`       | GET    | Fetch all categories |
| `/registered_users` | GET    | Fetch all users      |

---

# 🧩 Upcoming Features

* 💳 Subscription System
* 👑 Premium Membership
* 🎟️ Rental Movies
* 🌍 Multi-language Audio
* 📝 Advanced Subtitle Support
* 📺 Chromecast Support
* 🔔 Push Notifications
* 🤖 AI Recommendations
* ☁️ Cloud Sync

---

# 🤝 Contributing

```bash
1. Fork Repository
2. Create Feature Branch
3. Commit Changes
4. Push Changes
5. Open Pull Request
```

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 🙏 Credits

| Service      | Usage                |
| ------------ | -------------------- |
| TMDB API     | Movies & TV Database |
| Firebase     | Backend & Hosting    |
| Google Fonts | Icons & Typography   |
| Lenis        | Smooth Scrolling     |

---

# 📞 Support & Community

| Platform     | Link                                              |
| ------------ | ------------------------------------------------- |
| 📧 Email     | [code9x.rs@gmail.com](mailto:code9x.rs@gmail.com) |
| 💬 Discord   | [https://discord.gg](https://discord.gg)          |
| 🐦 Twitter/X | [https://twitter.com](https://twitter.com)        |

---

# ⭐ Support the Project

If you like this project, please give it a ⭐ on GitHub and support development.

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/code9xrs-hub/velqore?style=social)
![GitHub followers](https://img.shields.io/github/followers/code9xrs-hub?style=social)

### ❤️ Made with passion by code9xrs-hub

</div>

---

# ⚡ Quick Start

```bash
git clone https://github.com/code9xrs-hub/velqore.git && cd velqore && npx serve
```

---

# 🔥 Ready to Launch

✅ Setup Firebase
✅ Configure TMDB API
✅ Deploy to Hosting
✅ Add Content from Admin Panel
✅ Launch Your OTT Platform 🚀

---

<div align="center">

# 🎬 Velqore — Stream Without Limits

### Premium Entertainment Experience for Everyone

</div>
