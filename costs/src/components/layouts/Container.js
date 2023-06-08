import style from './Container.module.css'
import Message from './Message'
import { useLocation } from 'react-router-dom'
export default function Container(props) {
	const location = useLocation()
	if(location.state) {
		var type = location.state.type
		var message = location.state.message
	}
	return <div className={style.container + ' ' + style[props.customClass]}><Message type={type} message={message} />{props.children}</div>
}