import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import img1 from '../img/yam-2.webp'
import { FaCartPlus } from "react-icons/fa";


function Header() {
    return (
        <nav  class="navbar navbar-expand-sm navbar-dark " id='nav'>
            <div class="container">
                <Link to={'/'} class="navbar-brand"> <img className='image' src={img1} alt="Logo" />  </Link>

                <button class="navbar-toggler d-lg-none collapsed " type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page"> Home <span
                                class="visually-hidden">(current)</span></Link>
                        </li>

                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page"> About<span
                                class="visually-hidden">(current)</span></Link>
                        </li>

                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page"> Contact <span
                                class="visually-hidden">(current)</span></Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link to={'/'} class="nav-link dropdown-toggle" id="dropdownId" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"> Our Products </Link>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <Link to={'/'} class="dropdown-item" >Cashew Nuts</Link>
                                <Link to={'/'} class="dropdown-item" >Charcoal</Link>
                                <Link to={'/'} class="dropdown-item" >Cassava Flour</Link>
                                <Link to={'/'} class="dropdown-item" >Yam Flour</Link>
                                <Link to={'/'} class="dropdown-item" >Garri</Link>
                                <Link to={'/'} class="dropdown-item" >Locust Beans</Link>
                                <Link to={'/'} class="dropdown-item" >Ginger</Link>
                                <Link to={'/'} class="dropdown-item" >Yam Tuber</Link>
                            </div>
                        </li>

                        <li class="nav-item">
                            <Link to={'/'} class="nav-link active" aria-current="page"> Blog <span
                                class="visually-hidden">(current)</span></Link>
                        </li>

                        <li class="nav-item">
                            <Link to={'/signup'} class="nav-link active" aria-current="page"> Sign up<span
                                class="visually-hidden">(current)</span></Link>
                        </li>
                    </ul>

                    <div class='badge'>
                        <span className="badge bg-white text-black ">0</span>
                        <Link to={'/'} class="nav-link active" aria-current="page"> <FaCartPlus id='cart' />
                        </Link>
                    </div>



                </div>
            </div>
        </nav>



    )
}

export default Header