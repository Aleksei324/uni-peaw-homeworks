import { useReducer } from "react"
import { UserContext, userReducer, userState } from "./"

interface userProviderProps {
  children: JSX.Element
}

export const UserProvider = ({children}: userProviderProps) => {

  const initialValues: userState = {
    logged: false,
    name: ''
  }

  const [state, dispatch] = useReducer(userReducer, initialValues)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}
