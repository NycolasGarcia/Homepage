from flask import Flask, render_template
from routes import portfolio_bp, blog_bp

app = Flask(__name__, static_folder="./static", template_folder="./templates")

app.register_blueprint(portfolio_bp)
app.register_blueprint(blog_bp)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
