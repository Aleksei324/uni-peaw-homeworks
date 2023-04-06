import {Key, useReducer} from 'react'
import { Comp2, Comp3, todoReducer, stateParams } from './'
import { useTODO } from '../challenge11'

export const Challenge10TodoApp = () => {
	const {state, deleteTodo, todoDone, createTodo, countPendingTodos} = useTODO()

	return (
		<>
			<h3>TodoApp: {state.length}, <small>Pendientes: {countPendingTodos}</small></h3>
			<ul>
				{
					state.map( (todo: stateParams, id: Key) => {
						return (
							<Comp2 key={id} d={todo.done} todo={todo} todoDone={todoDone} deleteTodo={deleteTodo} />
						)
					})
				}
			</ul>
			<Comp3 createTodo={createTodo} />
		</>
	)
}
