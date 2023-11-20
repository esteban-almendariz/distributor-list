import { useFirestore } from '../hooks/useFirestore'
import { useState, useEffect } from 'react'
import { deleteDoc, doc, query, orderBy, collection, arrayUnion, updateDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DistributorList.css'
import { async } from '@firebase/util'


const DistributorList = ({ distributors }) => {
    const sortDistributors = distributors.sort((a, b) => a.distNumber - b.distNumber)

    const [notes, setNotes] = useState(sortDistributors)

    
    const updateNoteChange = async(e,id) => {
        // above parameters i had (index, e)
        // const newNotes = [...notes]
        // newNotes[index].notes = e.target.value
        // setNotes(newNotes)

        // console.log(notes[index])
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
                                <img onClick={() => editClickHandle(distributor.id, distributor.notes)} src="../../../public/pen-to-square.svg" alt="" />
                                <img onClick={() => deleteDocu(distributor.id)} className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
                            </div>
                        </span>
                    </summary>
                    <div className="textarea-container">
                        <textarea onClick={() => editClick(distributor.id)}
                            placeholder='Add notes... IP address...'
                            value={distributor.notes}
                            key={index}
                            // onChange={(e) =>handleNotesChange(index, e)}
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