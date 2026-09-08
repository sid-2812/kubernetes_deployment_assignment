from flask import Flask, jsonify
app = Flask(__name__)
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status":"success",
        "message":"Flask backend is running"
    })

@app.route("/api/data", methods=["GET"])
def data():
    return jsonify({
        "message": "Hello from Flask backend!"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)