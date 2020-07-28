import os


from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def page1():
    return render_template('q1.html')


@app.route('/p2')
def page2():
    return render_template('q2.html')


if __name__ == "__main__":
    app.run(debug=True)
