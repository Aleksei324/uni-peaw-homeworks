import { memo } from 'react'
import { stateParams } from './'
import '../challenge11/styles.css'

interface comp2Props {
	d: boolean
	todo: stateParams,
	todoDone: (todo: stateParams) => void,
	deleteTodo: (todo: stateParams) => void
}

export const Comp2 = memo( ({d, todo, todoDone, deleteTodo}: comp2Props) => {
	return (
		<li className={d ? 'todoDone todo':'todo'}>
			<span onClick={() => todoDone(todo)}>{todo.description}</span>
			<button onClick={() => deleteTodo(todo)}>Borrar</button>
		</li>
	)
})
