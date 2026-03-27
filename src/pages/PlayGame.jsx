import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";

function PlayGame() {

    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [gameStatus, setGameStatus] = useState("playing"); // playing | won | lost

    function handleLetterClick(letter) {
        if (gameStatus !== "playing") return;

        let newStep = step;

        if (state.wordSelected.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            newStep = step + 1;
            setStep(newStep);

            if (newStep >= 7) {
                setGameStatus("lost");
            }
        }

        const updatedLetters = [...guessedLetters, letter];
        setGuessedLetters(updatedLetters);

        // Check Win Condition
        const uniqueLetters = new Set(state.wordSelected.toUpperCase().split(''));
        const guessedSet = new Set(updatedLetters);

        let allGuessed = true;
        uniqueLetters.forEach(letter => {
            if (!guessedSet.has(letter)) {
                allGuessed = false;
            }
        });

        if (allGuessed) {
            setGameStatus("won");
        }
    }

    function restartGame() {
        setGuessedLetters([]);
        setStep(0);
        setGameStatus("playing");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <h1 className="text-3xl font-bold mb-4">Play Hangman</h1>

            {/* Masked Word */}
            <div className="text-3xl mb-4">
                <Maskedtext 
                    text={state.wordSelected} 
                    guessedLetters={guessedLetters} 
                />
            </div>

            {/* Hangman Image */}
            <div className="mb-4">
                <HangMan step={step} />
            </div>

            {/* Letter Buttons */}
            <div className="flex flex-wrap justify-center max-w-md mb-4">
                <LetterButtons 
                    text={state.wordSelected} 
                    guessedLetters={guessedLetters} 
                    onLetterClick={handleLetterClick} 
                />
            </div>

            {/* Game Result */}
            {gameStatus === "won" && (
                <h2 className="text-green-500 text-2xl mb-2">
                    🎉 You Won!
                </h2>
            )}

            {gameStatus === "lost" && (
                <h2 className="text-red-500 text-2xl mb-2">
                    💀 You Lost! Word was: {state.wordSelected}
                </h2>
            )}

            {/* Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={restartGame}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Restart
                </button>

                <Link 
                    to='/start'  
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                    New Word
                </Link>
            </div>

        </div>
    );
}

export default PlayGame;