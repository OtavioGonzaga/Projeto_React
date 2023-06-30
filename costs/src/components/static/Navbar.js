import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import style from './navbar.module.css'

export default function Navbar() {
	return (
		<nav className={style.navbar}>
			<Link to='/' className={style.logo}>
				<img src={logo} alt="" />
				<h2>Costs</h2>
			</Link>
			<ul className={style.list}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/contato">Contato</Link></li>
				<li><Link to="/projetos">Projetos</Link></li>
				<li><Link to="/novoprojeto">Novo Projeto</Link></li>
			</ul>
		</nav>
	)
}