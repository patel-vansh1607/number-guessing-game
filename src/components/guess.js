import "../styles/guess.css"
import React, { useState } from 'react';

const NumberGuessingGame = () => {

    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
    const [attempts, setAttempts] = useState(0);

    const handleGuessChange = (e) => {
        setGuess(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userGuess = parseInt(guess);
    
        if (isNaN(userGuess)) {
          setMessage('Please enter a valid number.');
          return;
        }
    
        setAttempts(attempts + 1);
    
        if (userGuess === target) {
          setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
        } else if (userGuess < target) {
          setMessage('Too low! Try again.');
        } else {
          setMessage('Too high! Try again.');
        }
    
        setGuess('');
      };
    
      const handleRestart = () => {
        setTarget(Math.floor(Math.random() * 100) + 1);
        setAttempts(0);
        setMessage('');
        setGuess('');
      };

    return(
        <div className="main-div">
            <div className="main">
                <h1>Number Guessing Game</h1>
                <form onSubmit={handleSubmit}>
                <input type="number" value={guess} onChange={handleGuessChange} placeholder="Enter a number between 1 and 100"/>
                <button type="submit">Submit Guess</button>
                </form>
                <p>{message}</p>
                <p>Attempts: {attempts}</p>
                <button onClick={handleRestart}>Restart Game</button>
            </div>
        </div>
    )
}

export default NumberGuessingGame