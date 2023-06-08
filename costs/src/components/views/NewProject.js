//import {useNavigate} from 'react-router-dom'
import style from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import axios from 'axios'
export default function NewProject() {
	//const history = useNavigate()
	async function CreatePost(project) {
		project.cost = 0
		project.services = []
		const res = await axios.post("http://localhost:9074/createproject", project)
		if (res.status === 200) {

		} else {

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