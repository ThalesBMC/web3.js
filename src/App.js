import "./App.css";
import React, { useEffect } from "react";
import { init } from "./web3Client";

function App() {
  useEffect(() => {
    init();
  }, []);
  return <div className="App"></div>;
}

export default App;
