import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input || "0").toString());
    } catch (error) {
      setInput("0");
    }
  };

  const handleSignToggle = () => {
    if (input) {
      setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">AC</button>
        <button onClick={handleDelete} className="delete">&#9003;</button>
        <button onClick={handleSignToggle} className="sign-toggle">+/-</button>
        <button onClick={() => handleClick("%")} className="percent">%</button>
        <button onClick={() => handleClick("/")} className="operator">&#247;</button>
        <button onClick={() => handleClick("1")} className="number">1</button>
        <button onClick={() => handleClick("2")} className="number">2</button>
        <button onClick={() => handleClick("3")} className="number">3</button>
        <button onClick={() => handleClick("*")} className="operator">&#215;</button>
        <button onClick={() => handleClick("4")} className="number">4</button>
        <button onClick={() => handleClick("5")} className="number">5</button>
        <button onClick={() => handleClick("6")} className="number">6</button>
        <button onClick={() => handleClick("-")} className="operator">&#8722;</button>
        <button onClick={() => handleClick("7")} className="number">7</button>
        <button onClick={() => handleClick("8")} className="number">8</button>
        <button onClick={() => handleClick("9")} className="number">9</button>
        <button onClick={() => handleClick("+")} className="operator">+</button>
        <button onClick={() => handleClick("0")} className="number zero">0</button>
        <button onClick={() => handleClick(".")} className="dot">.</button>
        <button onClick={handleCalculate} className="operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
