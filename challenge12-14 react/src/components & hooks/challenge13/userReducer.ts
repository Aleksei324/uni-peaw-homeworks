import { types } from "./";

export interface userState {
  logged: boolean,
  name: string
}

export interface userAction {
  type: string,
  payload: string
}

export const userReducer = (currentState: userState, action: userAction) => {
  let temp = currentState

  switch (action.type) {

    case types.LOGIN:
      temp.logged = true
      temp.name = action.payload
      return temp

    case types.LOGOUT:
      temp.logged = false
      temp.name = ''
      return temp

    default:
      return currentState
  }
}
