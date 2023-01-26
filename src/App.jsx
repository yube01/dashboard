import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './page/home/Home'
import Login from "./page/login/Login"
import Single from "./page/single/Single"
import List from "./page/list/List"
import New from "./page/new/New"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/users' element={<List/>} />
            <Route path='/users/:userId' element={<Single/>}/>
            <Route path='/users/new' element={<New/>} />


            <Route path='/products' element={<List/>} />
            <Route path='/products/:productsId' element={<Single/>}/>
            <Route path='/products/new' element={<New/>} />



            
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
