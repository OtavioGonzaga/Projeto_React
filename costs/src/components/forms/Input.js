import style from './Input.module.css'
export default function Input({name, type, text, placeholder, handleOnChange, value}) {
	return (
	<div className={style.input}>
		<label htmlFor={name}>{text}:</label>
		<input type={type} placeholder={placeholder} value={value} onChange={handleOnChange} />
	</div>
	)
}