import React, { useState } from "react";

const RandomNumberGenerator = () => {
    const [numbers, setNumbers] = useState(new Array(100).fill(''));

  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 100; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      randomNumbers.push(randomNumber);
    }
    setNumbers(randomNumbers);
  };
  

  return (
    <div>
      {/* <h2 style={{textAlign: "center", fontSize: "30px"}}>Generate 10 Random Numbers</h2> */}
      <div className="generate-button">
        <button onClick={generateRandomNumbers}>Generate Numbers</button>
      </div>
      <div className="number-container">
  {numbers.map((number, index) => (
    <div key={index} className="number-box">
      <div className="number-value" style={{ height: `${number}px` }} />
      <div>{number !== '' ? number : '-'}</div>{}
    </div>
  ))}
</div>

    </div>
  );
};

export default RandomNumberGenerator;