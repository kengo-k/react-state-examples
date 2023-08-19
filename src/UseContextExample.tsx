import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

interface State {
  user: {
    name: string | null;
  };
  theme: "light" | "dark";
  isLoading: boolean;
}

type Action =
  | { type: "SET_NAME"; name: string }
  | { type: "TOGGLE_THEME" }
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; name: string };

const initialState: State = {
  user: {
    name: null,
  },
  theme: "light",
  isLoading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, user: { name: action.name } };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "LOAD_START":
      return { ...state, isLoading: true };
    case "LOAD_SUCCESS":
      return { ...state, user: { name: action.name }, isLoading: false };
    default:
      return state;
  }
};

const StoreContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

const App: React.FC = () => {
  const { state, dispatch } = useStore();

  useEffect(() => {
    if (state.user.name == null) {
      dispatch({ type: "LOAD_START" });
      setTimeout(() => {
        dispatch({ type: "LOAD_SUCCESS", name: "John Doe" });
      }, 1000);
    }
  }, [state.user.name, dispatch]);

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <Breadcrumbs label="useContext & useReducer Example" />
      <Form
        userName={state.user.name}
        theme={state.theme}
        update={(inputUserName: string) =>
          dispatch({ type: "SET_NAME", name: inputUserName })
        }
        toggleTheme={() => dispatch({ type: "TOGGLE_THEME" })}
      />
      {state.isLoading && <Loading />}
    </div>
  );
};

export const UseContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const UseContextExample: React.FC = () => {
  return <App />;
};
