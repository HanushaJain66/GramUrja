from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load trained models
health_model = joblib.load('health_model.pkl')
market_price_model = joblib.load('market_price_model.pkl')
meat_price_model = joblib.load('meat_price_model.pkl')
milk_price_model = joblib.load('milk_price_model.pkl')

def preprocess_input(data):
    # Preprocess input data for prediction
    input_data = pd.DataFrame([data], columns=['weight', 'height', 'age', 'gender', 'vaccinations'])
    return input_data

@app.route('/goat_report', methods=['POST'])
def goat_report():
    try:
        data = request.json

        # Extract necessary features
        weight = data['weight']
        height = data['height']
        age = data['age']
        gender = 0 if data['gender'].lower() == 'male' else 1
        vaccinations = 1 if data['vaccinations'].lower() == 'yes' else 0

        input_data = preprocess_input({
            'weight': weight,
            'height': height,
            'age': age,
            'gender': gender,
            'vaccinations': vaccinations
        })

        # Make predictions
        health_pred = health_model.predict(input_data)
        market_price_pred = market_price_model.predict(input_data)
        meat_price_pred = meat_price_model.predict(input_data)
        milk_price_pred = milk_price_model.predict(input_data)

        # Prepare response
        response = {
            'health_condition': 'healthy' if health_pred[0] == 0 else 'sick',
            'market_price': market_price_pred[0],
            'meat_price_per_kg': meat_price_pred[0],
            'milk_price_per_liter': milk_price_pred[0]
        }

        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
