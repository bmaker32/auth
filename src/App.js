import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Profile } from './pages/Profile'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="p-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
    
    </BrowserRouter>  )
}

export default App