import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FlexiQuiz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" to="/exam" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exam
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><hr className="dropdown-divider" /><strong><center>Computer Language</center></strong></li>
            <li><Link className="dropdown-item" to="/instructionHtml">HTML</Link></li>
            <li><Link className="dropdown-item" to="/instructionCss">CSS</Link></li>
            <li><Link className="dropdown-item" to="/instructionCss">JavaScript</Link></li>
            <li><hr className="dropdown-divider" /><strong><center>Reasoning</center></strong></li>
            <li><Link className="dropdown-item" to="/mathreasoningexam">Mathematical Reasoning</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/report">Report</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="https://www.javatpoint.com/javascript-mcq" >Mock Paper</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact US</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link" ><span>About Us</span></Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}





