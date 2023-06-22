import { useParams } from 'react-router-dom'
import style from './EditProject.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../layouts/Loading'
import ProjectForm from '../project/ProjectForm'
export default function EditProject() {
	const [project, setProject] = useState()
	const [showProjectForm, setShowProjectForm] = useState(false)
	const {id} = useParams()
	useEffect(() => {
		axios.get('http://localhost:9074/projects?id=' + id).then(prj => {
			setProject(prj.data[0])
		}).catch(err => {
			console.error(err)
			setProject({name: 'error'})
		})
	}, [id])
	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm)
	}
	function EditProps(prj) {
		console.log(prj)
		axios.post('http://localhost:9074/editprj', prj).then(() => {
			toggleProjectForm()
			setProject(prj)
		}).catch(err => {
			console.error(err)
		})
	}
	return (
		<section className={style.edit}>
			{project ? (
				<>
				<div className={style.tittle}>
					<h2>Projeto: {project.name}</h2>
					<button onClick={toggleProjectForm}>{showProjectForm? 'Fechar' : 'Editar Projeto'}</button>
				</div>
				{showProjectForm ? (
					<section className={style.form_edit}>
						<ProjectForm BtnText='Editar' handleSubmit={EditProps} projectData={project} />	
					</section>
				) : (
					<div className={style.details}>
						<p><span>Categoria:</span> {project.category.name}</p>
						<p><span>Orçamento total:</span> R${project.budget}</p>
						<p><span>Orçamento utilizado:</span> R${project.cost}</p>
					</div>
				)}
				</>
			) : (<Loading />) 
			}
		</section>
	)
}