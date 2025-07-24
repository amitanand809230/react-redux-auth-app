import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoute from './componenets/PrivateRoute'
import Dashboard from './pages/Dashboard'
import Footer from './pages/Footer'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route  element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
