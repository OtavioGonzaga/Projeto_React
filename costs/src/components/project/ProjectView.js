import Button from "./Button"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import style from "./ProjectView.module.css"
export default function ProjectView({prj}) {
	const history = useNavigate()
	function redirect() {
		history('/edit?id=' + prj._id)
	}
	function Delete(id) {
		axios.post('http://localhost:9074/delete', {id: id}).then((res) => {
			if (res.status === 500) console.log('Error')
			if (res.status === 200) history('./')
		})
	}
	return (
		<div className={style.container}>
			<div className={style.top}>
				<h3>{prj.name}</h3>
				<p>R${prj.budget}</p>
				<div className={style.category}>
					<span className={style[prj.category.name]}></span><small>{prj.category.name}</small>
				</div>
			</div>
			<p className={style.content}>{!prj.description && (
				<span>Projeto sem descrição...</span>
			)}{prj.description}</p>
			<div className={style.buttons}>
				<Button handleOnClick={redirect} prjId={prj._id} type='edit'/>
				<Button handleOnClick={Delete} prjId={prj._id} type='delete'/>
			</div>
		</div>
	)
}