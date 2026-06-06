import {BrowserRouter as Router,  Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import SingIn from './pages/SignIn'
import SignUp from './pages/Signup'
import Home from './pages/Home'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signin' element={<SingIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
