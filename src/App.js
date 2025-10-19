import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
