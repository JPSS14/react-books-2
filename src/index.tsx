import { SearchContextProvider } from "contexts/search-context/search-context";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "ui/components/app";
import reportWebVitals from "./reportWebVitals";
import { FavoriteContextProvider } from "contexts/favorite-context/favorite-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SearchContextProvider>
    <FavoriteContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FavoriteContextProvider>
  </SearchContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
