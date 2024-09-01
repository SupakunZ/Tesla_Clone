import React, { useContext, useState } from 'react'
import { MenuContext } from '../../App'
import { Link } from 'react-router-dom';


const Header = ({ data }) => {

    const { menu, setMenu } = useContext(MenuContext) ?? {}
    const [color, setColor] = useState(data);

    console.log(menu)

    return (
        <>
            <div className="containers">
                <div className="navbar">
                    <div className="logo">
                        <Link to={"/"} style={{ color: `${color}` }} classname="icon"><svg class="logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg></Link>
                    </div>
                    <div className="navbar-main">
                        <ul className="navbar-text" onMouseOver={() => { setColor("rgb(46, 46, 46)") }} onMouseOut={() => { setColor(data) }} >
                            <li className="dropdown01" onmouseenter="dropshadow(this)" onmouseleave="closeshadow(this)"><a style={{ color: `${color}` }} href="#" class="click">
                                Vehicles</a>
                                <div className="dropdown-box01" >
                                    <div className="warpcontent-01">
                                        <div className="model1">
                                            <div className="model-03">
                                                <Link style={{ padding: "0px" }} to={'/model3'}>
                                                    <img src="./img/dropdown/01/Mega-Menu-Vehicles-Model-3-RHD.avif" alt="" />
                                                </Link>
                                                <div className="contentin">
                                                    <h2>Model 3</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <Link to={'/model3'}><span>Learn</span></Link>
                                                    <Link to={'/model3'}><span>Order</span></Link>
                                                </div>
                                            </div>
                                            <div className="modely">
                                                <Link style={{ padding: "0px" }} to={'/modely'}>
                                                    <img src="./img/dropdown/01/Mega-Menu-Vehicles-Model-Y.avif" alt="" />
                                                </Link>
                                                <div className="contentin">
                                                    <h2>Model Y</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <Link to={'/modely'}><span>Learn</span></Link>
                                                    <Link to={'/modely'}><span>Order</span></Link>
                                                </div>
                                            </div>
                                            <div className="cydertruck">
                                                <Link style={{ padding: "0px" }} to={'/cybertruck'}>
                                                    <img src="./img/dropdown/01/Mega-Menu-Vehicles-Cybertruck-1x.avif" alt="" />
                                                </Link>
                                                <div className="contentin">
                                                    <h2>Cydertruck</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <Link to={'/cybertruck'}><span>Learn</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-model">
                                            <ul>
                                                <li><a href="">Inventory</a></li>
                                                <li><a href="">Certified Pre-Owned</a></li>
                                                <li><a href="">Test Drive</a></li>
                                                <li><a href="">Model S</a></li>
                                                <li><a href="">Model X</a></li>
                                                <li><a href="">Roadster</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown02" onmouseenter="dropshadow(this)" onmouseleave="closeshadow(this)"><a style={{ color: `${color}` }} href="#" class="click">
                                Energy</a>
                                <div className="dropdown-box02">
                                    <div className="warpcontent-02">
                                        <div className="model2">
                                            <div className="powerwall">
                                                <img src="./img/dropdown/02/Mega-Menu-Energy-Powerwall-Global.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Powerwall</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <a href="#"><span>Learn</span></a>
                                                </div>
                                            </div>
                                            <div className="megapack">
                                                <img src="./img/dropdown/02/Mega-Menu-Energy-Megapack.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Megapack</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <a href="#"><span>Learn</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-model-2">
                                            <ul>
                                                <li><a href="#">Support</a></li>
                                                <li><a href="#">Customer Stories</a></li>
                                                <li><a href="#">Utilities</a></li>
                                                <li><a href="#">Commercial</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown03" onmouseenter="dropshadow(this)" onmouseleave="closeshadow(this)"><a style={{ color: `${color}` }} href="#" class="click">
                                Charging</a>
                                <div className="dropdown-box03">
                                    <div className="warpcontent-03">
                                        <div className="model3">
                                            <div className="charging">
                                                <img src="./img/dropdown/03/Mega-Menu-Charging-Charging-Global.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Charging</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <a href="#"><span>Learn</span></a>
                                                </div>
                                            </div>
                                            <div className="home">
                                                <img src="./img/dropdown/03/Mega-Menu-Charging-Home-Charging.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Home Charging</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <a href="#"><span>Learn</span></a>
                                                    <a href="#"><span>Shop</span></a>
                                                </div>
                                            </div>
                                            <div className="spcharging">
                                                <img src="./img/dropdown/03/Mega-Menu-Charging-Supercharging-APAC.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Supercharging</h2>
                                                </div>
                                                <div className="contentin2">
                                                    <a href="#"><span>Learn</span></a>
                                                    <a href="#"><span>Find</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-model-3">
                                            <ul>
                                                <li><a href="#">Supercharger Voting</a></li>
                                                <li><a href="#">Host a Supercharger</a></li>
                                                <li><a href="#">Host Wall Connectors</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown04" onmouseenter="dropshadow(this)" onmouseleave="closeshadow(this)"><a style={{ color: `${color}` }} href="#" class="click">
                                Discover</a>
                                <div className="dropdown-box04">
                                    <div className="warpcontent-04">
                                        <div className="warpcontent-dis">
                                            <div className="content-model01">
                                                <ul>
                                                    <li><span>Resources</span></li>
                                                    <li><a href="#">Test Drive</a></li>
                                                    <li><a href="#">Customer Stories</a></li>
                                                    <li><a href="#">Videos</a></li>
                                                    <li><a href="#">Events</a></li>
                                                </ul>
                                            </div>
                                            <div className="content-model02">
                                                <ul>
                                                    <li><span>Location Services</span></li>
                                                    <li><a href="#">Find Us</a></li>
                                                    <li><a href="#">Find a Certified Installer</a></li>
                                                </ul>
                                            </div>
                                            <div className="content-model03">
                                                <ul>
                                                    <li><span>Company</span></li>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                    <li><a href="#">Investor Relations</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown05" onmouseenter="dropshadow(this)" onmouseleave="closeshadow(this)"><a style={{ color: `${color}` }} href="#" class="click">
                                Shop</a>
                                <div className="dropdown-box05">
                                    <div className="warpcontent-05">
                                        <div className="model5">
                                            <div className="charging-sp">
                                                <img src="./img/dropdown/05/Mega-Menu-Shop-Charging.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Charging</h2>
                                                </div>
                                            </div>
                                            <div className="vehicle">
                                                <img src="./img/dropdown/05/Mega-Menu-Shop-Vehicle-Accessories.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Vehicle Accessories</h2>
                                                </div>
                                            </div>
                                            <div className="apparel">
                                                <img src="./img/dropdown/05/Mega-Menu-Shop-Apparel.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Apparel</h2>
                                                </div>
                                            </div>
                                            <div className="lifestyle">
                                                <img src="./img/dropdown/05/Mega-Menu-Shop-Lifestyle.avif" alt="" />
                                                <div className="contentin">
                                                    <h2>Lifestyle</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-option">
                        <ul id='option-full'>
                            <li className="option"><a style={{ color: `${color}` }} href="#"><i class="fa-regular fa-circle-question"></i></a></li>
                            <li className="option"><a style={{ color: `${color}` }} href="#"><i class="fa-solid fa-globe"></i></a></li>
                            <li className="option"><a style={{ color: `${color}` }} href="#"><i class="fa-regular fa-circle-user"></i></a></li>
                        </ul>
                        <button onClick={() => { setMenu(!menu) }} style={{ color: `${color}` }} className='btn-hide'>Menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header