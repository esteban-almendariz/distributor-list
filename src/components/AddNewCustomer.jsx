
import { useEffect, useState } from 'react'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import './AddNewCustomer.css'

const AddNewCustomer = ({ uid, displaySearch, searchError }) => { 
    const [newCustomer, setNewCustomer] = useState({
        distNumber: '',
        distName: '',
        distPhoneNumber: '',
        notes: '',
        uid: uid
    })
    const [searchDist, setSearchDist] = useState('')

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
        displaySearch(searchDist)
        setSearchDist('')
    }

    return( 
            <div>
                <form onSubmit={(e) => handleClickSearch(e)}>
                        <div className='search-container'>
                            <div className='search-div'>
                            <label> Search
                                <input 
                                    type="text" 
                                    placeholder='Distributor #' 
                                    value={searchDist}
                                    name='searchDist'
                                    onChange={handleChangeSearchDist}
                                    required
                                />
                            </label>
                            <button>Search</button> 
                            </div>
                            {searchError && <p className='search-error'>{searchError}</p>}
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
                                minLength='12'
                                maxLength='12'
                                placeholder='Example: 123-222-3333' 
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