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
        if (req.headers.function === "Add"){
            console.log(req);
            const newCar = req.body;
            console.log(newCar);
            cars.push(newCar);
            context.res.json(newCar);
        }
        else if (req.headers.function === "Delete"){
            const id = req.body.id;
            cars.splice(id, 1);
            context.res.json({ message: `Car with id ${id} deleted` });
        }
    }
}
