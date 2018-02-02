from flask import Flask, render_template, jsonify
from domain import ContactBook


#__name__ - file name
app = Flask(__name__)

@app.route('/')
def index():
    #return '<h1>test</h1>'
    return render_template('index.html')

@app.route('/contact_list/', methods=['GET'])
def contact_list():
    #jsonify превращает .py словарь в js объект
    book = ContactBook()
    book.get_contact_list_from_db()
    return jsonify(
        contacts = book.contact_list
    )

app.run(debug=True, host='localhost', port=8088)
