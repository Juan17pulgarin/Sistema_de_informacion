import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
