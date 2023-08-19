import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumbs: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="p-4">
      <nav className="text-gray-600 font-semibold">
        <ul className="flex items-center">
          <li>
            <Link
              to="/"
              className="text-gray-900 transition-colors duration-200 underline hover:text-indigo-600"
            >
              Home
            </Link>
          </li>
          <li className="mx-2">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
            </svg>
          </li>
          <li>{label}</li>
        </ul>
      </nav>
    </div>
  );
};
