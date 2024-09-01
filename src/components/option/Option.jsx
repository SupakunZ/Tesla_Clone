import React, { useContext, useEffect } from 'react'
import './option.css'
import { MenuContext } from '../../App'
import { Link } from 'react-router-dom';

const Option = () => {

    const { menu, setMenu } = useContext(MenuContext);

    useEffect(() => {
        document.querySelector(".option-open").classList.toggle("showOption")
        document.querySelector('body').classList.toggle("off")
    }, [menu])

    return (
        <>
            <section>
                <div className="option-open" style={{ position: "fixed", zIndex: "-99", backgroundColor: "white", opacity: "0" }}>
                    <div className="close">
                        <a href="" onClick={(e) => { setMenu(!menu); e.preventDefault() }}><i style={{ color: "#171A20", scale: "0.9" }} class="fa-sharp fa-solid fa-xmark"></i></a>
                    </div>
                    <ul className='option-hidden'>
                        <li><Link to={'/cybertruck'} onClick={() => { setMenu(!menu); window.scrollY(0) }} >Vehicles</Link></li>
                        <li><a href="#">Energy</a></li>
                        <li><a href="#">Charging</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#"><i style={{ marginRight: "1rem", scale: "1.2" }} class="fa-solid fa-globe"></i>English</a></li>
                        <li><a href="#"><i style={{ marginRight: "1rem", scale: "1.2" }} class="fa-regular fa-circle-user"></i>Account</a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Option