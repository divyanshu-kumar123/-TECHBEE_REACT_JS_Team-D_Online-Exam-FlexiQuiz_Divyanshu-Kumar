import React, {useState} from "react"
import { useHistory } from "react-router-dom"

const Login = (props) => {

  
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // authtoken will be saved and it will redirected to home

            localStorage.setItem('token', json.authtoken); 

            history.push("/");
            props.showAlert("Logged insuccessfully", "success")

        }
        else{
            props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e)=>{

        setCredentials({...credentials, [e.target.name]: e.target.value})

    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle loginBody ">
            <h1 className="h1">Login</h1>
            <form  onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="email" className="form-control LoginInput" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder='Enter your Email' />
            </div>
            <div className="mb-3">
            <input type="password" className="form-control LoginInput" value={credentials.password} onChange={onChange} name="password" id="password" placeholder='Enter your Password' /></div>

            <div className="buttons">
            <button type="submit" className="button btn btn-primary">Submit</button>
            <div className="or">or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </form>

        </div>
    )
}

export default Login