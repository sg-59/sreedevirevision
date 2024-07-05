import React, { createContext, useEffect, useReducer } from "react";

// Initial state setup
const initialState = {
  userData: JSON.parse(localStorage.getItem("sree")) || null
};

// Context creation
export const UserContext = createContext();

// Reducer function
function displayReducer(state, action) {
  switch (action.type) {
    case "success":
      return { ...state, userData: action.response };
    default:
      return state;
  }
}

// Context provider component
export const UserContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(displayReducer, initialState);

  // Effect to update localStorage when state.userData changes
  useEffect(() => {
    localStorage.setItem("sree", JSON.stringify(state.userData));
  }, [state.userData]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
