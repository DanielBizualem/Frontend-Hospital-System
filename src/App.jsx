import React from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyAppointements from './pages/MyAppointements'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Doctors from './pages/Doctor'
import Appointment from './pages/Appointment'
import Navbar from './Components/Navbar'
import About from './pages/About'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctors/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/my-profile' element={<MyProfile/>}></Route>
        <Route path='/my-appointment' element={<MyAppointements/>}></Route>
        <Route path='/appointment/:docId' element={<Appointment/>}></Route>
        <Route path='/profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/appointment' element={<MyAppointements></MyAppointements>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App