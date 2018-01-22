from flask import Flask, render_template

#__name__ - file name
app = Flask(__name__)

@app.route('/')
def index():
    #return '<h1>test</h1>'
    return render_template('index.html')

app.run(debug=True, host='localhost', port=8081)
