import { useNavigate, useParams } from 'react-router-dom'
import style from './EditProject.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../layouts/Loading'
import ProjectForm from '../project/ProjectForm'
import ServicesForm from '../project/ServicesForm'
export default function EditProject() {
	const history = useNavigate()
	const [project, setProject] = useState()
	const [showProjectForm, setShowProjectForm] = useState(false)
	const [showServicesForm, setShowServicesForm] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		axios.get('http://localhost:9074/projects?id=' + id).then(prj => {
			setProject(prj.data[0])
		}).catch(err => {
			console.error(err)
			setProject({name: 'error'})
		})
	}, [id])

	function EditProps(prj) {
		if (prj !== project) {
			axios.post('http://localhost:9074/editprj', prj).then(res => {
				setProject(res.data)
				history('.', {state: {message: 'Projeto editado com sucesso!', type: 'success'}})
				setShowProjectForm(false)
			}).catch(err => {
				console.error(err)
				setShowProjectForm(false)
				history('.', { state: { message: 'Houve um erro interno, tente novamente mais tarde...', type: 'error' } })
			})
		} else {
			setShowProjectForm(false)
			history('.', {state: {message: 'Projeto editado com sucesso!', type: 'success'}})
		}
	}

	function submit(prj) {
		setProject({...project, services: project.services.push(prj)})
		axios.post('http://localhost:9074/services', project).then(response => {
			setShowServicesForm(false)
			if (response.status === 200) {
				setProject(response.data)
				history('.', {state: {message: 'Serviço adicionado com sucesso!', type:'success'}})
			} else history('.', {state: {message: 'Houve um erro no servidor, tente novamente mais tarde...', type:'error'}})
		}).catch(err => {
			console.error(err)
			setShowServicesForm(false)
			history('.', { state: { message: 'Houve um erro interno, tente novamente mais tarde...', type: 'error' }})
		})
	}

	return (
		<section className={style.edit}>
			{project ? (
				<>
				<div className={style.container}>
					<h2>Projeto: {project.name}</h2>
					<button className={style.btn} onClick={() => setShowProjectForm(!showProjectForm)}>{showProjectForm? 'Fechar' : 'Editar Projeto'}</button>
					{showProjectForm ? (
						<div className={style.form}>
							<ProjectForm BtnText='Editar' handleSubmit={EditProps} projectData={project} />	
						</div>
					)
					: (
						<div className={style.details}>
							<p><span>Categoria:</span> {project.category.name}</p>
							<p><span>Orçamento total:</span> R${project.budget}</p>
							<p><span>Orçamento utilizado:</span> R${project.cost}</p>
						</div>
					)}
				</div>
				<div className={style.container}>
					<h2>Serviços:</h2>
					<button className={style.btn} onClick={() => setShowServicesForm(!showServicesForm)}>{showServicesForm? 'Fechar' : 'Adicionar Serviços'}</button>
					{showServicesForm ? (	
						<div className={style.form}>
							<ServicesForm handleSubmit={submit} btnText='Adicionar Serviço' />
						</div>
					) : (
						<div className={style.serv}>
							{project.services.length > 0 ? project.services.map(service => (
								<div className={style.details} key={service.cost + Math.random()}>
									<p><span>Serviço:</span> {service.name}</p>
									<p><span>Custo:</span> {service.cost}</p>
									<p><span>Descrição:</span> {service.description}</p>
								</div>
							)) : <h3>Não há serviços adicionados...</h3>}
						</div>	
					)}
				</div>
				</>
			) : (<Loading />) 
			}
		</section>
	)
}