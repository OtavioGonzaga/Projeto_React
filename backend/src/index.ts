import exprs from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import categories from '../models/categories.json'
require('../models/Project')
const Project = mongoose.model('projects')
const app = exprs()
require('dotenv').config()
app.use(cors({origin: 'http://localhost:3000'}))
app.use(exprs.urlencoded({extended: true}))
app.use(exprs.json())
mongoose.connect('mongodb://0.0.0.0:27017/costs').then(() => console.log('Conectado ao MongoDB')).catch(err => console.log(err))
app.get('/categories', (req, res) => {
	res.json(categories.categories)
})
app.post('/createproject', (req, res) => {
	new Project(req.body).save().then(() => {
		res.status(200).send()
	}).catch(err => {
		console.log(err)
		res.status(500).send()
	})
})
const port = process.env.PORT
app.listen(port, () => console.log('Servidor ativo na porta ' + port))