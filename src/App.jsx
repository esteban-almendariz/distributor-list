import { useState } from 'react'
import Auth from './components/auth'
import Nav from './components/Nav'
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
              <div>
                  <label>
                      Search <input type="text" placeholder='Distributor #' />
                  </label>
                  <div>
                  <label>
                      Distributor # <input type="text" placeholder='Distributor #' />
                  </label>
                  <label>
                      Distributor Name <input type="text" placeholder='Distributor Name' />
                  </label>
                  <label>
                      Contact <input type="text" placeholder='Phone #' />
                  </label>
                  <button>Create</button>
              </div>
                
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
      </div>}
      
    </>
  )
}

export default App
