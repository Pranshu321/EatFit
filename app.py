from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import pandas as pd
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "https://feedindia.netlify.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load your dataset
data = pd.read_csv(r'modified_indian_food.csv')

class FoodItem(BaseModel):
    name: str
    ingredients: str
    diet: str
    flavor_profile: str
    course: str
    state: str
    region: str
    image: str


@app.get("/")
def root ():
    return "Know your Food Course"


@app.get("/foods/{course}", response_model=List[str])
async def get_foods_by_course(course: str):
    selected_foods = data[data['course'] == course]
    food_items = selected_foods['name'].tolist()
    return food_items


@app.get("/food-details/{course}/{food}", response_model=FoodItem)
async def get_food_details(course: str, food: str):
    selected_food = data[(data['course'] == course) & (data['name'] == food)]
    if selected_food.empty:
        raise HTTPException(status_code=404, detail="Sorry ! Food not there in our knowledge base")
    food_details = selected_food.iloc[0].to_dict()
    return food_details


if __name__ == "__main__":   
    uvicorn.run(app, host="0.0.0.0", port=8000, reload =True)


# uvicorn app:app --reload

# ----
# dessert
# main course
# snack