import AddNewCustomer from "../components/AddNewCustomer"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCollection } from "../hooks/useCollection"
import DistributorList from "../components/DistributorList"

const Home = () => {
    const { user } = useAuthContext()
    const { documents, error} = useCollection('transaction')

    return (
        <>
        <AddNewCustomer uid={user.uid}/>
        <div className='logged-in-view'>
              <h1 className='dist-title'>Distributor List</h1>
              <div>
                <div className='list-title'>
                  <span>Distributor Number</span>
                  <span>Distributor</span>
                  <span>Contact</span>
                </div>
                <div className='customer-detail'>
                  <span>4581</span>
                  <span>IBS Miami & Florida Keys</span>
                  <span>888-888-8888</span>
                </div>
              </div>
        </div>
        {error && <p>{error}</p>}
        {documents && <DistributorList distributors= {documents}/>}
        </>
    )
}

export default Home