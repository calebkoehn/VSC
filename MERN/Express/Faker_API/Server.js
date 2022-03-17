const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

console.log(faker.name.firstName())

class User {
    constructor() {
        this._id = faker.datatype.number(100);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.number(100);
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}

app.get("/api/users/new", (req, res) => {
    res.json({user: new User()})
})
app.get("/api/companies/new", (req, res) => {
    res.json({company: new Company()})
})
app.get('/api/user/company', (req, res) => {
    res.json({user: new User(), company: new Company()})
})

app.listen(port, () => console.log(`Server on port: ${port}`));