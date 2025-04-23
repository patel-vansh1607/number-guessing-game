import "../styles/guess.css"

const NumberGuessingGame = () => {

    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
    const [attempts, setAttempts] = useState(0);

    const handleGuessChange = (e) =>{
        setGuess(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.prevent.default()
        const userGuess = parseInt(guess)

        if (NaN(userGuess)){
            setMessage('Please enter a valid number please')
            return
        }
    }
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