import * as types from './'

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

		default:
			return actualState
	}
}
