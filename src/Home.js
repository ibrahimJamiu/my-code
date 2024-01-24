import { React } from 'react'
import Header from './Conponent/Header'
import Footer from './Conponent/Footer'
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {

  return (
    <>
      <Header />
      <h1>Cashew Nuts in Bulk</h1>
      <h6>5% OFF 100 dollars or more & 10% OFF 200 dollars or more</h6>
      <p>Get Discounts from any of our Products</p>
     

      <section id='featured'>
        <ul>
          <li data-aos="zoom-out">
            <img src={require('./images/Charcoal 2.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          <li data-aos='zoom-in'>
            <img src={require('./images/cashew nut 1.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          <li data-aos="zoom-in">
            <img src={require('./images/GaRRI 4.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          <li data-aos="zoom-in">
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>
          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>

          
          <li data-aos='zoom-in'>
            <img src={require('./images/ginger 3.jpeg')} alt="" />
            <Link to='/'>Charcoal black</Link>
            <span>$60</span>
            <span className="rating"></span>
          </li>
        </ul>
      </section>


      <Footer />
    </>

  )
}

export default Home