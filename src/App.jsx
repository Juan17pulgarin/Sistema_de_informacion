import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
