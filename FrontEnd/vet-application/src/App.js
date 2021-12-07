import React from "react";
import SearchPage from "./views/SearchPage"
import LoginPage from "./views/LoginPage"
import ManageAnimalsPage from "./views/ManageAnimalsPage";
import ManageUsersPage from "./views/ManageUsersPage";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import ForgotPassword from "./components/ForgotPassword";
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom"


function App() {
  // const addAnimalModal = () => {
  //   document.getElementById('AddAnimalModal').classList.add('is-active');
// }
  return (

      <BrowserRouter>
        <Routes >
          {/* path here is the website URL */}
          <Route path="" element = {<LoginPage/>} />
          <Route path = "/forgotPassword" element = {<ForgotPassword/>}/>
          <Route path="/search" element = {<SearchPage/>} />
        <Route path="/animals" element={<ManageAnimalsPage/>} />
        <Route path="/users" element={<ManageUsersPage/>} />
        </Routes>
      </BrowserRouter>

  )}

export default App;
