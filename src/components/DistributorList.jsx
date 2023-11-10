import { useFirestore } from '../hooks/useFirestore'
import './DistributorList.css'

const DistributorList = ({ distributors }) => {
    const { deleteDocument } = useFirestore('transaction')
    console.log('distributorList comp', distributors)
    return (
         <div>
            {distributors.map(distributor => (
                
                    <div key={distributor.id} className='customer-detail'>
                        <span>{distributor.distNumber}</span>
                        <span>{distributor.distName}</span>
                        <span>{distributor.distPhoneNumber}</span>
                    </div>
            ))}
         </div>
    )
} 

export default DistributorList