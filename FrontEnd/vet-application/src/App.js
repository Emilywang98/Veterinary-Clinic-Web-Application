import React from "react";
import LoginPage from "./views/LoginPage"
import HomePage from "./views/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
      <BrowserRouter>
        <Routes >
          {/* path here is the website URL */}
          <Route path="" element = {<LoginPage/>} />
          <Route path="/home" element = {<HomePage/>} />
        </Routes>
      </BrowserRouter>
  )}

export default App;
