
import { useState, useEffect } from 'react'
import { deleteDoc, doc, query, orderBy, collection, arrayUnion, updateDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import './DistributorList.css'



const DistributorList = ({ distributors }) => {
    const sortDistributors = distributors.sort((a, b) => a.distNumber - b.distNumber)

    const [notes, setNotes] = useState(sortDistributors)

    
    const updateNoteChange = async(e,id) => {
        const docRef = doc(db, 'transaction', id)
        await setDoc(docRef, {notes: e.target.value}, {merge: true})
    }

    //  console.log(notes)

    const deleteDocu = async(id) => {
        const docRef = doc(db, 'transaction', id)
        await deleteDoc(docRef)
    }

    const editClickHandle = async(id, note) => {
        console.log('edit clicked', id)
        const docRef = doc(db, 'transaction', id)
        
         try {
            await updateDoc(docRef, {notes: arrayUnion(note)})
         }

         catch (error) {
            console.log(error.message)
         }
      
    }

    const editClick = (id) => {
        console.log(id)
    }
    

    const listDistributors = sortDistributors.map((distributor, index) => (     
        <details key={distributor.id} className="accordian-container">
                    <summary className="accordian">
                        <span>{distributor.distNumber}</span>
                        <span>{distributor.distName}</span>
                        <span>{distributor.distPhoneNumber}
                            <div className='dist-edit-container'>
                                {/* <img onClick={() => editClickHandle(distributor.id, distributor.notes)} src="../../../pen-to-square.svg" alt="" /> */}
                                <img onClick={() => deleteDocu(distributor.id)} className={'trashcan-icon'} src='../../../trash-can.svg'></img> 
                            </div>
                        </span>
                        
                    </summary>
                    <div className="textarea-container">
                        <textarea onClick={() => editClick(distributor.id)}
                            placeholder='Add notes... IP address...'
                            value={distributor.notes}
                            key={index}
                            onChange={(e) => updateNoteChange(e, distributor.id)}
                        />
                    </div>
        </details>
    
    ))
    return (
         <div>
            {listDistributors}
         </div>
    )
} 

export default DistributorList