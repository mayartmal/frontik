from flask import Flask, render_template, jsonify

#__name__ - file name
app = Flask(__name__)

@app.route('/')
def index():
    #return '<h1>test</h1>'
    return render_template('index.html')

@app.route('/contacts/', methods=['GET'])
def contacts():
    return jsonify(
        contacts = {
            'name': 'Petro',
            'phone': '123456',
        }
    )

app.run(debug=True, host='localhost', port=8081)
