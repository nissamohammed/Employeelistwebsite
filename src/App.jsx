
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
      
    </>
  )
}

export default App
