from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)


# Trang chính của WebGIS
@app.route('/')
def index():
    return render_template('map.html')

if __name__ == "__main__":
    app.run(debug=True)
