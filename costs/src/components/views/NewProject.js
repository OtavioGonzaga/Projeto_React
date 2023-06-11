import {useNavigate} from 'react-router-dom'
import style from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import axios from 'axios'
export default function NewProject() {
	const history = useNavigate()
	async function CreatePost(project) {
		project.cost = 0
		project.services = []
		project.budget = Number(project.budget) || 0
		const res = await axios.post("http://localhost:9074/createproject", project)
		console.log(res.data)
		if (res.status === 200) {
			history('/projetos', {state: {message: 'Projeto criado com sucesso!', type:'success'}})
		} else if (res.status === 500) {
			history('/', {state: {message: 'Houve um erro no servidor...', type:'error'}})
		} else {
			history('/novoprojeto', {state: {message: res.data.join(), type: 'error'}})
		}
	}
	return (
		<section className={style.section}>
			<h1>Criar Projeto</h1>
			<p>Crie seu projeto para adicionar os serviços</p>
			<ProjectForm BtnText='Criar Projeto' handleSubmit={CreatePost} />
		</section>
	)
}