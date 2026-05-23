---

# 🎬 Velqore - Netflix Style Streaming Platform

<div align="center">

![Velqore Logo](https://img.shields.io/badge/Velqore-Streaming-E50914?style=for-the-badge&logo=netflix&logoColor=white)
![Version](https://img.shields.io/badge/version-2.0.0-blue?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

### 🚀 Unlimited Movies & Web Series Streaming Platform

[**Live Demo**](https://velqore.vercel.app/) · [**Admin Panel**](https://velqore.vercel.app/admin.html) · [**Documentation**](https://github.com/code9xrs-hub/velqore/blob/main/README.md)

</div>

---

## ✨ Features

### 🎯 Main App (`index.html`)
| Feature | Description |
|---------|-------------|
| 🎬 **Hero Carousel** | Netflix-style card stack with 3D animations |
| 🔍 **Search** | Real-time search for movies & series |
| 📋 **Categories** | Filter content by genre/category |
| ❤️ **My List** | Save favorites to watch later |
| 📚 **Watch History** | Track your viewing activity |
| 🎥 **Embed Player** | Floating video player with auto-hide controls |
| 🌙 **Themes** | Dark, Midnight, AMOLED, Crimson |
| 📱 **PWA Ready** | Installable on mobile devices |
| 🎨 **Responsive** | Mobile-first, desktop-optimized |

### 🛠️ Admin Panel (`admin.html`)
| Feature | Description |
|---------|-------------|
| 🔐 **Secure Login** | Admin authentication system |
| 🎬 **TMDB Integration** | Auto-fetch movies & series from TMDB |
| 📝 **CRUD Operations** | Create, read, update, delete content |
| 🗂️ **Season Management** | Add seasons & episodes |
| 🎭 **Cast Management** | Add cast members with photos |
| 📊 **Dashboard** | Real-time statistics & metrics |
| 👥 **User Management** | View registered users |
| 💾 **Data Export** | Full backup export as JSON |

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Firebase Realtime Database |
| **API** | TMDB API (The Movie Database) |
| **UI Icons** | Material Symbols (Google Fonts) |
| **Scroll** | Lenis Smooth Scroll |
| **PWA** | Service Worker, Web App Manifest |
| **Deployment** | Firebase Hosting / Netlify / Vercel |

</div>

---

## 📦 Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/code9xrs-hub/velqore.git
cd velqore
```

### 2️⃣ Setup Firebase
Create a Firebase project and add your config to `index.html` `admin.html`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT"
};
firebase.initializeApp(firebaseConfig);
```

### 3️⃣ Get TMDB API Key
1. Sign up at [themoviedb.org](https://www.themoviedb.org)
2. Request an API key
3. Update in `admin.html`:
```javascript
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
```

### 4️⃣ Apply Firebase Rules
Go to Firebase Console → Realtime Database → Rules → Paste:

```json
{
  "rules": {
    "webseries": { ".read": true, ".write": true },
    "movies": { ".read": true, ".write": true },
    "categories": { ".read": true, ".write": true },
    "registered_users": { ".read": true, ".write": true },
    "admin_credentials": { ".read": true, ".write": true }
  }
}
```

### 5️⃣ Run Locally
```bash
# Using VS Code Live Server extension
# Or using Python
python3 -m http.server 8000
```

---

## 🚀 Deployment

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically

**and other hosting platfrom**
---

## 🔑 Admin Credentials

| Field | Value |
|-------|-------|
| **Username** | `admin` |
| **Password** | `admin123` |

*⚠️ Change these in Firebase → `admin_credentials` node after first login*

---

## 📂 Database Structure

```
/webseries
  └─ {id}
      ├─ title: "Stranger Things"
      ├─ poster: "https://image.tmdb.org/t/p/..."
      ├─ backdrop: "https://..."
      ├─ category: "Sci-Fi"
      ├─ seasons: [{ name: "Season 1", episodes: [...] }]
      └─ cast: [{ name: "Millie Bobby Brown", photo: "..." }]

/movies
  └─ {id}
      ├─ title: "Inception"
      ├─ poster: "https://..."
      ├─ category: "Action"
      └─ cast: [...]

/categories
  └─ {id}
      └─ name: "Action"

/registered_users
  └─ {userId}
      ├─ name: "John Doe"
      ├─ email: "john@example.com"
      └─ password: "hashed"
```

---

## 🎮 Key Features Demo

### 🏠 Home Page
```
┌─────────────────────────────────────────────────────────────┐
│  🔥 Trending Now                     │  🔍 Search  │
│  ┌────────────────────────────────────────────────────┐      │
│  │  🎬 Hero Card with 3D Stack Animation            │      │
│  │  Title • Year • Category • Rating                │      │
│  │  ▶️ Play  │  ℹ️ More Info                        │      │
│  └────────────────────────────────────────────────────┘      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Poster 1 │ │ Poster 2 │ │ Poster 3 │ │ Poster 4 │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### 🛠️ Admin Workflow
```
1. Login → 2. Search TMDB → 3. Auto-fetch Data → 4. Save to Firebase
                           ↓
                        5. Content appears on Main App
```

---

## 📱 PWA Installation

### On Mobile (Chrome/Android)
1. Open `index.html` in Chrome
2. Click **"Add to Home Screen"**
3. Velqore installs as standalone app

### On Desktop (Chrome)
1. Click the install icon in address bar
2. Click **"Install"**

---

## 🎨 Themes

<div align="center">

| Theme | Preview |
|-------|---------|
| **Velqore Red** | 🔴 Classic Netflix red |
| **Midnight Blue** | 🔵 Dark blue gradient |
| **AMOLED Black** | ⚫ Pure black for OLED screens |
| **Crimson Red** | 🔥 Deep red accent |

</div>

---

## 📊 API Endpoints
by- https://mirrorbox.dpdns.org/
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/webseries` | GET | Fetch all web series |
| `/webseries/{id}` | GET | Fetch single series |
| `/movies` | GET | Fetch all movies |
| `/movies/{id}` | GET | Fetch single movie |
| `/categories` | GET | Fetch all categories |
| `/registered_users` | GET | Fetch users |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **TMDB API** - Movie & TV data provider
- **Firebase** - Realtime database & hosting
- **Google Fonts** - Material Icons & Inter font
- **Lenis** - Smooth scrolling library

---

## 📞 Support

| Channel | Link |
|---------|------|
| 📧 Email | code9x.rs@gmail.com |
| 🐦 Twitter | [@Velqore](https://twitter.com) |
| 💬 Discord | [Join Server](https://discord.gg) |

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

<div align="center">

[![Star on GitHub](https://img.shields.io/github/stars/code9xrs-hub/velqore?style=social)](https://github.com/code9xrs-hub/velqore)
[![Follow on GitHub](https://img.shields.io/github/followers/code9xrs-hub?style=social)](https://github.com/code9xrs-hub)

### Made with ❤️ by [code9xrs-hub]

</div>

---

## 🚀 Quick Start One-Liner

```bash
git clone https://github.com/code9xrs-hub/velqore.git && cd velqore && npx serve
```

---

## 🔥 Ready to Launch!

✅ **Step 1:** Setup Firebase  
✅ **Step 2:** Get TMDB API Key  
✅ **Step 3:** Deploy to your hosting  
✅ **Step 4:** Start adding content via Admin Panel  
✅ **Step 5:** Share with the world! 🎉

---

**Happy Streaming!** 🎬

---
