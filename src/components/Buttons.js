import React from 'react'
import { Link } from 'react-router-dom'


function Buttons() {
    
  return (
    <div>
            <div className="position-absolute top-50 start-50 translate-middle bottom buttonsMain mx-4">
            {localStorage.getItem('token')? <div>
            <Link className="btn btn-primary btn-lg mx-3 my-4" to="/login">Login</Link>
            <Link className="btn btn-primary btn-lg mx-3 my-4" to="/register">Register</Link>
             </div>   : <button className='btn btn-primary'>Logout</button>}

                </div>  
                </div>
  )
}

export default Buttons
