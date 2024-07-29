from flask import Flask, request, jsonify
import joblib
import numpy as np

# Load the trained models


@app.route('/goat_report', methods=['POST'])
def goat_report():
    data = request.json
    report = generate_goat_report(data)
    return jsonify(report)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
