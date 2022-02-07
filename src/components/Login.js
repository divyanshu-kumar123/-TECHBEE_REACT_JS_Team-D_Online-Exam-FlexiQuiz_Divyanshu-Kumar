import React from 'react'
import './CSS/Login.css';
import icons from './images/icons.png'
import LoginPage from './js/LoginPage'
export default function Login() {
  return (<>
    <div className="body">
    <img id="img" src={icons}/>
    <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h2>Create Account</h2>
                <h2>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.google.com" target="_blank"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                    </ul><br />
                </h2>
                <input type="text" placeholder="Name"  className="h" required/>
                <input type="email" placeholder="E-mail" className="h" required/>
                <input type="password" placeholder="Password" className="h" required/>
            <br />
                <button className="signup">Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="homepage.html">
                <h2>Sign In</h2><br />
                <h2>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.google.com" target="_blank"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </h2>
                <input type="email" placeholder="E-mail" className="h" required/>
                <input type="password" placeholder="Password" className="h" required/>
                <a href="forgotPassword.html">Forgot your password?</a>
                <button className="signin">Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src={LoginPage}> </script>
    </>
    )

}
