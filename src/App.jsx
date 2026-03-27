import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {
  return (
    <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={<Navigate to="/start" />} />
    </Routes>
  )
}

export default App