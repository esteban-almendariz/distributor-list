import { useState } from 'react'
import Auth from './components/auth'
import Nav from './components/Nav'
import './App.css'




function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  console.log(`USER Logged In? ${isUserLoggedIn} from APP`)

  const handleUserLoggedIn = () => setIsUserLoggedIn(prevState => !prevState)



  return (
    <>
      
       <Auth switchLogIn={handleUserLoggedIn} 
              userLoggedIn={isUserLoggedIn}
      />
      {isUserLoggedIn && <div className='logged-in-view'>
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
      </div>}
      
    </>
  )
}

export default App
