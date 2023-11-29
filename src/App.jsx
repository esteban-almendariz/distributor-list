import { useState, useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { useAuthContext } from './hooks/useAuthContext'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { collection, addDoc } from "firebase/firestore"; 
import './App.css'




function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const { authIsReady, user} = useAuthContext()

  const context = useContext(AuthContext)

  console.log('from App testing', context)
  console.log('from App testing', context.authIsReady)


  // const handleUserLoggedIn = () => setIsUserLoggedIn(prevState => !prevState)

  // const addCustomer = async() => {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  return (
    <>
      {authIsReady && (
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path='/' element={user ? <Home />: <Navigate to='/login' />}/>
                <Route  path='/login' element={user ? <Navigate to='/'/> : <Login />} />
                <Route  path='/signup' element={user ? <Navigate to='/' />: <Signup />} /> 
              </Routes>
          </BrowserRouter>
      )}
      
      
    </>
  )
}

export default App
