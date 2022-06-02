import "./app.css"

import SignUp from "../SignUp/SignUp";
import {AuthProvider} from '../contexts/AuthProvider'

function App() {
  return (
  <AuthProvider>
    <SignUp/>
  </AuthProvider>
)
}

export default App;
