import React  from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Header from './Conponent/Header'
import Footer from './Conponent/Footer'

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Signup" element={<SignUp/>}/>
<Route path="/Header" element={<Header/>}/>
<Route path="/Footer" element={<Footer/>}/>
    </Routes>
    </BrowserRouter>  
  )
}

export default App