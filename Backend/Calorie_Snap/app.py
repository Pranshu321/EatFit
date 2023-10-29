from fastapi import FastAPI , HTTPException, File , UploadFile
from transformers import pipeline
import requests as re 
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware
import requests
from PIL import Image
from pydantic import BaseModel
from io import BytesIO

app =FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    
)


@app.get("/")
def welcome_root():
    return "Upload the food image to track the calorie"

@app.post("/upload/")
# def upload_image(image_url: ImageURL): 
def upload_image(file: UploadFile =File(...)):
    try: 
        if file :   
            image = Image.open(file.file)
            model_name = "indian_food_image_detection"
            # image = "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/tandoori-roti-recipe.jpg"
            pipe = pipeline('image-classification',model=model_name,device=0)
            pred = pipe(image)
            result = pred_label(pred)
            return result
        else:
            raise HTTPException(status_code=400, detail = "No valid image file provided")
    except:
        raise HTTPException(status_code=400, detail="Failed to process the image")
    # try:
    #     if image_url and image_url.url:
    #         # Fetch the image from the provided URL
    #         response = requests.get(image_url.url)
    #         image = Image.open(BytesIO(response.content)) 

    #         model_name = "indian_food_image_detection"
    #         pipe = pipeline('image-classification', model=model_name, device=0)
    #         pred = pipe(image)
    #         result = pred_label(pred)
    #         return result
    #     else:
    #         raise HTTPException(status_code=400, detail="No valid image URL provided")
    # except:
    #     raise HTTPException(status_code=400, detail="Failed to process the image URL")


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
