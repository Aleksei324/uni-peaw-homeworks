import { FormEvent } from "react"
import { actionParams } from "./"
import * as types from './'

interface comp3Props {
	dispatch: React.Dispatch<actionParams>
}

export const Comp3 = ({dispatch}: comp3Props) => {

	const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		const newTarea = {
			id: new Date().getTime(),
			description: 'tarea de placeholder',
			done: false
		}

		const action = {
			type: types.CREATE_TODO,
			payload: newTarea
		}
		
		dispatch(action)
	}

	return (
		<div>
			<h3>Agregar TODO</h3>

			<form onSubmit={ (evt) => onFormSubmit(evt)}>

				<label htmlFor="inputTextRedux"> Tarea </label>
				<input id="inputTextRedux" type='text' placeholder="Escribe la tarea..." />
				<button type="submit">Agregar</button>

			</form>
		</div>
	)
}
