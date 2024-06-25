import React from 'react'

const Safety = () => {
    return (
        <section>
            <div className="container-safety">
                <div class="main-photo3 safety-photo">
                    <div className="shadows"></div>
                    <picture>
                        <source srcset="./img/modelY/page2/Safety-max-width-599px-port.avif" media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)" />
                        <source srcset="./img/modelY/page2/Safety-min-width-900px-land.avif" media="(min-width: 900px) and (orientation: landscape) " />
                        <source srcset="./img/modelY/page2/Safety-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)" />
                        <img src="./img/modelY/page2/Safety-normal.avif" alt="" />
                    </picture>
                    <div className="safety-box">
                        <div className="safety-detail">
                            <h1>Engineered for Your Safety</h1>
                            <p>We engineer our vehicles to be the safest in the world. With an extremely low chance of roll-over and occupant injury, Model Y receives some of the highest possible safety ratings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Safety