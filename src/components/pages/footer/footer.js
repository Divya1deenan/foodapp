import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <h4>goodies Food</h4>
               <ul>
              <li><a href='#'>about us</a></li>
              <li><a href='#'>Our serivces</a></li>
              <li><a href='#'>Privacy Policies</a></li>
              <li><a href='#'>affiliate program</a></li>
              </ul>
            </div>
          <div className='footer-col'>
            <h4>Genral Info</h4>
            <ul>
              <li><a href='#'>contcat-us</a></li>
              <li><a href='#'>Our serivces</a></li>
              <li><a href='#'>Privacy Policies</a></li>
              <li><a href='#'>affiliate program</a></li>
            </ul>

          </div>
          <div className='footer-col'>
            <h4>Get Help</h4>
            <ul>
              <li><a href='#'>FQA</a></li>
              <li><a href='#'>Orders</a></li>
              <li><a href='#'>payement Options</a></li>
              <li><a href='#'>Orders Status</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Follow Us</h4>
            <ul className='social-links'>
            <a href='#'><i class="fab fa-facebook-f "></i></a>
            <a href='#'><i class="fab fa-twitter"></i></a>
            <a href='#'><i class="fab fa-instagram "></i></a>
            <a href='#'><i class="fab fa-linkedin"></i></a>
            </ul>
          </div>


        </div>

      </div>
            <div className='copy-right'>@copy-rights fully reserved by Goodies Food</div>
    </div>



  )
}

export default Footer