from fastapi import FastAPI , HTTPException, File , UploadFile
from transformers import pipeline
import requests
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def welcome_root():
    return "Upload the food image"

@app.post("/upload/")
def upload_image(file: UploadFile = File(...)): 
    try:
        if file :   
            image = Image.open(file.file)
        model_name = "indian_food_image_detection"
        # image = "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/tandoori-roti-recipe.jpg"
        pipe = pipeline('image-classification',model=model_name,device=0)
        pred = pipe(image)
        result = pred_label(pred)
        return result
    except:
        raise HTTPException(status_code=400, detail="No image or URL provided")

def pred_label(predictions):
    result = []
    # Get the top 3 labels if the difference in scores is less than 0.05, otherwise, get only the top label
    if len(predictions) > 0:
        result.append(predictions[0]['label'])
        
        for i in range(1, min(3, len(predictions))):
            diff = predictions[0]['score'] - predictions[i]['score']
            if diff < 0.05:
                result.append(predictions[i]['label'])
            else:
                break
    
    return result
