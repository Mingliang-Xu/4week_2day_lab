const houses = require('./db.json');

let globalHouseId = 4;

module.exports = {
    
    getHouse: (req, res) =>{

        res.status(200).send(houses);
    },

    createHouse: (req, res) =>{

        const {address, price, imageURL} = req.body
        let newHouse = {
            id: globalHouseId,
            address: address,
            price: +price,
            imageURL
        }
        houses.push(newHouse);
        globalHouseId++;

        res.status(200).send(houses);
    },

    updateHouse: (req, res) =>{
        const {type} = req.body;
        let index = houses.findIndex(house => house.id === +req.params.id)
        if (type === 'minus'&& houses[index].price > 0) {
            houses[index].price -= 10000;
            res.status(200).send(houses);
        }else if (type === 'plus') {
            houses[index].price += 10000;
            res.status(200).send(houses);
        }else{
            res.status(400).send('Invalid Pricing');
        }

    },

    deleteHouse: (req, res) =>{
        let index = houses.findIndex(house => house.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);


    }

}