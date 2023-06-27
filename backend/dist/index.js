"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//Importações
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _categoriesjson = require('../models/categories.json');
//Helpers
var _FormProjectValidation = require('./helpers/FormProjectValidation'); var _FormProjectValidation2 = _interopRequireDefault(_FormProjectValidation);
//Models
require('../models/Project')
const Project = _mongoose2.default.model('projects')
//configurações
const app = _express2.default.call(void 0, )
require('dotenv').config()
app.use(_cors2.default.call(void 0, {origin: 'http://localhost:3000'}))
app.use(_express2.default.urlencoded({extended: true}))
app.use(_express2.default.json())
_mongoose2.default.connect('mongodb://0.0.0.0:27017/costs').then(() => console.log('Conectado ao MongoDB')).catch(err => console.log(err))
//Rotas
app.get('/categories', (req, res) => {
	res.json(_categoriesjson.categories)
})
app.post('/createproject', (req, res) => {
	let verification = _FormProjectValidation2.default.call(void 0, req.body.name, req.body.budget, req.body.category)
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