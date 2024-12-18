from flask import Flask, render_template, jsonify, send_from_directory
import os

app = Flask(__name__)


# Trang chính của WebGIS
@app.route('/')
def index():
    return render_template('map.html')

# Route để phục vụ dữ liệu từ thư mục 'data'
@app.route('/data/<path:filename>')
def serve_data(filename):
    return send_from_directory('data', filename)

if __name__ == "__main__":
    app.run(debug=True)
