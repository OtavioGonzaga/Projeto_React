//Importações
import exprs from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {categories} from '../models/categories.json'
//Helpers
import FormProjectValidation from './helpers/FormProjectValidation'
//Models
require('../models/Project')
const Project = mongoose.model('projects')
//configurações
const app = exprs()
require('dotenv').config()
app.use(cors({origin: 'http://localhost:3000'}))
app.use((req, res, next) => {
	// Configurando cabeçalhos CORS
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitindo acesso de qualquer origem
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permitindo todos os métodos HTTP
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Permitindo todos os cabeçalhos
  
	next();
  });
app.use(exprs.urlencoded({extended: true}))
app.use(exprs.json())
mongoose.connect(`${process.env.DBATLAS}`).then(() => console.log('Conectado ao MongoDB')).catch(err => console.log(err))
//Rotas
app.get('/categories', (req, res) => {
	res.json(categories)
})
app.post('/createproject', (req, res) => {
	let verification: string[] = FormProjectValidation(req.body.name, req.body.budget, req.body.category)
	if (verification.length === 0) {
		new Project(req.body).save().then(() => {
			res.status(200).send()
		}).catch(err => {
			console.log(err)
			res.status(500).send()
		})
	} else {
		res.json(verification)
	}
})
app.get('/projects', (req, res) => {
	Project.find(req.query.id? {_id: req.query.id} : {}).lean().then(prj => {
		res.json(prj)
	}).catch(err => {
		console.log(err)
		res.status(500).send()
	})
})
app.post('/editprj', (req, res) => {
	Project.findByIdAndUpdate(req.body._id, req.body, {new: true}).then(data => res.json(data)).catch(err => {
		console.error(err)
		res.status(500).send()
	})
})
app.post('/delete', (req, res) => {
	Project.findByIdAndDelete(req.body.id).then(() => res.status(200).send()).catch(err => {
		console.log(err)
		res.status(500).send()
	})
})
app.post('/services', (req, res) => {
	console.log(req.body)
	Project.findByIdAndUpdate(req.body._id, req.body, {new: true}).then(data => {
		console.log(data)
		res.json(data)
	}).catch(err => {
        console.error(err)
        res.status(500).send()
    })
})
const port = process.env.PORT
app.listen(port, () => console.log('Servidor ativo na porta ' + port))