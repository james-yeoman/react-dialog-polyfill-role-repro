import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Modal from "./Modal";

function App() {
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          data-testid="modal-button"
          onClick={() => {
            setCount((count) => count + 1);
            setModal(true);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Modal isOpen={modal} closeModal={() => setModal(false)} title="My Modal">
        <h2>Hello everybody!</h2>
        <span>Count is {count}</span>
      </Modal>
      <p role="region" className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
