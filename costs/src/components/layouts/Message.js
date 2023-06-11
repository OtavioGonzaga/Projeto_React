import {useEffect, useState } from 'react';
import style from './Message.module.css'
import {FaTimes} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function Message({type, message}) {
	const [visible, setVisible] = useState(true)
	const history = useNavigate()
	useEffect(()=> {
		setVisible(true)
	}, [history])
	setTimeout(() => {
		if (type === 'success') setVisible(false)
	}, 4000)
	return (
		<>
		{message && (
			<>
			<div className={`${style.message} ${style[type]} ${visible? '': style.none}`}>{message} <FaTimes onClick={() => setVisible(false)}/></div>
			</>
		)}
		</>
	)
}