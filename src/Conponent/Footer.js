import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
    const current = new Date();
    const date = `${current.getFullYear()}`
    
    const Youtube = 'https://t.co/0CMF7M0tjL'
    return (
        <>
            <footer>
                <div>
                    <ul>
                        <li>Kayfat Fruits and Seeds</li>
                        <li>No 92 Demurin Street</li>
                        <li> Ketu, Lagos Nigeria</li>
                        <li>+234-7032331829</li>
                    </ul>

                    <ul>
                        <li><Link to={'/'} >Contact</Link></li>
                        <li><Link to={'/'} >Blog</Link></li>
                        <li><Link to={'/'} >Products</Link></li>
                        <li><Link to={'/'} >Privacy Policy</Link></li>
                    </ul>

                    <ul>
                        <li> <Link to={'./Signup'}> <img src={require('../images/facrbook.png')} /> </Link> </li>
                        <li> <Link to={'/'} > <img src={require('../images/instagram.jpeg')} /></Link>  </li>
                        <li> <Link to={'/'} > <img src={require('../images/twitter.png')} /></Link>  </li>
                        <li> <Link to={Youtube} > <img src={require('../images/whatsapp.png')} /></Link>  </li>

                    </ul>
                    <ul>
                        <li> <img src={require('../images/cashew nut 1.jpeg')} /> </li>
                        <li>&copy; All rights reserved  {date} </li>

                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer