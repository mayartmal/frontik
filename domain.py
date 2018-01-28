import codecs, json


#почему номер телефона присваивается в классе person
class ContactBook:

    #конструктор класса ContactBook
    #contact_list - поле (типа словарь) в котором записан список контактов в телефонной книге
    #contsact_list хранится в RAM
    def __init__(self):
        self.contact_list = {}

    #метод, загружающий список контактов из db и добавляющий их в поле contact_list
    def get_contact_list_from_db(self):
            #переменной contacts присваивается словарь записей, полученный из
            #метода load_contacts
            contacts = self.__load_contacts('db.json')
            #в цикле происходит вызов метода append_contact для записи в поле ccontact_list
            for phone, contact in contacts.items():
                self.append_contact(
                    phone, contact['firstName'], contact['secondName']
                )

    #метод загружает файл db.json и возвращает его содержимое по
    #верхнему ключу contacts
    #этот метод приватный - доступен внутри класса (__prvt_mtd)
    def __load_contacts(self, file_name):
        with open(file_name, 'r') as f:
            result = json.load(f)
            return result['contacts']

    #метод, добавляющий запись одного контакта в поле contsct_list
    #добавление в словарь contact_list производится по ключу phone
    def append_contact(self, phone, first_name, second_name):
        self.contact_list[phone] = {
            'first_name': first_name,
            'second_name': second_name
        }

    #метод записывает новый контакт в файл db.json
    def write_contact(self, file_name, phone, first_name, second_name):
        #файл(словарь) db загружается в переменную results
        with codecs.open(file_name, 'r', 'utf8') as f:
            result = json.load(f)
        #в полученный словарь (result) по ключу верхнего уровня 'contacts' и
        #номеру телефона добавляется новая запись с именем и фамилией
        result['contacts'][phone] = {
            'firstName': first_name,
            'secondName': second_name
        }
        #файл db перезаписывается новым словарем result
        with codecs.open(file_name, 'w', 'utf8') as f:
            dumped = json.dumps(result, indent=2, sort_keys=True)
            f.write(dumped)

#WTF ??????????????????????????????????
if __name__ == '__main__':
    pass
    # book = ContactBook()
    # book.get_contact_list_from_db()
    # print(book.contact_list)
    # print(book.contact_list)
    # book.write_contact('db.json', '+7 (920) 333-33-95', 'Alla', 'Haritonova')
    # print(book.contact_list)
    # # book.write_contact('db.json', '1212', 'Zorg', 'Petrov')
