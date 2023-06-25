import { useState } from "react"
import Input from "../forms/Input"
import SubmitButton from "../forms/SubmitButton"
import Textarea from "../forms/Textarea"
export default function ServicesForm({ btnText, handleSubmit, serviceData }) {
	const [service, setService] = useState(serviceData || {})
	function handleChange (e) {
        setService({...service, [e.target.name]: e.target.value })
    }
	return (
		<form onSubmit={e => {
			e.preventDefault()
			handleSubmit(service)
		}}>
			<Input name='name' placeholder='Digite o nome do serviço...' type='text' text='Nome do Serviço' handleOnChange={handleChange} />
			<Input name='cost' placeholder='Custo do projeto...' type='number' text='Custo do Projeto' handleOnChange={handleChange} />
			<Textarea label='Descrição do Serviço' name='description' placeholder='Digite a Descrição do Serviço...' handleOnChange={handleChange} />
			<SubmitButton text={btnText} />
		</form>
    )
}