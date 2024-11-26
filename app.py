from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

# API để cung cấp dữ liệu GeoJSON
@app.route('/data/hcm')
def hcm_data():
    geojson_path = os.path.join("data", "geojson", "hcm.geojson")
    with open(geojson_path, 'r', encoding='utf-8') as file:
        data = file.read()
    return jsonify(data)

# Trang chính của WebGIS
@app.route('/')
def index():
    return render_template('map.html')

if __name__ == "__main__":
    app.run(debug=True)
