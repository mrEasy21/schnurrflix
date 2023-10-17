import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://schnurrflix.s3.eu-central-1.amazonaws.com/l1-1.png"
          target="_blank"
        >
          <img
            src="https://schnurrflix.s3.eu-central-1.amazonaws.com/l1-1.png"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Cats + Coding</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code>
        </p>
      </div>
    </>
  );
}

export default App;
