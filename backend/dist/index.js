"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const app = _express2.default.call(void 0, )
require('dotenv').config()
app.use(_cors2.default.call(void 0, {origin: 'http://localhost:3000'}))
app.use(_express2.default.urlencoded({extended: true}))
app.use(_express2.default.json())
_mongoose2.default.connect('mongodb://0.0.0.0:27017/costs').then(() => console.log('Conectado ao MongoDB')).catch(err => console.log(err))
app.post('/createproject', (req, res) => {
	console.log(req.body)
})
const port = process.env.PORT
app.listen(port, () => console.log('Servidor ativo na porta ' + port))