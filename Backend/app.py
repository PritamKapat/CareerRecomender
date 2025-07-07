from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load model and label encoder
model = joblib.load("career_recommender_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

@app.route('/')
def home():
    return "✅ Flask server is running. This is the Home Page!"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    binary_array = data.get("binary_array")

    if not binary_array or len(binary_array) != len(model.feature_names_in_):
        return jsonify({"error": "Invalid input length"}), 400

    prediction = model.predict([binary_array])[0]
    career = label_encoder.inverse_transform([prediction])[0]
    return jsonify({"recommended_career": career})
