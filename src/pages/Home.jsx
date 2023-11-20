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
              </div>
        </div>
        {error && <p>{error}</p>}
        {documents && <DistributorList distributors= {documents}/>}
	    
        </>
    )
}

export default Home