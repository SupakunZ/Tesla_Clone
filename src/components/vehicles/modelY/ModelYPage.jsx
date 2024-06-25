import React from 'react'
import './modelypage.css'

const ModelYPage = () => {
  return (
    <>
        <section>
            <div className="containers">
                <div class="main-photo2">
                    <div className="shadows"></div>
                    <picture>
                        <source srcset="./img/modelY/Model-Y-max-width-599px-port.avif" media="(max-width: 599px) and (orientation: portrait)"/>
                        <source srcset="./img/modelY/Model-Y-max-width-899px-land.avif" media="(max-width: 899px) and (orientation: landscape)"/>
                        <source srcset="./img/modelY/Model-Y-min-width-900px-land.avif" media="(min-width: 900px) and (orientation: landscape) "/>
                        <source srcset="./img/modelY/Model-Y-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)"/>
                        <img id='shadows' src="./img/modelY/Model-Y-normal.avif" alt=""/>
                    </picture> 
                    <div class="content-photo02 modely-content-photo02">
                        <h1>Model Y</h1>
                    </div>
                    <div className="modely-box">
                        <div className="modely-detail">
                            <div className="mass">
                                <h2>2100 +</h2>
                                <h4>Litres of Cargo</h4>
                            </div>
                            <div className="speed">
                                <h2>533km</h2>
                                <h4>Range (WLTP)</h4>
                            </div>
                            <div className="mortor">
                                <h2>AWD</h2>
                                <h4>Dual Motor</h4>
                            </div>
                        </div>
                        <div class="photo-button-Y">
                            <button class="button04">Order Now</button>
                            <button class="button05">Test Drive</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ModelYPage