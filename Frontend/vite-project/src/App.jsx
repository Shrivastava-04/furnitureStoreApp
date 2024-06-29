import React from 'react'
import Home from './Home/home'
import { Route, Routes } from "react-router-dom"
import Mores from './more/Mores'
import Signup from './components/Signup'
import Contacts from './contact/Contacts'
function App() {
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/more" element={<Mores/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
    </Routes>
    </div>
  </>)
}

export default App
