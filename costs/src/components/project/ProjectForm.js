import Button from '../forms/SubmitButton'
import Input from '../forms/Input'
import Select from '../forms/Select'
export default function ProjectForm({BtnText}) {
	return (
		<form>
			<Input text='Nome do Projeto' type='text' name='name' placeholder='Digite o nome do projeto...' />
			<Input text='Orçamento do projeto' type='number' name='orcamento' placeholder='Orçamento total do projeto...' />
			<Select text='Categoria do projeto' name='category' />
			<Button text={BtnText} />
		</form>
	)
}