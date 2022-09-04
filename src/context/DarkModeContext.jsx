import React, { useReducer } from "react";
import DarkModeReducer from "./DarkMoodReducer";

const INITIAL_STATE = {
  darkMode: false,
  dispatchStateFn: () => {},
};

export const DarkModeContext = React.createContext(INITIAL_STATE);

export const DarkModeContextProvider = (props) => {
  const [state, dispatchStateFn] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider
      value={{ darkMode: state.darkMode, dispatchStateFn }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};
