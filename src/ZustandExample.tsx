import React, { useEffect } from "react";

import { create } from "zustand";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

interface State {
  user: {
    name: string | null;
  };
  theme: "light" | "dark";
  isLoading: boolean;
  setName: (name: string) => void;
  toggleTheme: () => void;
  load: () => void;
}

const useStore = create<State>((set) => ({
  user: {
    name: null,
  },
  theme: "light",
  isLoading: false,
  setName: (userName: string) => {
    set({ user: { name: userName } });
  },
  toggleTheme: () => {
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
  },
  load: () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ user: { name: "John Doe" }, isLoading: false });
    }, 1000);
  },
}));

export const ZustandExample: React.FC = () => {
  const { user, theme, isLoading, setName, toggleTheme, load } = useStore();

  useEffect(() => {
    if (user.name == null) {
      load();
    }
  }, [user.name, load]);

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <Breadcrumbs label="Zustand Example" />
      <Form
        userName={user.name}
        theme={theme}
        update={(inputUserName: string) => setName(inputUserName)}
        toggleTheme={() => toggleTheme()}
      />
      {isLoading && <Loading />}
    </div>
  );
};
