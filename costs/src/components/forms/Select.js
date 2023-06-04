import style from './Select.module.css'
export default function Select({name, text, options, value, handleOnChange}) {
	return (
	<div className={style.select}>
		<label htmlFor={name}>{text}:</label>
		<select name={name} id={name}>
			<option selected disabled>Selecione uma opção...</option>
		</select>
	</div>
	)
}