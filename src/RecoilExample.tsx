import React, { useCallback, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

interface User {
  name: string | null;
}

const userState = atom<User>({
  key: "userState",
  default: { name: null },
});
const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: "light",
});
const isLoadingState = atom<boolean>({
  key: "isLoadingState",
  default: false,
});

export const RecoilExample: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [theme, setTheme] = useRecoilState(themeState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

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
      <Breadcrumbs label="Recoil Example" />
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
