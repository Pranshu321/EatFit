# A checklist for a nutritionally balanced meal is to ensure there are sources of protein, high-fibre carbohydrates, calcium, micronutrients (vitamins & minerals), and a limited amount of sugar and salt.
import pandas as pd 
data = pd.read_csv("knowYourfood\indian_food.csv")
data = data.drop(['prep_time','cook_time'],axis=1)

replace_mapping = {
    'flavor_profile': {'-1': 'Try out yourself'},
    'course': {'-1': 'Others'},
    'state': {'-1': 'Sorry! Not Known'},
    'region': {'-1': 'Popular all over India'}
}

data = data.replace(replace_mapping)

print(f"Number of columns: {len(data.columns)}")
print("Columns:", data.columns)
print("The dataset info : ", data.info())

df1 = data[data.isna().any(axis=1)]
data.loc[110,'region'] = 'North'

for cols in ['diet','flavor_profile', 'course', 'state', 'region']:
    lst = data[cols].unique().tolist()
    print (f" the values in {cols} are : ", lst)
    
data.to_csv("modified_indian_food.csv", index=False)