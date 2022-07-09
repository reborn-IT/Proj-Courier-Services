import React, { createContext, Dispatch, useContext, useReducer } from "react";
import reducer, {
  ExpandAction,
  ExpandState,
  initialState,
} from "../DropDownReducer";

type StateProviderProps = { children: React.ReactNode };

export const StateContext = createContext<
  { state: ExpandState; action: Dispatch<ExpandAction> } | undefined
>(undefined);

// eslint-disable-next-line react/function-component-definition
export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, action] = useReducer(reducer, initialState);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValue = { state, action };
  return (
    <StateContext.Provider value={providerValue}>
      {children}
    </StateContext.Provider>
  );
};

export function useExpandedContext() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a StateProvider");
  }
  return context;
}
