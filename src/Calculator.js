import React, { useState } from "react";

function Calculator() {
    // Initialize the state for the calculator
    const [result, setResult] = useState("0");
    const [input, setInput] = useState("");

    // Handle button clicks
    const handleClick = (e) => {
        // Update the input state
        setInput(input + e.target.value);
    };

    // Handle the '=' button
    const handleEqual = () => {
        // Use eval() to calculate the result
        setResult(eval(input));
        // Clear the input state
        setInput("");
    };

    // Handle the 'C' button
    const handleClear = () => {
        setInput("");
        setResult("0");
    };

    return (
        <div className="calculator">
            <div>
                <div>
                    <input type="text" value={result} disabled />
                    <input type="text" value={input} disabled />
                </div>
                <div>
                    <button onClick={handleClick} value="1">1</button>
                    <button onClick={handleClick} value="2">2</button>
                    <button onClick={handleClick} value="3">3</button>
                    <button onClick={handleClick} value="+">+</button>
                </div>
                <div>
                    <button onClick={handleClick} value="4">4</button>
                    <button onClick={handleClick} value="5">5</button>
                    <button onClick={handleClick} value="6">6</button>
                    <button onClick={handleClick} value="-">-</button>
                </div>
                <div>
                    <button onClick={handleClick} value="7">7</button>
                    <button onClick={handleClick} value="8">8</button>
                    <button onClick={handleClick} value="9">9</button>
                    <button onClick={handleClick} value="*">*</button>
                </div>
                <div>
                    <button onClick={handleClick} value=".">.</button>
                    <button onClick={handleClick} value="0">0</button>
                    <button onClick={handleEqual} value="=">=</button>
                    <button onClick={handleClick} value="/">/</button>
                </div>
                <div>
                    <button onClick={handleClear} value="C">C</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
