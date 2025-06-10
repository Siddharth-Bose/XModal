import React, { useEffect, useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button
        onClick={() => {
          setIsModalOpen((prev) => !prev); // Simpler toggle: !prev
        }}
      >
        Open Form
      </button>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default App;