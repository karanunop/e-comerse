import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagarm from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>product</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagarm} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @2023 - all right reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
