import { useFirestore } from '../hooks/useFirestore'
import { useState, useEffect } from 'react'
import { deleteDoc, doc, query, orderBy, collection, arrayUnion, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DistributorList.css'


const DistributorList = ({ distributors }) => {
    
    const [notes, setNotes] = useState('')

    const sortDistributors = distributors.sort((a, b) => a.distNumber - b.distNumber)

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'transaction'), (snapshot) => {
          const notesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setNotes(notesData);
        });
    
        return () => unsubscribe();
      }, []);

    const editNotes = async(note, id) => {
        const docRef = doc(db, 'transaction', id)

        try {
            await updateDoc(docRef, {
            notes: arrayUnion(note)})
        }
        catch (error) {
            console.log(error.message)
        }
    }
    
    const handleNotesChange = (e) => {
        e.preventDefault()
        setNotes(e.target.value)
    }

    console.log(notes)

    const deleteDocu = async(id) => {
        const docRef = doc(db, 'transaction', id)
        await deleteDoc(docRef)
    }

    const editClickHandle = (id)=> {
        console.log('edit clicked', id)
        editNotes(notes, id)
    }

    const editClick = (id) => {
        console.log(id)
    }
    

    const listDistributors = sortDistributors.map(distributor => (     
        <details key={distributor.id} className="accordian-container">
                    <summary className="accordian">
                        <span>{distributor.distNumber}</span>
                        <span>{distributor.distName}</span>
                        <span>{distributor.distPhoneNumber}
                            <div className='dist-edit-container'>
                                <img onClick={() => editClickHandle(distributor.id)} src="../../../public/pen-to-square.svg" alt="" />
                                <img onClick={() => deleteDocu(distributor.id)} className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
                            </div>
                        </span>
                    </summary>
                    <div className="textarea-container">
                        <textarea onClick={() => editClick(distributor.id)}
                            placeholder='Add notes... IP address...'
                            value={distributor.notes}
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