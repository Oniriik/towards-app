import "./app.css"
import HomePage from '../HomePage/HomePage'
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import { AuthProvider } from '../../contexts/AuthProvider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App;
