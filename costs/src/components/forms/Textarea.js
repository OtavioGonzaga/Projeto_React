import style from './Textarea.module.css'
export default function Textarea({label, name, placeholder, handleOnChange, text}) {
	return (
		<>
		<label htmlFor={name} className={style.label} >{label}:</label>
		<textarea name={name} id={name} placeholder={placeholder} className={style.textarea} onChange={handleOnChange} value={text}>{text}</textarea>
		</>
	)
}