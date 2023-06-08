import style from './Message.module.css'
export default function Message({type, message}) {
	return (
		<>
		{message && (
			<div className={`${style.message} ${style[type]}`}>{message}</div>
		)}
		</>
	)
}