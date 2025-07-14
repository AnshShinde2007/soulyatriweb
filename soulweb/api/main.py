from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from model import User, Booking, Journal, AIRequest, LoginRequest, TokenResponse
from datetime import datetime, timedelta
from typing import List
from firebase_admin import credentials, firestore, initialize_app, auth
from jose import jwt, JWTError
from passlib.hash import bcrypt
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Firebase Initialization
cred = credentials.Certificate("soulyatri.json")
firebase_app = initialize_app(cred)
db = firestore.client()

# FastAPI Setup
app = FastAPI()
origins = ["http://localhost:3000", "https://soulyatri.com"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# JWT Config
SECRET_KEY = os.getenv("SECRET_KEY", "soul_yatri_secret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(token: str = Header(...)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

# Routes

@app.post("/signup")
async def signup(user: User):
    users_ref = db.collection("users")
    existing = users_ref.where("email", "==", user.email).get()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_pw = bcrypt.hash(user.password)
    user_data = user.dict()
    user_data["password"] = hashed_pw
    new_user_ref = users_ref.document()
    new_user_ref.set(user_data)
    return {"id": new_user_ref.id, "email": user.email, "role": user.role}

@app.post("/login", response_model=TokenResponse)
async def login(request: LoginRequest):
    users_ref = db.collection("users")
    result = users_ref.where("email", "==", request.email).get()
    if not result:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    user_doc = result[0]
    user_data = user_doc.to_dict()
    if not bcrypt.verify(request.password, user_data["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token_data = {"sub": user_doc.id, "email": user_data["email"], "role": user_data["role"]}
    token = create_access_token(token_data)
    return {"access_token": token, "user": {"id": user_doc.id, "email": user_data["email"], "role": user_data["role"]}}

@app.get("/me")
async def get_current_user(payload: dict = Depends(verify_token)):
    user_id = payload.get("sub")
    role = payload.get("role")

    user_ref = db.collection("users").document(user_id)
    user_doc = user_ref.get()

    if not user_doc.exists:
        raise HTTPException(status_code=404, detail="User not found")

    user_data = user_doc.to_dict()
    user_data["id"] = user_id
    return user_data

@app.post("/booking")
async def book_session(booking: Booking):
    bookings_ref = db.collection("bookings").document()
    bookings_ref.set(booking.dict())
    return {"message": "Booking successful"}

@app.get("/bookings")
async def get_bookings():
    bookings = db.collection("bookings").get()
    return [b.to_dict() for b in bookings]

@app.post("/journal")
async def submit_journal(entry: Journal):
    journals_ref = db.collection("journals").document()
    journals_ref.set(entry.dict())
    return {"message": "Journal entry saved"}

@app.get("/journals")
async def get_journals():
    journals = db.collection("journals").get()
    return [j.to_dict() for j in journals]

@app.post("/ai")
async def chat_with_ai(req: AIRequest):
    return {"response": f"You said: {req.message}"}

@app.get("/therapists")
async def get_therapists():
    therapists = db.collection("users").where("role", "==", "therapist").get()
    return [{"id": t.id, **t.to_dict()} for t in therapists]
