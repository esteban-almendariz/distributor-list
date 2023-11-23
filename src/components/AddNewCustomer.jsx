
import { useEffect, useState } from 'react'
// import { useFirestore } from '../hooks/useFirestore'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import './AddNewCustomer.css'

const AddNewCustomer = ({ uid, displaySearch }) => { 
    const [newCustomer, setNewCustomer] = useState({
        distNumber: '',
        distName: '',
        distPhoneNumber: '',
        notes: '',
        uid: uid
    })
    const [searchDist, setSearchDist] = useState('')

    // const { addDocument, response } = useFirestore('transaction')
    

    //add a document
    const addDocument = async (doc) => {
        const ref = collection(db, 'transaction')
        try {
            await addDoc(ref, doc)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument(newCustomer)
        setNewCustomer({
                        distNumber: '',
                        distName: '',
                        distPhoneNumber: '',
                        notes: '',
                        uid: uid
                    })
    } 


    const handleFormChange = (e) => {
        const { name, value} = e.target
        setNewCustomer(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleChangeSearchDist = (e) => {
        setSearchDist(e.target.value)
    }

    const handleClickSearch = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        displaySearch(searchDist)
        setSearchDist('')
    }

    return( 
            <div>
                <form>
                        <div className='search-container'>
                        <label> Search
                                <input 
                                    type="text" 
                                    placeholder='Distributor #' 
                                    value={searchDist}
                                    name='searchDist'
                                    onChange={handleChangeSearchDist}
                                />
                        </label>
                        <button onClick={(e) => handleClickSearch(e)}>Search</button>
                    </div>
                </form>
                
                <form onSubmit={handleSubmit} className='new-cust-container'>
                    
                    
                    <label> Distributor # 
                            <input 
                                type="text" 
                                placeholder='Distributor #' 
                                value={newCustomer.distNumber}
                                onChange={handleFormChange}
                                name='distNumber'
                                required
                                />
                    </label>
                    <label> Distributor Name 
                            <input 
                                type="text" 
                                placeholder='Distributor Name' 
                                value={newCustomer.distName}
                                onChange={handleFormChange}
                                name='distName'
                                required
                                />
                    </label>
                    <label> Contact 
                            <input 
                                type="text" 
                                placeholder='Phone #' 
                                value={newCustomer.distPhoneNumber}
                                onChange={handleFormChange}
                                name='distPhoneNumber'
                                required
                                />
                    </label>
                    <button>Create</button>
                </form>
            </div>
    )
}

export default AddNewCustomer