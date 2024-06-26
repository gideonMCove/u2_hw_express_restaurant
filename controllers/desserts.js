let desserts = [
    {
        name: "Fried Ice Cream",
        price: "$11.99",
        isVegetarian: true
    },
    {
        name: "Creme Brule",
        price: "13.99",       
        isVegetarian: true
    },
    {
        name: "Chocolate Gateau",
        price: "$15.99",
        isVegetarian: true
    },
    {
        name: "Pie",
        price: "$14.99",
        isVegetarian: false
    },
   
]

const getDesserts = (req,res) => {
    res.send(desserts)
}

const getDessert = (req,res) =>{
    res.send(desserts[req.params.id])
}

const vegetarian = (req,res) => {
    const vegetarianFood = desserts.filter((dessert) => dessert.isVegetarian === true)

    res.send(vegetarianFood)
    
}

module.exports = {
    getDesserts,
    getDessert,
    vegetarian
}