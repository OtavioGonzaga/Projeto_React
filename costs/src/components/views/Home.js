import style from './Home.module.css'
import LinkButton from '../layouts/LinkButton'
import savings from '../../img/savings.svg'
export default function Home() {
	return (
	<section className={style.home_section}>
		<h1>Bem-vindo ao <span>Costs</span></h1>
		<p>Comece a gerenciar seus projetos agora mesmo!</p>
		<LinkButton to="/novoprojeto" text="Criar Projeto"/>
		<img className={style.img} src={savings} alt="savings.svg" />
	</section>
	)
}