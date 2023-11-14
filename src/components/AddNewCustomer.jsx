
import { useEffect, useState } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import './AddNewCustomer.css'

const AddNewCustomer = ({ uid }) => { 
    const [newCustomer, setNewCustomer] = useState({
        distNumber: '',
        distName: '',
        distPhoneNumber: '',
        uid: uid
    })
    const [searchDist, setSearchDist] = useState('')

    const { addDocument, response } = useFirestore('transaction')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument(newCustomer)
    } 

    useEffect(() => {
        if(response.success) {
            setNewCustomer({
                distNumber: '',
                distName: '',
                distPhoneNumber: '',
                uid: uid
            })
        }
    }, [response.success])

    const handleFormChange = (e) => {
        const { name, value} = e.target
        setNewCustomer(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSearchDist = (e) => {
        setSearchDist(e.target.value)
    }

    console.log(searchDist)

    return(
            <form onSubmit={handleSubmit} className='new-cust-container'>
                  <label> Search
                       <input 
                            type="text" 
                            placeholder='Distributor #' 
                            value={searchDist}
                            name='searchDist'
                            onChange={handleSearchDist}
                        />
                  </label>
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
    )
}

export default AddNewCustomer