import { useState } from 'react'
import {BrowserRouter, Switch, Routes} from 'react-router-dom'

import Auth from './components/auth'
import Nav from './components/Navbar'
import AddNewCust from './components/AddNewCust';
import { collection, addDoc } from "firebase/firestore"; 
import './App.css'




function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  console.log(`USER Logged In? ${isUserLoggedIn} from APP`)

  const handleUserLoggedIn = () => setIsUserLoggedIn(prevState => !prevState)

  const addCustomer = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      
       <Auth switchLogIn={handleUserLoggedIn} 
              userLoggedIn={isUserLoggedIn}
      />
      {isUserLoggedIn && 
      <div className='logged-in-view'>
              <h1 className='dist-title'>Distributor List</h1>
              <AddNewCust />

              <div>
                <div className='list-title'>
                  <span>Distributor Number</span>
                  <span>Distributor</span>
                  <span>Contact</span>
                </div>
                <div className='customer-detail'>
                  <span>4581</span>
                  <span>IBS Miami & Florida Keys</span>
                  <span>888-888-8888</span>
                </div>
                <div className='customer-detail'>
                  <span>4782</span>
                  <span>IBS Florida Space Coast</span>
                  <span>888-888-8888</span>
                </div>
                <div className='customer-detail'>
                  <span>4782</span>
                  <span>IBS Florida Space Coast</span>
                  <span>888-888-8888</span>
                </div>
                <div className='customer-detail'>
                  <span>4782</span>
                  <span>IBS Florida Space Coast</span>
                  <span>888-888-8888</span>
                </div>
              </div>
      </div>}
      
    </>
  )
}

export default App
