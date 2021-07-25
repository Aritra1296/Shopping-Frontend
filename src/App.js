import './App.css'
import {AuthContextProvider} from './auth/AuthContext'
import Header from './components/header/Header'
import axios from 'axios'
axios.defaults.withCredentials=true;


function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    </>
  )
}

export default App
