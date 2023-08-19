import { atom, useAtom } from "jotai";
import React, { useCallback, useEffect } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

interface User {
  name: string | null;
}

const userAtom = atom<User>({ name: null });
const themeAtom = atom<"light" | "dark">("light");
const isLoadingAtom = atom<boolean>(false);

export const JotaiExample: React.FC = () => {
  const [user, setUser] = useAtom(userAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const setName = (userName: string) => {
    setUser({ name: userName });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const load = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({ name: "John Doe" });
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading, setUser]);

  useEffect(() => {
    if (user.name == null) {
      load();
    }
  }, [user.name, load]);

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <Breadcrumbs label="Jotai Example" />
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
