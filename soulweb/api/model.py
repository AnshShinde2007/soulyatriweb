from pydantic import BaseModel, EmailStr
from typing import Optional

class User(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str  # e.g., 'user', 'admin', 'therapist'

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    user: dict

class Booking(BaseModel):
    user_id: str
    therapist_id: str
    date: str
    time: str
    notes: Optional[str] = None

class Journal(BaseModel):
    user_id: str
    content: str
    timestamp: Optional[str] = None

class AIRequest(BaseModel):
    message: str
