import React, { useEffect, useReducer } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

type Theme = "light" | "dark";

type User = {
  name: string | null;
};

type State = {
  user: User;
  theme: Theme;
  isLoading: boolean;
};

type Action =
  | { type: "SET_USER"; user: User }
  | { type: "SET_NEW_NAME"; name: string }
  | { type: "TOGGLE_THEME" }
  | { type: "SET_LOADING"; isLoading: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

const initialState: State = {
  user: { name: null },
  theme: "light",
  isLoading: false,
};

const fetchUserData = (): Promise<User> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe" });
    }, 1000);
  });

const updateUserName = (inputUserName: string): Promise<User> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: inputUserName });
    }, 1000);
  });

export const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING", isLoading: true });
    fetchUserData().then((data) => {
      dispatch({ type: "SET_USER", user: data });
      dispatch({ type: "SET_LOADING", isLoading: false });
    });
  }, []);

  const handleNameChange = (inputUserName: string) => {
    if (state.user) {
      dispatch({ type: "SET_LOADING", isLoading: true });
      updateUserName(inputUserName).then((updatedUser) => {
        dispatch({ type: "SET_USER", user: updatedUser });
        dispatch({ type: "SET_NEW_NAME", name: "" });
        dispatch({ type: "SET_LOADING", isLoading: false });
      });
    }
  };

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <Breadcrumbs label="useReducer Example" />
      <Form
        userName={state.user.name}
        theme={state.theme}
        update={(inputUserName: string) => handleNameChange(inputUserName)}
        toggleTheme={() => toggleTheme()}
      />
      {state.isLoading && <Loading />}
    </div>
  );
};
