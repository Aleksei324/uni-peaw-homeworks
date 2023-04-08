import { types13 } from "./";

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

    case types13.LOGIN:
      temp.logged = true
      temp.name = action.payload
      return temp

    case types13.LOGOUT:
      temp.logged = false
      temp.name = ''
      return temp

    default:
      return currentState
  }
}
