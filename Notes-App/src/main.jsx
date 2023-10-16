import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const notes = [
  {
    id: 1,
    content: "Fundamentals of React 10",
    important: true,
  },
  {
    id: 2,
    content: "Using props to pass data 7",
    important: true,
  },
  {
    id: 3,
    content: "Statue of a Component 17",
    important: true,
  },
  {
    id: 4,
    content: "Redux",
    important: true,
  },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);
