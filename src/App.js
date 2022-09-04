import React, { useContext } from "react";
import Home from "../src/compunent/home/home";
import Login from "../src/compunent/loginPage/login";
import "../src/style/dark.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./compunent/singlePage/SinglePage";
import NewPage from "./compunent/newPage/NewPage";

import List from "./compunent/list/List";
import { productInput, userInput } from "./formSorce";
import { DarkModeContext } from "./context/DarkModeContext";
// import AutoContextProvider from "./context-App";

const App = () => {
  const ctx = useContext(DarkModeContext);

  return (
    <div className={ctx.darkMode ? "app dark " : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<SinglePage />}></Route>
              <Route
                path="new"
                element={<NewPage input={userInput} title="add new user" />}
              ></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<SinglePage />}></Route>
              <Route
                path="new"
                element={
                  <NewPage input={productInput} title="add new product" />
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
