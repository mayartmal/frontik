import codecs, json


#почему номер телефона присваивается в классе person
class ContactBook:
    def __init__(self):
        self.contacts = {}

    def append_contact(self, phone, first_name, second_name):
        self.contacts[phone] = {
            'first_name': first_name,
            'second_name': second_name
        }

    def append_contacts(self):
            contacts = self.__load_contacts('db.json')
            for phone, contact in contacts.items():
                self.append_contact(
                    phone, contact['firstName'], contact['secondName']
                )


    def __load_contacts(self, file_name):
        with open(file_name, 'r') as f:
            result = json.load(f)
        print(result['contacts'])
        return result['contacts']

    def write_contact(self, file_name, phone, first_name, second_name):
        with codecs.open(file_name, 'r', 'utf8') as f:
            result = json.load(f)
        print(result)

        result['contacts'][phone] = {
            'firstName': first_name,
            'secondName': second_name
        }

        with codecs.open(file_name, 'w', 'utf8') as f:
            dumped = json.dumps(result, indent=2, sort_keys=True)
            f.write(dumped)


if __name__ == '__main__':
    book = ContactBook()
    book.write_contact('db.json', '4567890', 'Zorg', 'Petrov')
    book.write_contact('db.json', '1212', 'Zorg', 'Petrov')


# создать объектperson
