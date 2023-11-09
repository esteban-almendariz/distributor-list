

const DistributorList = ({ distributor }) => {

    console.log('distributorList comp', distributor)
    return (
         <ul>
            {distributor.map(distributor => (
                <li key={distributor.id}>
                    <p>{distributor.distName}</p>
                    <p>{distNumber}</p>
                    <p>{distPhoneNumber}</p>
                </li>
            ))}
         </ul>
    )
} 

export default DistributorList