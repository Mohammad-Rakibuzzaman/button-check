import React, { useState, ChangeEvent } from "react";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [savedValue, setSavedValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setSavedValue(inputValue);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Save Input to State</h1>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-4"
        placeholder="Enter something ..."
      />

      <button
        onClick={handleButtonClick}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
      <p className="mt-4">Saved Value: {savedValue} </p>
    </div>
  );
}

export default App;
