import React from "react";
import classes from './App.module.css';
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";
function App(){
  return(
    <React.Fragment>
      <ForwardCounter/>
      <BackwardCounter/>
    </React.Fragment>
  );
};

export default App;