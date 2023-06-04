import {useState} from 'react'
import axios from 'axios'
import Button from '../forms/SubmitButton'
import Input from '../forms/Input'
import Select from '../forms/Select'
export default function ProjectForm({BtnText}) {
	const [name, setName] = useState('')
	const [orcamento, setOrc] = useState('')
	const [category, setCat] = useState('')
	async function post(e) {
		e.preventDefault()
		const formData = {
			name: name,
			orcamento: orcamento,
			category: category
		}
		try {
			const response = await axios.post("http://localhost:9074/createproject", formData)
			console.log(response)
		} catch (error) {
			console.log('Erro:\n' + error)
		}
	}
	return (
		<form onSubmit={post}>
			<Input text='Nome do Projeto' type='text' name='name' placeholder='Digite o nome do projeto...' />
			<Input text='Orçamento do projeto' type='number' name='orcamento' placeholder='Orçamento total do projeto...' />
			<Select text='Categoria do projeto' name='category' />
			<Button text={BtnText} />
		</form>
	)
}