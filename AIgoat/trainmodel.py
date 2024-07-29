import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.metrics import accuracy_score, mean_squared_error
import joblib

# Load the preprocessed data
X = pd.read_csv('X.csv')
y_health = pd.read_csv('y_health.csv')
y_market_price = pd.read_csv('y_market_price.csv')
y_meat_price_per_kg = pd.read_csv('y_meat_price_per_kg.csv')
y_milk_price_per_liter = pd.read_csv('y_milk_price_per_liter.csv')

# Split data for health condition model
X_train_health, X_test_health, y_train_health, y_test_health = train_test_split(X, y_health, test_size=0.2, random_state=42)

# Split data for market price model
X_train_market, X_test_market, y_train_market_price, y_test_market_price = train_test_split(X, y_market_price, test_size=0.2, random_state=42)

# Split data for meat price per kg model
X_train_meat, X_test_meat, y_train_meat_price_per_kg, y_test_meat_price_per_kg = train_test_split(X, y_meat_price_per_kg, test_size=0.2, random_state=42)

# Split data for milk price per liter model
X_train_milk, X_test_milk, y_train_milk_price_per_liter, y_test_milk_price_per_liter = train_test_split(X, y_milk_price_per_liter, test_size=0.2, random_state=42)

# Train health condition model
health_model = RandomForestClassifier()
health_model.fit(X_train_health, y_train_health)
health_predictions = health_model.predict(X_test_health)
health_accuracy = accuracy_score(y_test_health, health_predictions)

# Train market price model
market_price_model = RandomForestRegressor()
market_price_model.fit(X_train_market, y_train_market_price)
market_price_predictions = market_price_model.predict(X_test_market)
market_price_mse = mean_squared_error(y_test_market_price, market_price_predictions)

# Train meat price per kg model
meat_price_model = RandomForestRegressor()
meat_price_model.fit(X_train_meat, y_train_meat_price_per_kg)
meat_price_predictions = meat_price_model.predict(X_test_meat)
meat_price_mse = mean_squared_error(y_test_meat_price_per_kg, meat_price_predictions)

# Train milk price per liter model
milk_price_model = RandomForestRegressor()
milk_price_model.fit(X_train_milk, y_train_milk_price_per_liter)
milk_price_predictions = milk_price_model.predict(X_test_milk)
milk_price_mse = mean_squared_error(y_test_milk_price_per_liter, milk_price_predictions)

# Output model performance
print(f'Health Model Accuracy: {health_accuracy:.2f}')
print(f'Market Price Model MSE: {market_price_mse:.2f}')
print(f'Meat Price Model MSE: {meat_price_mse:.2f}')
print(f'Milk Price Model MSE: {milk_price_mse:.2f}')

# Save models
joblib.dump(health_model, 'health_model.pkl')
joblib.dump(market_price_model, 'market_price_model.pkl')
joblib.dump(meat_price_model, 'meat_price_model.pkl')
joblib.dump(milk_price_model, 'milk_price_model.pkl')
print("Models trained and saved")
