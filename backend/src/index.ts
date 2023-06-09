//Importações
import exprs from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import categories from '../models/categories.json'
//Helpers
import FormProjectValidation from './helpers/FormProjectValidation'
//Models
require('../models/Project')
const Project = mongoose.model('projects')
//configurações
const app = exprs()
require('dotenv').config()
app.use(cors({origin: 'http://localhost:3000'}))
app.use(exprs.urlencoded({extended: true}))
app.use(exprs.json())
mongoose.connect('mongodb://0.0.0.0:27017/costs').then(() => console.log('Conectado ao MongoDB')).catch(err => console.log(err))
//Rotas
app.get('/categories', (req, res) => {
	res.json(categories.categories)
})
app.post('/createproject', (req, res) => {
	let verification: string[] = FormProjectValidation(req.body.name, req.body.budget, req.body.category)
	if (verification.length === 0) {
		new Project(req.body).save().then(() => {
			res.sendStatus(200)
		}).catch(err => {
			console.log(err)
			res.sendStatus(500)
		})
	} else {
		res.json(verification)
	}
})
app.get('/projects', (req, res) => {
	Project.find().lean().then(prj => {
		res.send(prj)
	}).catch(err => {
		console.log(err)
		res.sendStatus(500)	
	})
})
const port = process.env.PORT
app.listen(port, () => console.log('Servidor ativo na porta ' + port))