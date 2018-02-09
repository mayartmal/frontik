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
    print("Recieved user mail and pas is: " + userEmail + " " + password + "\n")
    users = Users()
    try:
        if userEmail not in users.users_list:
            raise Exception("user is not registered")
        else:
            if password != users.users_list[userEmail]:
                raise Exception("wrong password")
    except Exception as inst:
        print(str(inst))
        return('login faild: ' + str(inst))
    print("usr chek ok\n")

    k = 1;
    for email in users.users_list:
        print("Email user " + str(k) +  " is " + email + " pas is: " + users.users_list[email] + "\n")
        k = k + 1
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
