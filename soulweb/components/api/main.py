from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from model import User, Item, Booking, Journal
from datetime import datetime
from typing import List

app = FastAPI()

client = AsyncIOMotorClient(
    "mongodb+srv://anshshinde449:mR7zPQu1ZYEMX9MN@cluster0.eytu0pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
db = client["soulyatri"]

# ---------------- USERS ----------------
@app.post("/users/", response_model=User)
async def create_user(user: User):
    existing = await db.users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")
    user_doc = user.dict(by_alias=True, exclude={"id"})
    result = await db.users.insert_one(user_doc)
    user_doc["_id"] = str(result.inserted_id)
    return User(**user_doc)

@app.get("/users/", response_model=List[User])
async def get_all_users():
    users = await db.users.find().to_list(100)
    for user in users:
        user["_id"] = str(user["_id"])
    return [User(**u) for u in users]

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: str):
    try:
        user = await db.users.find_one({"_id": ObjectId(user_id)})
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid user ID")
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["_id"] = str(user["_id"])
    return User(**user)
@app.get("/therapists/", response_model=List[User])
async def get_all_therapists():
    therapists = await db.users.find({"role": "therapist"}).to_list(100)
    for t in therapists:
        t["_id"] = str(t["_id"])
    return [User(**t) for t in therapists]
@app.get("/therapists/{therapist_id}/patients", response_model=List[User])
async def get_patients_for_therapist(therapist_id: str):
    patients = await db.users.find({
        "role": "patient",
        "therapist_id": therapist_id
    }).to_list(100)

    for p in patients:
        p["_id"] = str(p["_id"])
    
    return [User(**p) for p in patients]

# ---------------- ITEMS (Therapists) ----------------
@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    item_doc = item.dict(by_alias=True, exclude={"id"})
    result = await db.items.insert_one(item_doc)
    item_doc["_id"] = str(result.inserted_id)
    return Item(**item_doc)

@app.get("/items/", response_model=List[Item])
async def get_all_items():
    items = await db.items.find().to_list(100)
    for item in items:
        item["_id"] = str(item["_id"])
    return [Item(**i) for i in items]

@app.get("/items/{item_id}", response_model=Item)
async def get_item(item_id: str):
    try:
        item = await db.items.find_one({"_id": ObjectId(item_id)})
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid item ID")
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item["_id"] = str(item["_id"])
    return Item(**item)

# ---------------- BOOKINGS ----------------
@app.post("/bookings/", response_model=Booking)
async def create_booking(booking: Booking):
    conflicts = await db.bookings.find_one({
        "item_id": booking.item_id,
        "start_time": {"$lt": booking.end_time},
        "end_time": {"$gt": booking.start_time}
    })
    if conflicts:
        raise HTTPException(status_code=400, detail="Time slot already booked")
    booking_doc = booking.dict(by_alias=True, exclude={"id"})
    result = await db.bookings.insert_one(booking_doc)
    booking_doc["_id"] = str(result.inserted_id)
    return Booking(**booking_doc)

@app.get("/bookings/", response_model=List[Booking])
async def get_all_bookings():
    bookings = await db.bookings.find().to_list(100)
    for b in bookings:
        b["_id"] = str(b["_id"])
    return [Booking(**b) for b in bookings]

@app.get("/bookings/{booking_id}", response_model=Booking)
async def get_booking(booking_id: str):
    try:
        booking = await db.bookings.find_one({"_id": ObjectId(booking_id)})
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid booking ID")
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    booking["_id"] = str(booking["_id"])
    return Booking(**booking)

# ---------------- JOURNAL ----------------
@app.post("/journals/", response_model=Journal)
async def create_journal(journal: Journal):
    journal_doc = journal.dict(by_alias=True, exclude={"id"})
    result = await db.journals.insert_one(journal_doc)
    journal_doc["_id"] = str(result.inserted_id)
    return Journal(**journal_doc)

@app.get("/journals/", response_model=List[Journal])
async def get_all_journals():
    journals = await db.journals.find().to_list(100)
    for j in journals:
        j["_id"] = str(j["_id"])
    return [Journal(**j) for j in journals]

# ---------------- AVAILABILITY CHECK ----------------
@app.get("/items/{item_id}/availability")
async def check_availability(item_id: str, start_time: datetime, end_time: datetime):
    conflicts = await db.bookings.find_one({
        "item_id": ObjectId(item_id),
        "start_time": {"$lt": end_time},
        "end_time": {"$gt": start_time}
    })
    return {"available": not bool(conflicts)}