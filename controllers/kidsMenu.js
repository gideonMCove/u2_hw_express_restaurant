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

module.exports = {
    getKidsMenu,
    getKidMenu
}