import React, { useState, ChangeEvent } from "react";
import Counter from "./components/Counter";
import SavedState from "./components/SavedState";

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <h1>Save Data Example</h1>
      <SavedState />
      <Counter />
    </div>
  );
};

export default App;
