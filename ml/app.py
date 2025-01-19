from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

@app.route('/')
def home():
    return "Machine Learning Service"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame(data)
    model = LinearRegression()
    model.fit(df[['feature1', 'feature2']], df['target'])
    predictions = model.predict(df[['feature1', 'feature2']])
    return jsonify(predictions.tolist())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)