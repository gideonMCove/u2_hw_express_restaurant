let kidsMenu = [
    {
        name: "Chicken Nuggets",
        price: "$8.99",
        isVegetarian: false
    },
    {
        name: "Cheeseburger",
        price: "9.99",        
        isVegetarian: false
    },
    {
        name: "Buttered Noodles",
        price: "$7.99",
        isVegetarian: true
    },
    
]

const getKidsMenu = (req,res) => {
    res.send(kidsMenu)
}

const getKidMenu = (req,res) =>{
    res.send(kidsMenu[req.params.id])
}

const vegetarian = (req,res) => {
    const vegetarianFood = kidsMenu.filter((kidsMenu) => kidsMenu.isVegetarian === true)

    res.send(vegetarianFood)
    
}

module.exports = {
    getKidsMenu,
    getKidMenu,
    vegetarian
}