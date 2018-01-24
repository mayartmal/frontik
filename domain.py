import json

class Person:

    def __init__(self, first_name, second_name, login):
        self.first_name = first_name
        self.second_name = second_name
        self.login = login



class PhoneBook:
    def __init__(self):
        self.persons = {}

    def append_person(self, person, phone):

        pmap = {
          'person_object': person,
          'phone': phone,
        };

        key = person.login
        self.persons[key] = pmap

    def load(self):

        with open('db.json', 'r') as f:
            result = json.load(f)

        persons = result['persons']

        for person in persons:
            first_name = person['firstName']
            second_name = person['secondName']
            login = person['login']
            phone = person['phone']
            print(first_name, second_name, login, phone)


if __name__ == '__main__':
    book = PhoneBook()
    book.load()
    #print(book.load())

# создать объектperson 
