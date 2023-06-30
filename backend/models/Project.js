const mongoose = require('mongoose')
const Projects = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	cost: {
		type: Number,
		required: true
	},
	description: {
		type: String
	},
	services: {
		type: Array,
		required: true
	},
	budget: {
		type: Number,
		required: true
	},
	category: {
		type: {
			name: {
				type: String,
				required: true
			},
			id: {
				type: String,
				required: true
			}
		},
		required: true
	}
})
mongoose.model('projects', Projects)