import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios'
const AuthContext = createContext()

function AuthContextProvider(props) {
  const [loginUserID, setloginUserID] = useState('')
  const [loginUserRole, setloginUserRole] = useState('')
  const [loggedIn, setLoggedIn] = useState(undefined)

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get(
        'http://localhost:3005/users/loggedIn'
      )
      setLoggedIn(loggedInRes.data.loggedIn)
      setloginUserID(loggedInRes.data.user)
      setloginUserRole(loggedInRes.data.userRole)
    } catch (error) {
      setLoggedIn(false)
    }
  }
  useEffect(() => {
    getLoggedIn()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        getLoggedIn,
        loginUserID,
        setloginUserID,
        loginUserRole,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext
export { AuthContextProvider }
