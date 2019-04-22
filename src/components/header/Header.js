import React, { Component } from 'react'
import './Header.css'
import slicePizzaBack from '../../assets/images/mobile-pics/desktop_pizzabarnheader.png'
import slicePizzaBackMobile from '../../assets/images/heroMobile480.png'


export default class Header extends Component {
  render() {
    return (
      <div className='header-page'>
        <img className="backImage" src={slicePizzaBack} />
        <img className="backImageMobile" src={slicePizzaBackMobile} />
        <div className='header'>
          <div className='links'>
            <a className='home' href="#menu">MENU</a>

            <a className='products' href="#about">ABOUT US</a>

            <a className='about' href="#press">PRESS</a>

            <a className='about' href="#gallery">GALLERY</a>

          </div>
          <div className="title"><h2>PIZZA BARN</h2></div>
        </div>

        <div className='footer'>

          <div className='address'>

            <p>(914) 378-1400
            <br />
              70 McLean Avenue
            <br />
              Yonkers, NY 10705
           </p>

          </div>

          <div className='hours'>

            <p>HOURS
                <br />
              Mon-Sat   11AM-10PM
                <br />
              Sunday   Closed
              </p>

          </div>

          <div className='text'>

            <p>
              Phone orders to-go only and will be suspended <span className="not-bold">when a line forms<br />
                outside the restaurant.</span><br />
              In-house seats are reserved for our dining-in patrons only <span className="not-bold">and <br />
                patrons will be seated on a first serve basis.</span>
            </p>
          </div>


        </div>

        <div className='footerMobile'>

          <div className='fuckingDiv'>
            <div className='addressMobile'>

              <p>(914) 378-1400
    <br />
                70 McLean Avenue
    <br />
                Yonkers, NY 10705
   </p>

            </div>

            <div className='hoursMobile'>

              <p>HOURS
        <br />
                Mon-Sat   11AM-10PM
        <br />
                Sunday   Closed
      </p>
            </div>
          </div>

          <div className='textMobile'>

            <p>
              Phone orders to-go only and will be suspended <span className="not-bold">when a line forms<br />
                outside the restaurant.</span><br />
              In-house seats are reserved for our dining-in patrons only <span className="not-bold">and <br />
                patrons will be seated on a first serve basis.</span>
            </p>
          </div>


        </div>


      </div>
    )
  }
}
