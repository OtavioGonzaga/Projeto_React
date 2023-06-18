import { useEffect, useState } from 'react'
import style from './Container.module.css'
import Message from './Message'
import { useLocation } from 'react-router-dom'
export default function Container(props) {
	const location = useLocation()
	const [type, setType] = useState()
	const [message, setMessage] = useState()
	useEffect(() => {
		if(location.state) {
			setType(location.state.type)
			setMessage(location.state.message)
		}
	}, [location.state])
	return <div className={style.container + ' ' + style[props.customClass]}><Message type={type} message={message} />{props.children}</div>
}