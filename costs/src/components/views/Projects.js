import {useNavigate} from 'react-router-dom'
import Loading from '../layouts/Loading.js'
import {useState} from 'react'
import style from "./Projects.module.css"
import axios from 'axios'
import LinkButton from '../layouts/LinkButton'
import ProjectView from '../project/ProjectView'
export default function Projects() {
	const [projects, setProjects] = useState([])
	const [loading, setLoading] = useState(true)
	const history = useNavigate()
	async function loadProjects() {
		axios.get('http://localhost:9074/projects').then(res => {
				setProjects(res.data)
				setLoading(false)
		}).catch(err => {
			console.log(err)
			history('/', {state: {message: 'Houve um erro ao carregar os projetos...', type: 'error'}})
		})
	}
	if (loading) loadProjects() 
	function redirect(id) {
		history('/edit?id=' + id)
	}
	function Delete(id) {
		axios.post('http://localhost:9074/delete', {id: id}).then((res) => {
			if (res.status === 500) console.log('Error')
			if (res.status === 200) {
				history('.', {state: {message: 'Projeto removido com sucesso!', type: 'success'}})
				loadProjects()
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