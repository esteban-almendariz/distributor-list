import AddNewCustomer from "../components/AddNewCustomer"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCollection } from "../hooks/useCollection"
import DistributorList from "../components/DistributorList"
import { useState } from "react"
import './Home.css'

const Home = () => {
    const { user } = useAuthContext()
    const { documents, error} = useCollection('transaction')
    const [filteredDist, setFilteredDist] = useState('')

    const displaySearch = (distNumber) => {
        const filterDist = documents.filter(dist => dist.distNumber === distNumber)
        setFilteredDist(filterDist)
    }

    const handleCloseSearch = () => {
        console.log('close')
        setFilteredDist('')
    }

    console.log('filteredDist',filteredDist)
    return (
        <>
        <AddNewCustomer 
            uid={user.uid}
            displaySearch={displaySearch}
        />
        {filteredDist && (
            <div className='searched-customer-detail'>
                <span>{filteredDist[0].distNumber}</span>
                <span>{filteredDist[0].distName}</span>
                <span>{filteredDist[0].distPhoneNumber}
                    <span className="close-search" onClick={handleCloseSearch}>X</span>
                    
                </span>
            </div>
        )}
        <div className='logged-in-view'>
              <h1 className='dist-title'>Distributor List</h1>
              <div>
                <div className='list-title'>
                  <span>Distributor Number</span>
                  <span>Distributor</span>
                  <span>Contact</span>
                </div>
                
                 {/* TESTING ACCORDIAN CSS */}
                  <details className="accordian-container">
                    <summary className="accordian">
                        <span>4581</span>
                        <span>IBS Miami & Florida Keys</span>
                        <span>888-888-8888</span>
                    </summary>
                    <div className="textarea-container">
                        <textarea 
                            placeholder="Add Notes"
                        />
                    </div>
                    
                  </details>

                  <details className="accordian-container">
                    <summary className="accordian">
                        <span>4581</span>
                        <span>IBS Miami & Florida Keys</span>
                        <span>888-888-8888
                            <div className='dist-edit-container'>
                                <img  src="../../../public/pen-to-square.svg" alt="" />
                                <img  className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
                            </div>
                        </span>
                    </summary>
                    <div className="textarea-container">
                        <textarea 

                        />
                    </div>
                  </details>
                
              </div>
        </div>
        {error && <p>{error}</p>}
        {documents && <DistributorList distributors= {documents}/>}
	    
        </>
    )
}

export default Home