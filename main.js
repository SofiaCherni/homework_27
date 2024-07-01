class Person {
    residents(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(person) {
        this.residents.push(person)
        return this.residents;
    }
}

class House {
    apartments =[];
    maxApartments;

    constructor (maxApartments) {
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Будинок повний");
        }
    }
}
//екземпляри класу Person;
const person1 = new Person('Олександр', 'чоловік');
const person2 = new Person('Марія', 'жінка');
const person3 = new Person('Олег', 'чоловік');
const person4 = new Person('Марина', 'жінка');
const person5 = new Person('Софія', 'жінка');

//екземпляри класу Apartment
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();
const apartment5 = new Apartment();

//додаємо екземпляри класу Person до екземплярів класу Apartment
apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);
apartment4.addResident(person4);
apartment5.addResident(person5);

//екземпляр класу House
const house = new House(4);

//додаємо екземпляри класу Apartment до екземплярів класу House
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
house.addApartment(apartment4);
house.addApartment(apartment5);
console.log(house)