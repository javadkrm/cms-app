import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopBar />
      {router}
    </>
  );
}

export default App;
