import { useFirestore } from '../hooks/useFirestore'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { trashImg } from '../../../public/trash-can.svg'
import './DistributorList.css'
import { icon } from '@fortawesome/fontawesome-svg-core'

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
                        <span>{distributor.distPhoneNumber} 
                            <div className='dist-edit-container'>
                                <button>
                                    <img src="../../../public/pen-to-square.svg" alt="" />
                                </button>
                                <button onClick={() => deleteDocu(distributor.id)}>
                                   <img className={'trashcan-icon'} src='../../../public/trash-can.svg'></img> 
                                </button>
                                
                            </div>
                        </span>
                        
                        
                    </div>
            ))}
         </div>
    )
} 

export default DistributorList