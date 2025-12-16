# Full Stack YouTube Clone 📹✨

![Project Status](https://img.shields.io/badge/status-completed-success?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/stack-MERN-blueviolet?style=for-the-badge)

**YouTube Clone** is a robust, full-stack video streaming platform built with the MERN stack that replicates the core functionality of the real YouTube application.

This project goes beyond simple video playback; it offers a complete ecosystem for creators and viewers. Users can create channels, upload mixed media (videos, shorts, posts), manage playlists, and interact with content via likes, comments, and downloads. It features a powerful **Creator Studio** for analytics and revenue tracking, and integrates **Google Gemini AI** for intelligent, voice-activated search.

---

## 🌟 Key Features

### 📺 Core Viewer Experience
* **Comprehensive Home Feed**: Browse videos, shorts, and community posts in a familiar layout.
* **Playback & Interaction**: Watch content with full controls, like/dislike, and comment capabilities.
* **Library Management**: Save videos to "Watch Later", create playlists, and download content for offline viewing.
* **Subscriptions**: Dedicated feed to keep up with your favorite creators.
* **History**: Track previously watched videos and shorts.

### 🎥 Creator Ecosystem & Studio
* **Channel Management**: Customize channel branding, description, and details.
* **Multi-Format Uploads**: Support for standard Videos, YouTube Shorts, and Community Posts.
* **Advanced Analytics**: Visualize channel performance and engagement using **Recharts**.
* **Revenue Tracking**: Monitor estimated earnings based on content performance.
* **Content Dashboard**: Update, edit, or delete uploaded content seamlessly.

### 🧠 AI & Advanced Tech
* **AI-Powered Search**: Integrated **Google Gemini AI** enables smart search via text or voice commands to find content contextually.
* **Rate Limiting**: Protected by **Upstash Redis** to prevent abuse and ensure platform stability.
* **Secure Authentication**: Flexible login via standard Email/Password or **Google OAuth (Firebase)**.
* **Media Optimization**: All media (images, videos) is efficiently handled via **Cloudinary**.

---

## 🛠️ Tech Stack

Built with industry-standard technologies for performance, scalability, and developer experience.

| Area | Technologies |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-orange?style=for-the-badge) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) |
| **Backend** | ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![Redis](https://img.shields.io/badge/Upstash_Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) |
| **Cloud & AI** | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) ![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white) |

---

## 📸 Screenshots

A comprehensive tour through the platform's capabilities.

> **Note**: Images are referenced from the project's public folder.

### **Desktop: Authentication & User Profile**

| Register | Rate Limiting | User Profile | Create Channel |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/desktop/register.png" width="200" /> | <img src="frontend/public/screenshots/desktop/rate-limiting.png" width="200" /> | <img src="frontend/public/screenshots/desktop/profile.png" width="200" /> | <img src="frontend/public/screenshots/desktop/create-channel.png" width="200" /> |

### **Desktop: Viewing & Discovery**

| Home Feed | Video Playback | Shorts Feed | Search & AI |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/desktop/home.png" width="200" /> | <img src="frontend/public/screenshots/desktop/play-video.png" width="200" /> | <img src="frontend/public/screenshots/desktop/shorts.png" width="200" /> | <img src="frontend/public/screenshots/desktop/ai-assistant.png" width="200" /> |

| Subscriptions | Channel Page | View Channel | Create Playlist |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/desktop/subscriptions.png" width="200" /> | <img src="frontend/public/screenshots/desktop/channel-page.png" width="200" /> | <img src="frontend/public/screenshots/desktop/view-channel.png" width="200" /> | <img src="frontend/public/screenshots/desktop/create-playlist.png" width="200" /> |

### **Desktop: Creator Studio & Management**

| Dashboard | Analytics | Revenue | Update Content |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/desktop/channel-dashboard.png" width="200" /> | <img src="frontend/public/screenshots/desktop/channel-analytics.png" width="200" /> | <img src="frontend/public/screenshots/desktop/channel-revenue.png" width="200" /> | <img src="frontend/public/screenshots/desktop/update-content.png" width="200" /> |

| Upload Video | Upload Short | Create Post | Content List |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/desktop/create-video.png" width="200" /> | <img src="frontend/public/screenshots/desktop/create-short.png" width="200" /> | <img src="frontend/public/screenshots/desktop/create-post.png" width="200" /> | <img src="frontend/public/screenshots/desktop/create-content.png" width="200" /> |

### **Mobile Experience**

| Home | Video Player | Shorts | AI Assistant |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/mobile/home.jpeg" width="160" /> | <img src="frontend/public/screenshots/mobile/play-video.jpeg" width="160" /> | <img src="frontend/public/screenshots/mobile/shorts.jpeg" width="160" /> | <img src="frontend/public/screenshots/mobile/ai-assistant.jpeg" width="160" /> |

| Profile | Subscriptions | History | Channel Page |
| :---: | :---: | :---: | :---: |
| <img src="frontend/public/screenshots/mobile/profile.jpeg" width="160" /> | <img src="frontend/public/screenshots/mobile/subscriptions.jpeg" width="160" /> | <img src="frontend/public/screenshots/mobile/history.jpeg" width="160" /> | <img src="frontend/public/screenshots/mobile/channel-page.jpeg" width="160" /> |

---

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the **backend** directory.

> **⚠️ Security Warning:** The keys below are templates. **Never** commit your actual API keys to GitHub.

```env
# Server Configuration
PORT=8000

# Database Connection (MongoDB Atlas)
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/youtube-db

# Cloudinary Configuration (Media Storage)
CLOUD_NAME=your_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Authentication (JWT)
JWT_SECRET=your_super_secure_random_string

# Google Gemini AI (AI Features)
GEMINI_API_KEY=your_google_gemini_api_key

# Upstash Redis (Rate Limiting)
UPSTASH_REDIS_REST_URL=[https://your-upstash-url.upstash.io](https://your-upstash-url.upstash.io)
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

Create a `.env` file in the **frontend** directory:

```env
# Firebase API Key for Google Auth
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

---


## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
* **Node.js** (v16+)
* **MongoDB**
* **Cloudinary Account**
* **Google Cloud Account**
* **Upstash Account**

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Prajwal-dev-dsa/YOUTUBE_MERN.git
    cd ../YOUTUBE_MERN
    ```

2.  **Setup Backend (Server)**
    ```bash
    cd ../backend
    npm install
    ```

3.  **Setup Frontend (Client)**
    ```bash
    cd ../frontend
    npm install
    ```
    
4.  **Configure API Endpoint (Important)**
    To run the project locally, you must point the frontend to your local backend.
    * **Navigate to `frontend/src/app.jsx`.**
    * **Comment out the production URL and uncomment the local URL:**


    ```javascript
    // export const serverURL = "[https://youtube-mern-backend-o2a5.onrender.com](https://youtube-mern-backend-o2a5.onrender.com)";
    export const serverURL = "http://localhost:8000"
    ```
  
5.  **Run the Application**
    * **Start Backend Server:**
        ```bash
        cd ../backend
        npm run dev 
        ```
    * **Start Frontend Client:**
        ```bash
        cd ../frontend
        npm run dev
        ```
    The frontend application will typically be accessible at `http://localhost:5173`.
    
    The backend application will typically be accessible at `http://localhost:8000`.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
