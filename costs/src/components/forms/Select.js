import style from './Select.module.css'
export default function Select({name, text, options, placeholder, value, handleOnChange}) {
	return (
	<div className={style.select}>
		<label htmlFor={name}>{text}:</label>
		<select name={name} id={name} onChange={handleOnChange} value={value}>
			<option disabled value={''} >{placeholder}</option>
			{options.map((option) => (
				<option value={option.id} key={option.id}>{option.name}</option>
			))}
		</select>
	</div>
	)
}