import style from './footer.module.css'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
export default function Footer() {
	return (
		<footer className={style.footer}>
			<ul className={style.list}>
				<li><FaFacebook /></li>
				<li><FaLinkedin /></li>
				<li><FaGithub /></li>
			</ul>
			<p className={style.p}><span className={style.span}>Costs</span> &copy;{`${new Date().getFullYear()}`}</p>
		</footer>
	)
}