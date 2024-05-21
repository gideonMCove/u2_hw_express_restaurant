let apps = [
    {
        name: "Fried Mozzarella Sticks",
        price: "$11.99",
        isVegetarian: true
    },
    {
        name: "Wings",
        price: "13.99",
        sauces: [
            "Buffalo","Honey Garlic", "BBQ", "Asian Fusion", "Chili"
        ],
        isVegetarian: false
    },
    {
        name: "Fried Pickle Sticks",
        price: "$11.99",
        isVegetarian: true
    },
    {
        name: "Fried Calamari",
        price: "$14.99",
        isVegetarian: false
    },
    {
        name: "Escargot",
        price: "$14.99",
        isVegetarian: false
    },
    {
        name: "Spring Rolls",
        price: "$12.99",
        isVegetarian: true
    }
]

const getApps = (req,res) => {
    res.send(apps)
}

const getApp = (req,res) =>{
    res.send(apps[req.params.id])
}

module.exports = {
    getApps,
    getApp
}