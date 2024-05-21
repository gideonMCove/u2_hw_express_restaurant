let specials = [
    {
        day: `Monday`,
        name: "Seafood Poutine",
        price: "$25.99",
        isVegetarian: false
    },
    {
        day: `Tuesday`,
        name: "Lamb Burger",
        price: "$29.99",
        isVegetarian: false
    },
    {
        day: `Wednesday`,
        name: "Lobster Bisque",
        price: "$18.99",
        isVegetarian: false
    },
    {
        day: `Thursday`,
        name: "Fish and Chips",
        price: "$29.99",
        isVegetarian: false
    },
    {
        day: `Friday`,
        name: "Rack of Ribs",
        price: "$39.99",
        isVegetarian: false
    },
    {
        day: `Saturday`,
        name: "Fondue",
        price: "$15.99",
        isVegetarian: true
    },
    {
        day: `Sunday`,
        name: "Pork Chops",
        price: "$27.99",
        isVegetarian: false
    },
    
]

const getSpecials = (req,res) => {
    res.send(specials)
}

const getSpecial = (req,res) =>{
    res.send(specials[req.params.id])
}

// const vegetarian = (req,res) => {
//     function vegetarianTest(value){
//         return value == true
//     }
//     let isItVegetarian = specials.filter(vegetarianTest) 
//     res.send(isItVegetarian)
// }



// const vegetarian = (req,res) => {
//     res.send(specials[req.params.id].isVegetarian == 1 )
// }

// const vegetarian = (req,res) => {
//     for (i=0; i<specials.length; i++){
//         if(specials.isVegetarian == 1)
//             res.send(specials[i])
//     }
    
// }
const vegetarian = (req,res) => {
    const vegetarianFood = specials.filter((special) => special.isVegetarian === true)

    res.send(vegetarianFood)
    
}
module.exports = {
    getSpecials,
    getSpecial,
    vegetarian
    
}