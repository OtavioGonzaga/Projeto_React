import {useNavigate} from 'react-router-dom'
import Loading from '../layouts/Loading.js'
import {useEffect, useState} from 'react'
import style from "./Projects.module.css"
import axios from 'axios'
import LinkButton from '../layouts/LinkButton'
import ProjectView from '../project/ProjectView'
export default function Projects() {
	const [projects, setProjects] = useState([])
	const [loading, setLoading] = useState(true)
	const history = useNavigate()
	useEffect(() => {
		axios.get('https://costs-api-bw5a.onrender.com/projects').then(res => { //TODO
			setProjects(res.data)
			setLoading(false)
		}).catch(err => {
			console.error(err)
		})
	}, [projects])
	function redirect(id) {
		history('/projetos/' + id)
	}
	function Delete(id) {
		axios.post('https://costs-api-bw5a.onrender.com/delete', {id: id}).then((res) => { //TODO
			if (res.status === 500) console.log('Error')
			if (res.status === 200) {
				setLoading(true)
                setProjects([])
				history('.', {state: {message: 'Projeto deletado com sucesso!', type: 'success'}})
			}
		})
	}
	return (
		<>
		<header className={style.projectsHeader}>
			<h2>Projetos:</h2>
			<LinkButton to='/novoprojeto' text='Criar novo projeto'/>
		</header>
		<section className={style.projects}>
			{loading && <Loading />}
			{projects.length === 0 && !loading && (
				<h3 className={style.noProjects}>Ainda não há projetos...</h3>
			)}
			{projects.length > 0 && projects.map(prj => (
				<ProjectView prj={prj} key={prj._id} handleDelete={Delete} handleEdit={redirect} />
			))}
		</section>
		</>
	)
}