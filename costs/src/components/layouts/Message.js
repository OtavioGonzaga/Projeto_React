import {useState } from 'react';
import style from './Message.module.css'
import {FaTimes} from "react-icons/fa";
export default function Message({type, message}) {
	const [visible, setVisible] = useState(true)
	setTimeout(() => {
		if (type === 'success') setVisible(false)
	}, 4000)
	return (
		<>
		{message && (
			<div className={`${style.message} ${style[type]} ${visible? '': style.none}`}>{message.join(', ')} <FaTimes onClick={() => setVisible(false)}/></div>
		)}
		</>
	)
}