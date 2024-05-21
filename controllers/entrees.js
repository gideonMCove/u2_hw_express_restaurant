let entrees = [
    {
        name: "Steak and Frites",
        price: "$49.99",
        isVegetarian: true
    },
    {
        name: "Lamb and Frites",
        price: "39.99",       
        isVegetarian: false
    },
    {
        name: "Deep Fried Turkey",
        price: "39.99",
        isVegetarian: false
    },
    {
        name: "Lamb Curry",
        price: "$25.99",
        isVegetarian: false
    },
    {
        name: "Vegetarian Curry",
        price: "$19.99",
        isVegetarian: true
    },
    {
        name: "House Spaghetti",
        price: "$19.99",
        isVegetarian: true
    }
]

const getEntrees = (req,res) => {
    res.send(entrees)
}

const getEntree = (req,res) =>{
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}