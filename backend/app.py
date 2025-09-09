from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return "✅ Flask backend is running. Use POST /process to submit data."


@app.route("/process", methods=["POST"])
def process():
    data = request.form
    username = data.get("username")
    age = data.get("age")
    return jsonify({
        "message": "Data received successfully",
        "username": username,
        "age": age
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
