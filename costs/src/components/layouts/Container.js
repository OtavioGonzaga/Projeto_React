import style from './Container.module.css'
import Message from './Message'
export default function Container(props) {
	return <div className={style.container + ' ' + style[props.customClass]}><Message />{props.children}</div>
}