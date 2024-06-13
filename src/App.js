
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes";

 const App = () => {
  return (
    <BrowserRouter>
      <RouteList/>
    </BrowserRouter>
    
  );
};

export default App;