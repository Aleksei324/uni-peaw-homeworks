import { types } from '../challenge11/'

export interface stateParams {
	id: number,
	description: string,
	done: boolean
}

export interface actionParams {
	type: string,
	payload: stateParams
}

export const todoReducer = (actualState: stateParams[], action: actionParams) => {

  switch(action.type) {
		
		case types.CREATE_TODO:
			return [...actualState, action.payload]

		case types.COMPLETE_TODO:
			const indexTodo = actualState.findIndex((x) => x.id === action.payload.id)
			let temp = [...actualState]
			// to use this, disable <React.StrictMode>
			temp[indexTodo].done = true //!( temp[indexTodo].done )

			return temp

		case types.DELETE_TODO:
			const indexTodo2 = actualState.findIndex((x) => x.id === action.payload.id)
			let temp2 = [...actualState]
			temp2.splice(indexTodo2, 1)

			return temp2

		default:
			return actualState
	}
}
