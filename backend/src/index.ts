import exprs from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import categories from './models/categories.json'
const app = exprs()
require('dotenv').config()
app.use(cors({origin: 'http://localhost:3000'}))
app.use(exprs.urlencoded({extended: true}))
app.use(exprs.json())
mongoose.connect('mongodb://0.0.0.0:27017/costs').then(() => console.log('Conectado ao MongoDB')).catch(err => console.log(err))
app.post('/createproject', (req, res) => {
	console.log(req.body)
})
const port = process.env.PORT
app.listen(port, () => console.log('Servidor ativo na porta ' + port))