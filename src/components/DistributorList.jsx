import { useFirestore } from '../hooks/useFirestore'
import { deleteDoc, doc, query, orderBy, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './DistributorList.css'


const DistributorList = ({ distributors }) => {
    const { deleteDocument, response } = useFirestore('transaction')

    const distRef = collection(db, 'transaction')
    const q = query(distRef, orderBy('distNumber'))
    
    console.log(distributors)

    const deleteDocu = async(id) => {
        const docRef = doc(db, 'transaction', id)
        await deleteDoc(docRef)
    }

    const editClickHandle = ()=> {
        console.log('edit clicked')
    }
    console.log(response.error)

    const listDistributors = distributors.map(distributor => (     
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
))

    return (
         <div>
            {response.error}
            {listDistributors.sort((a, b) => a.distNumber - b.distNumber)}

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