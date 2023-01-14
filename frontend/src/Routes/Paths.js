import { Routes, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import SignUp from '../components/SignUp/SignUp'
import Login from '../components/Login/Login'
const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}

export default Paths
