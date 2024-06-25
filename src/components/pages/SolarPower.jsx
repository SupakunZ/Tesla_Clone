import React from 'react'

const SolarPower = () => {
  return (
    <>
        <section>
            <div className="containers">
                <div class="main-photo4">
                    <picture>
                        <source srcset="./img/homepages/solar/Solar-max-width-599px.avif" media="(max-width: 599px)"/>
                        <source srcset="./img/homepages/solar/Solar-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)"/> {/*แนวตั้ง*/}
                        <source srcset="./img/homepages/solar/Solar-min-width-600px.avif" media="(min-width: 600px) "/>
                        <img src="./img/homepages/solar/Solar-normal.avif" alt=""/>
                    </picture> 
                    <div class="content-photo04">
                        <h1>Solar and Powerwall</h1>
                        <p>Power Everything</p>
                    </div>
                    <div class="photo-button01">
                        <button class="button01">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SolarPower