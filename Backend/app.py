from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # ✅ Enables CORS

model = joblib.load("career_recommender_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

@app.route("/")
def home():
    return "✅ Flask server is running. This is the Home Page!"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    binary_array = data.get("binary_array")

    if not binary_array or len(binary_array) != len(model.feature_names_in_):
        return jsonify({"error": "Invalid input length"}), 400

    # Get prediction probabilities
    probabilities = model.predict_proba([binary_array])[0]
    top_indices = probabilities.argsort()[-3:][::-1]  # Top 3 indices

    top_careers = []
    for idx in top_indices:
        career = label_encoder.inverse_transform([idx])[0]
        prob = round(probabilities[idx], 4)
        top_careers.append({"career": career, "probability": prob})

    return jsonify({"top_careers": top_careers})
# if __name__ == "__main__":
#     app.run(debug=True)

