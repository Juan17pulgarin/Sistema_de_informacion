import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import { Route, Routes } from 'react-router-dom'
import Settings from './components/settings/Settings';



function App() {
  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/settings' element={<Settings />}></Route>
    </Routes>
  )
}

export default App
