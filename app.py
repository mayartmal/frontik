from flask import Flask, render_template, jsonify
from domain import ContactBook


#__name__ - file name
app = Flask(__name__)

@app.route('/')
def index():
    #return '<h1>test</h1>'
    return render_template('index.html')

@app.route('/contacts/', methods=['GET'])
def contacts():
    #jsonify превращает .py словарь в js объект
    book = ContactBook()
    book.append_contacts()
    return jsonify(
        contacts = book.contacts
    )

app.run(debug=True, host='localhost', port=8089)
