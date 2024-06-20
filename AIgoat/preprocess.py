import pandas as pd

# Load data
df = pd.read_csv('goat_data.csv')

# Encode categorical variables
df['gender'] = df['gender'].map({'male': 0, 'female': 1})
df['vaccinations'] = df['vaccinations'].map({'yes': 1, 'no': 0})
df['health_condition'] = df['health_condition'].map({'healthy': 0, 'sick': 1})

# Separate features and targets
X = df[['weight', 'height', 'age', 'gender', 'vaccinations']]
y_health = df['health_condition']
y_market_price = df['market_price']
y_meat_price_per_kg = df['meat_price_per_kg']
y_milk_price_per_liter = df['milk_price_per_liter']

# Save the preprocessed data for training
X.to_csv('X.csv', index=False)
y_health.to_csv('y_health.csv', index=False)
y_market_price.to_csv('y_market_price.csv', index=False)
y_meat_price_per_kg.to_csv('y_meat_price_per_kg.csv', index=False)
y_milk_price_per_liter.to_csv('y_milk_price_per_liter.csv', index=False)
print("Data preprocessed and saved")
