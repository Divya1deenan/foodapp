import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import logo from "../../../images/jetto1.png"
// import {useNavigate} from "react-router-dom"
import { useHistory } from 'react-router-dom'

const Header = () => { 
 
  
  const history = useHistory();
 
  

  return (
    <div >
      <nav>

        <img src={logo} alt="dviya" className='logo-image'></img>


        <div className='header-links'>
          <ul id="links">
            <li><Link to={"/home"}>Home</Link></li>
            <li onClick={()=>history.push("/AboutUs")}><a href='#'>About Us</a></li>
            <li><a href='#'>Contact US</a></li>
            <li onClick={()=>history.push("/cart")}><a href='#'><i class="fa-solid fa-cart-shopping"></i></a><span>3</span></li>
            <li><a href='#'><i class="fa-solid fa-user"></i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header