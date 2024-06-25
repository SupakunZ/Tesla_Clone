import React, { useContext } from 'react'
import './option.css'
import { MenuContext } from '../../App'

const Option = () => {

    const {menu, setMenu} = useContext(MenuContext);

  return (
    <>
        <section>
            <div className="option-open">
                <div className="close">
                    <a href="" onClick={() => {setMenu(!menu)}}><i style={{color:"#171A20", scale:"0.9"}} class="fa-sharp fa-solid fa-xmark"></i></a>
                </div>
                <ul className='option-hidden'>
                    <li><a href="#">Vehicles</a></li>
                    <li><a href="#">Energy</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#"><i style={{marginRight:"1rem", scale:"1.2"}} class="fa-solid fa-globe"></i>English</a></li>
                    <li><a href="#"><i style={{marginRight:"1rem", scale:"1.2"}} class="fa-regular fa-circle-user"></i>Account</a></li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Option