import React from "react";

export const Form: React.FC<{
  userName: string | null;
  theme: string;
  update: (value: string) => void;
  toggleTheme: () => void;
}> = ({ userName, theme, update, toggleTheme }) => {
  const [inputUserName, setInputUserName] = React.useState<string>(
    userName ?? ""
  );
  return (
    <div
      className={`p-8 border rounded shadow-lg w-1/3 ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl mb-4">Hello, {userName || "..."}</h1>
      <input
        className="border rounded w-full p-2 mb-4 text-black"
        value={inputUserName}
        onChange={(e) => setInputUserName(e.target.value)}
        placeholder="Enter new name"
      />
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          onClick={() => update(inputUserName)}
        >
          Change Name
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2"
          onClick={() => toggleTheme()}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};
