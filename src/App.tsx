import React from "react";
import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.css";
import 'material-icons/iconfont/material-icons.css';
import NavBar from "./components/NavBar";
import TasksPage from "./components/pages/TasksPage";
import AboutPage from "./components/pages/AboutPage";

const App: React.FunctionComponent = () => {

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route index element={<TasksPage />}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="*" element={<TasksPage />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
