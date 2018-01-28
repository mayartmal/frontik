from flask import Flask

# экземпляр класса Flask будет WSGI (web server gateway interface) приложением
app = Flask(__name__)

#route для привязки функции к url


# для заглавной страницы
@app.route('/')
def index():
    return 'Index page'

# для страницы /hello
@app.route('/hello')
def hello():
    return 'Hello page'

#переменные части <variable_name>
@app.route('/user/<username>')
def show_user_profile(username):
    #показать профайл пользователя
    return 'User is %s' % username


if __name__ == '__main__':
    app.debug = True
    app.run()
