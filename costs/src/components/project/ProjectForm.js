import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from '../forms/SubmitButton'
import Input from '../forms/Input'
import Select from '../forms/Select'
export default function ProjectForm({BtnText}) {
	const [json, setJson] = useState(false)
	useEffect(() => {
		async function data() {
			const response = await axios.get('http://localhost:9074/categories')
			setJson(response.data)
		}
		data()
	}, [])
	return (
		<form>
			<Input text='Nome do Projeto' type='text' name='name' placeholder='Digite o nome do projeto...' />
			<Input text='Orçamento do projeto' type='number' name='budget' placeholder='Orçamento total do projeto...' />
			<Select text='Categoria do projeto' name='category' options={json? json : []} placeholder={json? 'Selecione uma categoria...' : 'Carregando...'} />
			<Button text={BtnText} />
		</form>
	)
}