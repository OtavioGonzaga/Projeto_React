import {FaEdit, FaTrash} from 'react-icons/fa'
import style from "./Button.module.css"
export default function DeleteButton({handleOnClick, type, prjId}) {
	return <button className={style.button + " " + style[type]} onClick={() => handleOnClick(prjId)}>{type === 'edit' && (
		<><FaEdit /> Editar</>
	)}{type === 'delete' && (
		<><FaTrash /> Deletar</>
	)}
	</button>
}