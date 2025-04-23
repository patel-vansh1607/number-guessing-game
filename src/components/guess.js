import "../styles/guess.css"

const NumberGuessingGame = () => {
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