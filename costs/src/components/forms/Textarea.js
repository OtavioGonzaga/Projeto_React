import style from './Textarea.module.css'
export default function Textarea({label, name, placeholder, handleOnChange}) {
	return (
		<>
		<label htmlFor={name} className={style.label} >{label}:</label>
		<textarea name={name} id={name} placeholder={placeholder} className={style.textarea} onChange={handleOnChange}></textarea>
		</>
	)
}