import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import DiscriPcion from './components/discripciones/DiscriPcion';
import Login from './components/login/Login';
import MainNavbar from './components/mainNavbar/MainNavbar';
import Settings from './components/settings/Settings';
import Ordenes from './components/ordenes/Ordenes';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/mainNavbar' element={<MainNavbar />} />
    <Route path='/reseña' element={<DiscriPcion />} />
    <Route path='/configuracion' element={<Settings />} />
    <Route path='/recoger' element={<Ordenes />} />
    </Routes>
  )
}

export default App
