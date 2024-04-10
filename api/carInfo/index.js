//create cars api using express
//const express = require('express');
//const app = express();
//app.use(express.json());
//get car by id
    //based on front-end this is not needed.
    /*app.get('/cars/:id', (req, res) => {
        const id = req.params.id;
        const car = cars.find(car => car.id === id);
        res.json(car);
    });*/

    //update car
    //based on front-end this is not needed.
    /*app.put('/cars/:id', (req, res) => {
        const id = req.params.id;
        const updatedCar = req.body;
        const index = cars.findIndex(car => car.id === id);
        cars[index] = updatedCar;
        res.json(updatedCar);
    });*/

    //delete car
    /*app.delete('/cars/:id', (req, res) => {
        const id = req.params.id;
        const index = cars.findIndex(car => car.id === id);
        cars.splice(index, 1);
        res.json({ message: `Car with id ${id} deleted` });
    });*/

    //add car
    /*pp.post('/cars', (req, res) => {
        console.log(req);
        const newCar = req.body;
        console.log(newCar);
        cars.push(newCar);
        res.json(newCar);
    });*/
    //get all cars
    /*app.get('/cars', (req, res) => {
        res.json(cars);
    });*/

let cars = [
    {
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "price": 250000
    },
    {
        "make": "Honda",
        "model": "Accord",
        "year": 2021,
        "price": 200000
    },
    {
        "make": "Ford",
        "model": "Mustang",
        "year": 2020,
        "price": 300000
    }
]

module.exports = async function (context, req) {
    
    if(req.method==="GET"){
        context.res.json(cars);
        
    }
    
    else if (req.method==="POST"){
        if (req.headers.function === "add"){
            console.log(req);
            const newCar = req.body;
            console.log(newCar);
            cars.push(newCar);
            context.res.json(newCar);
        }
        else if (req.headers.function === "delete"){
            const id = req.body.id;
            cars.splice(id, 1);
            context.res.json({ message: `Car with id ${id} deleted` });
        }
    }

    
    //start app at localhost:3001
    /*app.listen(3001, () => {
        console.log('Server started at http://localhost:3001');
    });*/
}
