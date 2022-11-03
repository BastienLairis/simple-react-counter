import { useState } from "react";
import "./App.css";

//components
// import Increment from "./components/Increment";
// import Decrement from "./components/Decrement";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      {/* <Decrement counter={counter} setCounter={setCounter} /> */}
      <Button counter={counter} setCounter={setCounter} calculate={"-"} />
      <p>{counter}</p>
      <Button counter={counter} setCounter={setCounter} calculate={"+"} />

      {/* <Increment counter={counter} setCounter={setCounter} /> */}
    </div>
  );
}

export default App;
