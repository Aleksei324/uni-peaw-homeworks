import { FormEvent, useState } from "react"

interface comp3Props {
	createTodo: (text: string) => void
}

export const Comp3 = ({createTodo}: comp3Props) => {
	const [input, setInput] = useState('')

	const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		createTodo(input)
	}

	return (
		<div>
			<h3>Agregar TODO</h3>

			<form onSubmit={ (evt) => onFormSubmit(evt)}>

				<label htmlFor="inputTextRedux"> Tarea </label>
				<input id="inputTextRedux" value={input} onChange={(evt) => setInput(evt.target.value)} type='text' placeholder="Escribe la tarea..." />
				<button type="submit">Agregar</button>

			</form>
		</div>
	)
}
