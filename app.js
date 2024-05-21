const express = require('express')
const cors = (require('cors'))
const appController = require('./controllers/appetizers')
const dessertController = require('./controllers/desserts')
const entreeController = require('./controllers/entrees')
const kidsMenuController = require('./controllers/kidsMenu')
const specialsController = require('./controllers/specials')
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, ()=> {
    console.log(`listening at port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send('Super Cool and Also Unbelievebly Tasty While Being Incredibly Cheap')
})

app.get('/apps', appController.getApps)

app.get('/apps/:id', appController.getApp)

app.get('/desserts', dessertController.getDesserts)

app.get('/desserts/:id', dessertController.getDessert)

app.get('/entrees', entreeController.getEntrees)

app.get('/entrees/:id', entreeController.getEntree)

app.get('/kidsmenu', kidsMenuController.getKidsMenu)

app.get('/kidsmenu/:id', kidsMenuController.getKidMenu)

app.get('/specials', specialsController.getSpecials)

app.get('/specials/:id', specialsController.getSpecial)

app.get('/specialsvegetarian', specialsController.vegetarian)

app.get('/kidsmenuvegetarian', kidsMenuController.vegetarian)

app.get('/entreesvegetarian', entreeController.vegetarian)

app.get('/dessertsvegetarian', dessertController.vegetarian)

app.get('/appsvegetarian', appController.vegetarian)

