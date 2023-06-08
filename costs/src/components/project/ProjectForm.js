import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from '../forms/SubmitButton'
import Input from '../forms/Input'
import Select from '../forms/Select'
export default function ProjectForm({BtnText, handleSubmit, projectData}) {
	const [project, setProject] = useState(projectData || {})
	const [json, setJson] = useState(false)
	useEffect(() => {
		async function data() {
			const response = await axios.get('http://localhost:9074/categories')
			setJson(response.data)
		}
		data()
	}, [])
	function handleProject(e) {
		setProject({...project, [e.target.name]: e.target.value})
	}
	function handleCategory(e) {
		setProject({...project, category: {
			id: e.target.value,
			name: e.target.options[e.target.selectedIndex].text
		}})
	}
	function submit(e) {
		e.preventDefault()
		handleSubmit(project)
	}
	return (
		<form onSubmit={submit}>
			<Input text='Nome do Projeto' type='text' name='name' placeholder='Digite o nome do projeto...' handleOnChange={handleProject} value={project.name? project.name : ''} />
			<Input text='Orçamento do projeto' type='number' name='budget' placeholder='Orçamento total do projeto...' handleOnChange={handleProject} value={project.budget? project.budget : ''} />
			<Select text='Categoria do projeto' name='category' options={json? json : []} placeholder={json? 'Selecione uma categoria...' : 'Carregando...'} handleOnChange={handleCategory} value={project.category? project.category.id : ''} />
			<Button text={BtnText} />
		</form>
	)
}