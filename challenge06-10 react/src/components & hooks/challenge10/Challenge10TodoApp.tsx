import {Key, useReducer} from 'react'
import { Comp2, Comp3, todoReducer, stateParams } from './'

export const Challenge10TodoApp = () => {

	const initialState: [stateParams] = [{
		id: new Date().getTime(),
		description: 'Hacer los challenges',
		done: false
	}]

  const [todosState, todosDispatch] = useReducer(todoReducer, initialState)
	return (
		<>
			<h3>TodoApp: 10, <small>Pendientes: 2</small></h3>
			<div>
				<ul>
					{
						todosState.map( (todo: stateParams, id: Key) => {
							return (
								<Comp2 key={id} todo={todo} />
							)
						})
					}
				</ul>
				<Comp3 dispatch={todosDispatch} />
			</div>
		</>
	)
}
