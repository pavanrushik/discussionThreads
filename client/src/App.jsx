import './App.css'
import Qpage from './q_page/Qpage'
import Apage from './a_page/Apage'
import Profile from './p_page/Profile'
// import Profiles from './p_page/Profiles'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './Nav';
import Login from './l_page/login';
import Signup from './l_page/signup';
import About from './about';

function App() {
  let pid = Math.floor((Math.random() * 4000) + 1)
  // let pid = 1653
  return (
    <>
      {/* {pid} */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<><Navbar pid={pid}/><Qpage pid={pid} /></>} />
          <Route path='/ans/:qid/:qpid' element={<><Navbar pid={pid}/><Apage pid={pid} /></>} />
          {/* <Route path='/profiles' element={<Profiles/>}/> */}

          <Route exact path='/login' element={<><Navbar pid={pid} /><Login /></>} />
          <Route exact path='/signup' element={<><Navbar pid={pid}/><Signup /></>} />
          <Route exact path='/about' element={<><Navbar pid={pid}/><About /></>} />
          
          <Route path='/profile/:id' element={<Profile pid={pid}/>} />
          {/* <Route exact path='/profile' element={<Profile />} /> */}


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
