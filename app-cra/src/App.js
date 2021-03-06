import React, { useState } from "react";
import "./App.css";
import MyGreeting from "./MyGreeting";

const App = () => {
  const [waved, setWaved] = useState(0);
  const greetingProps = {
    salutation: "Hi",
    traits: ["very nice", "super smart"],
    onWave: e => setWaved(e.detail)
  };

  return (
    <div className="App">
      <MyGreeting {...greetingProps}>people</MyGreeting>
      <small>you waved {waved} times</small>
    </div>
  );
};

export default App;
