export default function FormProjectValidation(name: string, budget: number, category: {name: string, id: string}): string[] {
	let errors: string[] = []
	if (name) {
		if (name.length < 3) errors.push('o nome do projeto deve conter mais de dois caracteres')
		if (name.length > 20) errors.push('o nome do projeto deve conter no máximo vinte caracteres')
	} else errors.push('insira um nome válido')
	if (budget < 0) errors.push('insira um valor válido')
	if (category) {
		if (Number(category.id) < 1 || Number(category.id) > 4 || Number.isNaN(Number(category.id))) errors.push('categoria inválida')
	} else errors.push('categoria inválida')
	return errors
}