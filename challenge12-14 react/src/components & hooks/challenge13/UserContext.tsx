import { Dispatch, createContext } from "react";
import { userAction, userState } from ".";

interface contextParams {
  state: userState,
  dispatch: Dispatch<userAction>
}

export const UserContext = createContext<contextParams | undefined>(undefined)
