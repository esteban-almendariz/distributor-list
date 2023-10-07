import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"




function App() {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
})

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-tean2nlSO1bGMdBblMrL6MEVRt5uUTQ",
  authDomain: "distributors-list-c8d3f.firebaseapp.com",
  projectId: "distributors-list-c8d3f",
  storageBucket: "distributors-list-c8d3f.appspot.com",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


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




  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <form id='logged-out-view'>
          <h1>Distributors List</h1>
          
          <div className='sign-in-form'>
            
              {/* <button>Sign in with Google</button> */}
            
            <input type="email" 
                    name="email" 
                    placeholder='Email'
                    value={credentials.email}
                    onChange={handleFormChange}
                    />
            <input type="password" 
                   name="password" 
                   placeholder='Password'
                   value={credentials.password}
                   onChange={handleFormChange}
                   />

            {/* <button className='sign-in-btn'>Sign in</button> */}
            <button className='create-account-btn' onSubmit={handleSubmit}>Create Account</button>
          </div>
      </form>
      <div id='logged-in-view'>
        <h1>Distributor List</h1>
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
