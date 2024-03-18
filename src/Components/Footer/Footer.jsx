import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Yorcler</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
                <img src={pinterest_icon} alt="" />
                <img src={whatsapp_icon} alt="" />                
            </div>

            <div className="footer-copyright">
                <p>Copyright © 2024 - All rights reserved - Vitalii Balaiev</p>
            </div>  
        </div>
    )
}

export default Footer