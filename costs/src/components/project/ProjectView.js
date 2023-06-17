import Button from "./Button"
import style from "./ProjectView.module.css"
export default function ProjectView({prj, handleDelete, handleEdit}) {

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
				<Button handleOnClick={handleEdit} prjId={prj._id} type='edit'/>
				<Button handleOnClick={handleDelete} prjId={prj._id} type='delete'/>
			</div>
		</div>
	)
}