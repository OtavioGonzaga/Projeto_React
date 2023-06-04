import Container from "../layouts/Container"
import style from './footer.module.css'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
export default function Footer() {
	return (
		<>
		<footer>
			<Container>
				<ul className={style.list}>
					<li><FaFacebook /></li>
					<li><FaLinkedin /></li>
					<li><FaGithub /></li>
				</ul>
				<p className={style.p}><span className={style.span}>Costs</span> &copy;{`${new Date().getFullYear()}`}</p>
			</Container>
		</footer>
		</>	
	)
}