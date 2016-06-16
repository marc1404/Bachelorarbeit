let nextId = 0;

class Contact {

    constructor(name, age, email, phone) {
        this.id = nextId++;
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }

    initials() {
        return this.name.split(' ').map(part => {
            return part.charAt(0);
        }).join('');
    }

}

export default [
    new Contact('Marc Vornetran', 22, 'marc@vornetran.de', '+49 160 0815'),
    new Contact('John Doe', 42, 'john.doe@gmail.com', '+49 160 42000')
];