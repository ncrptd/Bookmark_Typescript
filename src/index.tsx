import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookmarksProvider } from "./context/BookmarkContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BookmarksProvider>
      <App />
    </BookmarksProvider>
  </React.StrictMode>
);
