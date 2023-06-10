import style from "./ProjectView.module.css"
export default function ProjectView({prj}) {
	return (
		<div className={style.container} key={prj._id}>
			<div className={style.top}>
				<h3>{prj.name}</h3>
				<p>{prj.budget}</p>
				<div className={style.category}>
					<span className={style[prj.category.name]}></span><small>{prj.category.name}</small>
				</div>
			</div>
			<p className={style.content}>{prj.description}</p>
		</div>
	)
}