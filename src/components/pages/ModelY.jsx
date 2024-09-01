import React from 'react'
import { Link } from 'react-router-dom'

const ModelY = () => {
    return (
        <>
            <section>
                <div className="containers">
                    <div class="main-photo2">
                        <picture>
                            <source srcset="./img/homepages/modelY/Model-Y-max-width-599px.avif" media="(max-width: 599px)" />
                            <source srcset="./img/homepages/modelY/Model-Y-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)" /> {/*แนวตั้ง*/}
                            <source srcset="./img/homepages/modelY/Model-Y-min-width-600px.webp" media="(min-width: 600px) " />
                            <img src="./img/homepages/modelY/Model-Y-normal.webp" alt="" />
                        </picture>
                        <div class="content-photo02">
                            <h1>Model Y</h1>
                        </div>
                        <div class="photo-button01">
                            <Link to={'/modely'} onClick={() => window.scrollY(0)} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <button class="button01">Custom Order</button>
                            </Link>
                            <button class="button02">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ModelY