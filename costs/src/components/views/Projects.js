import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import style from "./Projects.module.css"
import axios from 'axios'
import LinkButton from '../layouts/LinkButton'
export default function Projects() {
	const [projects, setProjects] = useState([])
	const history = useNavigate()
	useEffect(() => {
		axios.get('http://localhost:9074/projects').then(res => {
			setProjects(res.data)
		}).catch(err => {
			console.log(err)
			history('/', {state: {message: ['Houve um erro ao carregar os projetos...'], type: 'error'}})
		})
	}, [history])
	return (
		<>
		<header className={style.projectsHeader}>
			<h2>Projetos:</h2>
			<LinkButton to='/novoprojeto' text='Criar novo projeto'/>
		</header>
		<section className={style.projects}>
			{projects.length === 0 && (
				<h3 className={style.noProjects}>Ainda não há projetos...</h3>
			)}
			{projects.map(prj => (
				<div className={style.container} key={prj._id}>
				<h3>{prj.name}</h3>
				<p>{prj.budget}</p>
				</div>
			))}
		</section>
		</>
	)
}