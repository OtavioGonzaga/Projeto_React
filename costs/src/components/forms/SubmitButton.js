import style from './SubmitButton.module.css'
export default function Button({text}) {
	return <button className={style.button} type='submit'>{text}</button>
}