import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PlanScreen from './pages/PlanScreen'
import TodoPage from './pages/TodoPage'
import ComponentsPage from './pages/ComponentsPage'
import CoursesPage from './pages/CoursesPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/planner' element={<PlanScreen/>}/>
        <Route path='/todo' element={<TodoPage/>}/>
        <Route path='/components' element={<ComponentsPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
      </Routes>
    </div>
  )
}

export default App
