import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import DiscriPcion from './components/discripciones/DiscriPcion';
import Login from './components/login/Login';
import MainNavbar from './components/mainNavbar/MainNavbar';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/mainNavbar' element={<MainNavbar />} />
    <Route path='/reseña' element={<MainNavbar />} />
    <Route path='/cosulta' element={<MainNavbar />} />
    <Route path='/localizacion' element={<MainNavbar />} />
    <Route path='/recoger' element={<MainNavbar />} />
    <Route path='/configuracion' element={<MainNavbar />} />
    <Route path='/DiscriPcion' element={<DiscriPcion />} />
    </Routes>
  )
}

export default App
