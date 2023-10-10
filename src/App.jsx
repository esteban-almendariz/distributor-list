import { useState } from 'react'
import Auth from './components/auth'
import './App.css'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"




function App() {


  // Firebase
const authCreateAccountWithEmail = () => {
    const email = credentials.email
    const password = credentials.password 
    
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed up 
        console.log('logged In')
        // ...
      })
      .catch((error) => {
        console.log(error.message)
        // ..
      });
    }



  const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setCredentials(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    authCreateAccountWithEmail()
    
  }


  return (
    <>
      <Auth />
      <div id='logged-in-view'>
            <h1>Distributor List</h1>
              <div>
                <label>
                    Search <input type="text" placeholder='Distributor #' />
                </label>
                
              </div>

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
      </div>
      
    </>
  )
}

export default App
