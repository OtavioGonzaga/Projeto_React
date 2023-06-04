import style from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
export default function NewProject() {
	return (
		<section className={style.section}>
			<h1>Criar Projeto</h1>
			<p>Crie seu projeto para adicionar os serviços</p>
			<ProjectForm BtnText='Criar Projeto' />
		</section>
	)
}