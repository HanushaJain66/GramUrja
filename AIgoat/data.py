import pandas as pd
import numpy as np

# Generate synthetic data
np.random.seed(42)

data = {
    'weight': np.random.uniform(20, 100, 1000),
    'height': np.random.uniform(0.5, 1.2, 1000),
    'age': np.random.randint(1, 10, 1000),
    'gender': np.random.choice(['male', 'female'], 1000),
    'vaccinations': np.random.choice(['yes', 'no'], 1000),
    'health_condition': np.random.choice(['healthy', 'sick'], 1000),
    'market_price': np.random.uniform(1000, 5000, 1000),
    'meat_price_per_kg': np.random.uniform(300, 600, 1000),
    'milk_price_per_liter': np.random.uniform(50, 100, 1000)
}

df = pd.DataFrame(data)
df.to_csv('goat_data.csv', index=False)
