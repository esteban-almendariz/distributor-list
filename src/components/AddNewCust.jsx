import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const AddNewCust = () => {
    const {color} = useContext(ThemeContext) 

    return(
            <div style={{backgroundColor: color}}>
                  <label>
                      Search <input type="text" placeholder='Distributor #' />
                  </label>
                  <div>
                        <label>
                            Distributor # <input type="text" placeholder='Distributor #' />
                        </label>
                        <label>
                            Distributor Name <input type="text" placeholder='Distributor Name' />
                        </label>
                        <label>
                            Contact <input type="text" placeholder='Phone #' />
                        </label>
                        <button>Create</button>
                 </div>
            </div>
    )
}

export default AddNewCust