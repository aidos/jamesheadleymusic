from flask import Flask, request, jsonify, render_template, g

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.debug = True
    from flaskext.lesscss import lesscss
    lesscss(app)
    app.run(host='0.0.0.0', port=5012)

