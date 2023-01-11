import { Routes, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import SignUp from '../components/SignUp/SignUp'
const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  )
}

export default Paths
