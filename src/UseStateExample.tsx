import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Form } from "./Form";
import { Loading } from "./Loading";

type User = {
  name: string;
};

type Theme = "light" | "dark";

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

export const UseStateExample: React.FC = () => {
  const [user, setUser] = useState<User>({ name: "" });
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserData().then((data) => {
      setUser(data);
      setIsLoading(false);
    });
  }, []);

  const handleNameChange = (inputUserName: string) => {
    setIsLoading(true);
    updateUserName(inputUserName).then((newUser) => {
      setUser(newUser);
      setIsLoading(false);
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <Breadcrumbs label="useState Example" />
      <Form
        userName={user.name}
        theme={theme}
        update={(inputUserName: string) => handleNameChange(inputUserName)}
        toggleTheme={() => toggleTheme()}
      />
      {isLoading && <Loading />}
    </div>
  );
};
