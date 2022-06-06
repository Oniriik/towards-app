import "./app.css"
import HomePage from '../HomePage/HomePage'
import SignIn from "../../components/SignIn/SignIn";
import NewUser from "../NewUser/NewUser";
import Dashboard from "../Dashboard/Dashboard";
import { AuthProvider } from '../../contexts/AuthProvider'
import { DbFunctions } from '../../contexts/DbFunctions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <AuthProvider>
        <DbFunctions>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<NewUser />} />
            <Route path="/signin" element={<SignIn />} />

          </Routes>
        </DbFunctions>
      </AuthProvider>
    </Router>

  )
}

export default App;
