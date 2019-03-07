import React, { useState } from "react";
import "./App.css";
import MyGreeting from "./MyGreeting";

const App = () => {
  const [waved, setWaved] = useState(0);
  const greetingProps = {
    salutation: "Hia",
    traits: ["very nice", "super smart"],
    onWave: setWaved
  };

  return (
    <div className="App">
      <MyGreeting {...greetingProps}>Jan</MyGreeting>
      <small>you waved {waved} times</small>
    </div>
  );
};

export default App;
