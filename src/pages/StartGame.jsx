import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer"

function StartGame(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
           <h1 className="text-4xl font-bold mb-6 text-blue-500">
              Hangman Game
           </h1> 
           <TextInputFormContainer />
        </div>
    );
}

export default StartGame;