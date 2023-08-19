import React, { useEffect } from "react";

import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  Provider,
  useDispatch as _useDispatch,
  useSelector,
} from "react-redux";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

type State = {
  user: {
    name: string | null;
  };
  theme: "light" | "dark";
  isLoading: boolean;
};

const initialState: State = {
  user: {
    name: null,
  },
  theme: "light",
  isLoading: false,
};

// dummy api for fetching user data
const load = () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("John Doe");
    }, 1000);
  });
};

const asyncActions = {
  load: createAsyncThunk("app/load", async () => {
    return await load();
  }),
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncActions.load.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(asyncActions.load.fulfilled, (state, action) => {
      state.user.name = action.payload;
      state.isLoading = false;
    });
  },
});

const actions = slice.actions;

const store = configureStore({
  reducer: slice.reducer,
});

type AppDispatch = typeof store.dispatch;
const useDispatch = () => _useDispatch<AppDispatch>();

export const ReduxExample: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: State) => state.user.name);
  const theme = useSelector((state: State) => state.theme);
  const isLoading = useSelector((state: State) => state.isLoading);

  const [inputUserName, setInputUserName] = React.useState<string>(
    userName ?? ""
  );

  useEffect(() => {
    if (userName == null) {
      dispatch(asyncActions.load());
    }
  }, [dispatch, userName]);

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <Breadcrumbs label="Redux Example" />
      <Form
        userName={userName}
        theme={theme}
        update={(inputUserName: string) =>
          dispatch(actions.setName(inputUserName))
        }
        toggleTheme={() => dispatch(actions.toggleTheme())}
      />
      {isLoading && <Loading />}
    </div>
  );
};
