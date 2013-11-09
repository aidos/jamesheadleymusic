from flask import Flask, request, jsonify, render_template, g

app = Flask(__name__)


@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')


@app.route("/soundcloud/apprentice.html", methods=['GET'])
def apprentice():
    return render_template('apprentice.html')


@app.route("/soundcloud/shelf-life.html", methods=['GET'])
def shelf_life():
    return render_template('shelf-life.html')


@app.route("/soundcloud/jennings.html", methods=['GET'])
def jennings():
    return render_template('jennings.html')


@app.route("/soundcloud/tower.html", methods=['GET'])
def tower():
    return render_template('tower.html')


if __name__ == "__main__":
    app.debug = True
    #from flaskext.lesscss import lesscss
    #lesscss(app)
    app.run(host='0.0.0.0', port=5012)

