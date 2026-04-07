# Hangman Game 🎮

A modern Hangman game built using React, Vite, Tailwind CSS, and React Router.
The game allows a user to enter a secret word and another player to guess the word letter by letter before the hangman is completed.

⸻

## 🚀 Features
	•	Start Game page to enter secret word
	•	Hidden word display with masked letters
	•	Alphabet letter buttons
	•	Correct and wrong guess detection
	•	Hangman drawing progression
	•	Win and Lose detection
	•	Restart game option
	•	New word option
	•	Responsive UI using Tailwind CSS
	•	Routing using React Router

⸻

## 🛠️ Tech Stack
	•	React
	•	Vite
	•	Tailwind CSS
	•	React Router DOM
	•	JavaScript (ES6)
	•	HTML5
	•	CSS3

⸻

## 📁 Project Structure
src
│
├── components
│   ├── Button
│   ├── Hangman
│   ├── LetterButtons
│   ├── MaskedText
│   ├── TextInput
│   ├── TextInputForm
│
├── pages
│   ├── StartGame.jsx
│   ├── PlayGame.jsx
│
├── App.jsx
├── main.jsx

## 🎮 Game Flow
	1.	User enters a secret word on the Start Game page.
	2.	The word is hidden and displayed as underscores.
	3.	Player guesses letters using alphabet buttons.
	4.	Correct letters are revealed.
	5.	Wrong guesses increase hangman step.
	6.	Player wins if all letters are guessed.
	7.	Player loses if hangman is completed.

## 🧠 Game Logic
	•	MaskedText → Displays hidden word
	•	LetterButtons → Alphabet buttons and guess handling
	•	Hangman → Displays hangman image based on wrong guesses
	•	PlayGame → Main game logic and state management
	•	TextInputFormContainer → Handles word input and navigation

## 📍 UI

### Enter a secret word
<img width="1072" height="683" alt="Screenshot 2026-04-07 at 10 59 30 PM" src="https://github.com/user-attachments/assets/6c187e43-ae53-4494-982a-ad7955465b04" />

### Wrong answers increase hangman step
<img width="1072" height="683" alt="Screenshot 2026-04-07 at 10 59 45 PM" src="https://github.com/user-attachments/assets/86a3d94e-e04b-4654-9348-a8222a5901fb" />

### Correct letters are guessed
<img width="1072" height="687" alt="Screenshot 2026-04-07 at 11 00 08 PM" src="https://github.com/user-attachments/assets/175f8b45-e80e-4b98-ad64-842d59db6987" />

### User won
<img width="1072" height="687" alt="Screenshot 2026-04-07 at 11 00 13 PM" src="https://github.com/user-attachments/assets/62bd4d18-6781-4e4e-a58a-a90dc7761467" />


 ## ▶️ Run Project Locally
 1. Clone the repository:
    ``git clone git@github.com:anshikasx/Hangman-Game.git``
 2. Go to project folder:
    ``cd Hangman-Game``
 3. Install dependencies:
    ``npm install``
 4. Run development server:
    ``npm run dev``
 5. Open in browser:
    ``http://localhost:5173/start``

## 👩‍💻 Author

Anshika Sinha
  
