import React from 'react'
import { Link } from 'react-router-dom'

const Model3 = () => {
    return (
        <>
            <section>
                <div className="containers">
                    <div class="main-photo">
                        <picture>
                            <source srcset="./img/homepages/model3/Model-3-max-width-599px.avif" media="(max-width: 599px)" />
                            <source srcset="./img/homepages/model3/Model-3-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)" /> {/*แนวตั้ง*/}
                            <source srcset="./img/homepages/model3/Model-3-min-width-600px.avif" media="(min-width: 600px) " />
                            <img src="./img/homepages/model3/Model-3-normal.avif" alt="" />
                        </picture>
                        <div class="content-photo">
                            <h1>Model 3</h1>
                            <div class="content-text">
                                <p>For Immediate Delivery, Explore&nbsp;</p>
                                <a class="underline" href="#">Existing Inventory</a>
                            </div>
                        </div>
                        <div class="photo-button01">
                            <Link to={'/model3'} onClick={() => window.scrollY(0)} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <button class="button01">Custom Order</button>
                            </Link>
                            <button class="button02">Test Drive</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Model3