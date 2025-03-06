import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PlanScreen from './pages/PlanScreen'
import TodoPage from './pages/TodoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/planner' element={<PlanScreen/>}/>
        <Route path='/todo' element={<TodoPage/>}/>
      </Routes>
    </div>
  )
}

export default App
