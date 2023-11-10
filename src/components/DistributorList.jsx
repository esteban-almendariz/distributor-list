import { useFirestore } from '../hooks/useFirestore'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import './DistributorList.css'

const DistributorList = ({ distributors }) => {
    const { deleteDocument, response } = useFirestore('transaction')

    const deleteDocu = async(id) => {
        const docRef = doc(db, 'transaction', id)
        await deleteDoc(docRef)
    }
    console.log(response.error)
    return (
         <div>
            {response.error}
            {distributors.map(distributor => (
                
                    <div key={distributor.id} className='customer-detail'>
                        <span>{distributor.distNumber}</span>
                        <span>{distributor.distName}</span>
                        <span>{distributor.distPhoneNumber}</span>
                        <button onClick={() => deleteDocu(distributor.id)}>X</button>
                    </div>
            ))}
         </div>
    )
} 

export default DistributorList