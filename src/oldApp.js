import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  //counter => la valeur du state
  //setCounter => la fonction qui va permettre d'update mon state
  //0 => la valeur par défaut de mon state
  return (
    <div className="container">
      <button
        onClick={() => {
          // console.log("Decrement");
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      {/* {counter < 0 ? (
        <p className="red">{counter}</p>
      ) : (
        <p className="green"> {counter}</p>
      )} */}
      <p className={`counter ${counter < 0 ? "red" : "green"}`}>{counter}</p>
      {/* {counter < 0 && <p className="red">{counter}</p>}
      {counter >= 0 && <p className="green">{counter}</p>} */}
      <button
        onClick={() => {
          // console.log("Increment");
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
