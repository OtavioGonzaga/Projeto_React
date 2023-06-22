import { useState, useEffect } from 'react'
import style from './Message.module.css'
import { FaTimes } from "react-icons/fa"
import { useLocation } from 'react-router-dom'
export default function Message() {
	const location = useLocation()
	const [type, setType] = useState()
	const [message, setMessage] = useState()
	const [visible, setVisible] = useState(true)
	useEffect(() => {
		if(location.state) {
			setType(location.state.type)
			setMessage(location.state.message)
		}
	}, [location, location.state])
	setTimeout(() => {
		setVisible(false)
	}, 5000)
	return (
		<>
		{message && visible && (
			<>
			<div className={`${style.message} ${style[type]}`}>{message} <FaTimes onClick={() => setVisible(false)}/></div>
			</>
		)}
		</>
	)
}