from transformers import pipeline

model_name = "whatIS_thefood\indian_food_image_detection"

pipe = pipeline('image-classification',model=model_name,device=0)

image = "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/tandoori-roti-recipe.jpg"

prediction =[]
prediction.append(pipe(image)[0]['label'])
res=pipe(image)

for i in range(1, min(3, len(res))):
    diff = res[0]['score'] - res[i]['score']
    if diff < 0.05:
        prediction.append(res[i]['label'])
    else:
        break
print(prediction)