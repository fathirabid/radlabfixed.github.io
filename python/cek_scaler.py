import joblib

# Load scaler yang dibuat oleh train_model.py
scaler = joblib.load("python/models/esi_scaler.pkl")

print("--- SALIN ANGKA INI KE deteksi.js ---")
print("Means :", scaler.mean_.tolist())
print("Scales:", scaler.scale_.tolist())
print("-------------------------------------")