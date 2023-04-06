import { useReducer, useState } from "react"
import { stateParams, todoReducer } from "../challenge10"
import { types } from "./"

export const useTODO = () => {

  const initialState: [stateParams] = [{
		id: new Date().getTime(),
		description: 'Hacer los challenges',
		done: false
	}]
  const [todosState, todosDispatch] = useReducer(todoReducer, initialState)
  const [pendingTodos, setPendingTodos] = useState(1)

  const deleteTodo = (todo: stateParams) => {
		const action = {
			type: types.DELETE_TODO,
			payload: todo
		}
		todosDispatch(action)
    if (!( todo.done )) {
      setPendingTodos(pendingTodos - 1)
    }
	}

  const todoDone = (todo: stateParams) => {
		const action = {
			type: types.COMPLETE_TODO,
			payload: todo
		}
		todosDispatch(action)
    if (!( todo.done )) {
      setPendingTodos(pendingTodos - 1)
    }
	}

  const createTodo = (text: string) => {
    let temp

    if (text === '') {
      temp = 'Tarea vacia'
    }
    else {
      temp = text
    }

    const newTarea = {
			id: new Date().getTime(),
			description: temp.trim(),
			done: false
		}

		const action = {
			type: types.CREATE_TODO,
			payload: newTarea
		}
		
		todosDispatch(action)
    setPendingTodos(pendingTodos + 1)
  }

  return {
    state: todosState,
    deleteTodo: deleteTodo,
    todoDone: todoDone,
    createTodo: createTodo,
    countPendingTodos: pendingTodos
  }
}
