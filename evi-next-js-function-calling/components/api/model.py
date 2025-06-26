from pydantic import BaseModel, Field, EmailStr
from datetime import datetime
from typing import Optional
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_pydantic_core_schema__(cls, source, handler):
        from pydantic_core import core_schema
        return core_schema.no_info_after_validator_function(
            cls.validate, core_schema.str_schema()
        )

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)
# ---------- USER ----------
class User(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    name: str
    email: EmailStr
    role: str  # "therapist" or "patient"
    therapist_id: Optional[str] = None  # 👈 ADD THIS LINE

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


# ---------- ITEM ----------
class Item(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    name: str
    description: str

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

# ---------- BOOKING ----------
class Booking(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    user_id: str
    item_id: str
    start_time: datetime
    end_time: datetime

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

# ---------- JOURNAL ----------
class Journal(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    user_id: str
    therapist_id: str
    content: str
    created_at: datetime

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
