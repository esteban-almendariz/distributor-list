import { useFirestore } from '../hooks/useFirestore'
import { deleteDoc, doc, query, orderBy, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DistributorList.css'
import { useState } from 'react'


const DistributorList = ({ distributors }) => {
    const { deleteDocument, response } = useFirestore('transaction')
    const [notes, setNotes] = useState('')

    const sortDistributors = distributors.sort((a, b) => a.distNumber - b.distNumber)
    
    const handleNotesChange = (e) => {
        e.preventDefault()
        setNotes(e.target.value)
    }

    console.log(notes)

    const deleteDocu = async(id) => {
        const docRef = doc(db, 'transaction', id)
        await deleteDoc(docRef)
    }

    const editClickHandle = ()=> {
        console.log('edit clicked')
    }
    console.log(response.error)

    const listDistributors = sortDistributors.map(distributor => (     
        <details key={distributor.id} className="accordian-container">
                    <summary className="accordian">
                        <span>{distributor.distNumber}</span>
                        <span>{distributor.distName}</span>
                        <span>{distributor.distPhoneNumber}
                            <div className='dist-edit-container'>
                                <img onClick={editClickHandle} src="../../../public/pen-to-square.svg" alt="" />
                                <img onClick={() => deleteDocu(distributor.id)} className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
                            </div>
                        </span>
                    </summary>
                    <div className="textarea-container">
                        <textarea 
                            placeholder='Add notes... IP address...'
                            value={notes}
                            onChange={handleNotesChange}
                        />
                    </div>
        </details>

        // <div key={distributor.id} className='customer-detail'>
        //     <span>{distributor.distNumber}</span>
        //     <span>{distributor.distName}</span>
        //     <span>{distributor.distPhoneNumber} 
        //         <div className='dist-edit-container'>
        //             <img onClick={editClickHandle} src="../../../public/pen-to-square.svg" alt="" />
        //             <img onClick={() => deleteDocu(distributor.id)} className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
        //         </div>
        //     </span> 
        // </div>
    
))



    return (
         <div>
          
            {listDistributors}

            {/* {distributors.map(distributor => (
                    
                    <div key={distributor.id} className='customer-detail'>
                        <span>{distributor.distNumber}</span>
                        <span>{distributor.distName}</span>
                        <span>{distributor.distPhoneNumber} 
                            <div className='dist-edit-container'>
                                <img onClick={editClickHandle} src="../../../public/pen-to-square.svg" alt="" />
                                <img onClick={() => deleteDocu(distributor.id)} className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
                            </div>
                        </span> 
                    </div>
            ))} */}

         </div>
    )
} 

export default DistributorList