# 🧠 Soul Yatri — Therapist Booking & Mental Wellness System

**Soul Yatri** is a full-stack platform that bridges the gap between therapists and patients by offering a seamless booking system, journaling tools, and emotion-aware AI interactions powered by Hume. Built with **FastAPI**, **MongoDB**, and **Next.js**, it supports secure user management, session tracking, and AI-enhanced conversations.

---

## 🚀 Features

- 👤 Therapist & Patient Role-Based System
- 🗓️ Realtime Therapist Booking + Session History
- 📓 Secure Patient Journaling Interface
- 🧘 Emotion Detection with Hume API (Voice/Text)
- 📊 Therapist Dashboard to Track Patients
- 💬 Chatbot with Empathic Voice & History Logging

---

## 📁 Folder Structure
soulweb/
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── README.md
├── next-env.d.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── preview.png

├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── api/
│   │   ├── fetchWeather/route.ts
│   │   ├── gemini/route.ts
│   └── booking/
│       └── page.tsx

├── components/
│   ├── api/
│   │   ├── .env
│   │   ├── main.py
│   │   ├── model.py
│   │   └── requirements.txt
│   ├── logos/
│   │   ├── GitHub.tsx
│   │   └── Soulyatri.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   └── toggle.tsx
│   ├── Chat.tsx
│   ├── Controls.tsx
│   ├── Expressions.tsx
│   ├── Messages.tsx
│   ├── MicFFT.tsx
│   ├── Nav.tsx
│   └── StartCall.tsx

├── public/
│   ├── next.svg
│   ├── soullogo.jpg
│   └── vercel.svg

├── utils/
│   ├── expressionColors.ts
│   ├── fetchWeather.ts
│   ├── getHumeAccessToken.ts
│   └── index.ts


## 🔌 Backend API – FastAPI

> **Base URL:** `http://localhost:8000`

### 👥 Auth & User
| Method | Route              | Description                     |
|--------|--------------------|---------------------------------|
| POST   | `/users/`          | Register patient/therapist     |
| GET    | `/users/`          | Get all users                   |
| GET    | `/users/{id}`      | Fetch user by ID                |

### 🧑‍⚕️ Therapist
| Method | Route                            | Description                   |
|--------|----------------------------------|-------------------------------|
| GET    | `/therapists/`                   | List all therapists           |
| GET    | `/therapists/{id}/patients`      | Therapist’s assigned patients |

### 📅 Bookings
| Method | Route              | Description                    |
|--------|--------------------|--------------------------------|
| POST   | `/bookings/`       | Create booking                 |
| GET    | `/bookings/`       | Get all bookings               |
| GET    | `/bookings/{id}`   | Get specific booking           |

### 📓 Journals
| Method | Route                  | Description                  |
|--------|------------------------|------------------------------|
| POST   | `/journals/`           | Add journal entry            |
| GET    | `/journals/{user_id}`  | Get journals for a patient   |

### 🧠 AI: Session Summary
| Method | Route             | Description                    |
|--------|-------------------|--------------------------------|
| POST   | `/summary/`       | Generate Gemini-based summary  |

---

## 💬 Frontend UI – Next.js

- Chat UI with message bubbles, mic input, and emotion tags
- Persisted chat history via local storage or Firestore
- Therapist dashboard (sessions, patients, journals)
- Booking interface integrated with API

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/soul-yatri.git
cd soul-yatri
````

---

### 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or use `venv\Scripts\activate` on Windows
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload
```

---

### 3. Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables (`.env`)

```env
# Backend (.env)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/soulyatri
HUME_API_KEY=your_hume_secret_key
GOOGLE_API_KEY=optional_if_using_geocoding
GEMINI_API_KEY=your_gemini_key

# Frontend (.env.local)
NEXT_PUBLIC_HUME_API_PUBLIC_KEY=your_hume_public_key
```

---

## 🧪 Example API Call (Booking)

```bash
curl -X POST http://localhost:8000/bookings/ \
  -H "Content-Type: application/json" \
  -d '{"therapist_id": "abc123", "patient_id": "xyz456", "datetime": "2025-07-01T16:00:00"}'
```

---

## 🧠 Tech Stack

- 🔧 **Backend**: Python, FastAPI, MongoDB (with ODM)
- 🌐 **Frontend**: Next.js (TypeScript), Tailwind CSS
- 🧘 **AI/Voice**: Hume EVI (WebSocket), Gemini (Summarization)
- 🔐 **Auth/Storage**: JWT (TBD), Firestore/Firebase (optional)

---

## 🙌 Contribution

1. Fork the repo
2. Create a new feature branch
3. Commit your changes
4. Submit a PR with a clear description

---

## 📄 License

MIT License – see the `LICENSE` file for more details.

---

## ✨ About Soul Yatri

**Soul Yatri** is more than just a booking platform — it's a mental wellness companion that empowers therapy with emotional intelligence, giving both patients and therapists better tools for healing and connection.

```

---

Let me know if you'd like:
- A Postman collection
- Deployment section (Render + Vercel)
- Database schema diagram
- Sample `.env` templates for dev/prod

I'll be happy to include those next.
```
