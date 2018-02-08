from flask import Flask, render_template, jsonify, request
from domain import ContactBook, Users


#__name__ - file name
app = Flask(__name__)

@app.route('/')
def login():
    print('build login page')
    return render_template('login.html')

@app.route('/loginData', methods = ['POST'])
def loginData():
    print('ready2login')
    userEmail = request.form['username']
    password = request.form['password']
    print(userEmail + " " + password)
    users = Users()
    print(users.users_list)
    for id in users.users_list:
        print(users.users_list[id])  
    return('login ok')



@app.route('/contact_list/', methods=['GET'])
def contact_list():
    #jsonify превращает .py словарь в js объект
    book = ContactBook()
    book.get_contact_list_from_db()
    return jsonify(
        contacts = book.contact_list
    )

@app.route('/contact_list/new', methods = ['POST'])
def new():
    print('ready to new')
    phoneNumber = request.form['phoneNumber']
    firstName = request.form['firstName']
    secondName = request.form['secondName']
    print(phoneNumber + ' ' + firstName + ' ' + secondName)

    book = ContactBook()
    book.write_contact('db.json', phoneNumber, firstName, secondName)
    print('DONEEEEEEEEEEEEEEEEEEEEEEEEEEE')
    return '<h1>Contact is added</h1>'


app.run(debug=True, host='localhost', port=8087)
