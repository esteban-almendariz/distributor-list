
import { useState } from 'react'
import './AddNewCustomer.css'

const AddNewCustomer = () => { 
    const [newCustomer, setNewCustomer] = useState({
        distNumber: '',
        distName: '',
        distPhoneNumber: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newCustomer)
        console.log('click')
    } 

    const handleFormChange = (e) => {
        const { name, value} = e.target
        setNewCustomer(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(newCustomer)
    }

    console.log('form Submitted:', newCustomer)

    return(
            <form onSubmit={handleSubmit} className='new-cust-container'>
                  <label> Search
                       <input 
                            type="text" 
                            placeholder='Distributor #' 
                            
                        />
                  </label>
                  <label> Distributor # 
                        <input 
                            type="text" 
                            placeholder='Distributor #' 
                            value={newCustomer.distNumber}
                            onChange={handleFormChange}
                            name='distNumber'
                            />
                  </label>
                  <label> Distributor Name 
                        <input 
                            type="text" 
                            placeholder='Distributor Name' 
                            value={newCustomer.distName}
                            onChange={handleFormChange}
                            name='distName'
                            />
                  </label>
                  <label> Contact 
                        <input 
                            type="text" 
                            placeholder='Phone #' 
                            value={newCustomer.distPhoneNumber}
                            onChange={handleFormChange}
                            name='distPhoneNumber'
                            />
                  </label>
                  <button>Create</button>
            </form>
    )
}

export default AddNewCustomer