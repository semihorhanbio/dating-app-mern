import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

//App Config
const app = express()
const port = process.env.PORT || 8001
const uri = '<Mongodbconnecturi>'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(uri);

//API Endpoints
app.get('/', (req, res) => {
    res.send("Hello TheWebDev")
})

app.post('/dating/cards', async (req, res) => {
    const newCard = new Cards(req.body)
    await newCard.save()
    res.status(201).json(newCard)
})

app.get('/dating/cards', async (req, res) => {
    const cards = await Cards.find()
    res.json(cards)
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
