import React from 'react'
import IconSvg from './IconSvg'
import './icon.css'

const CybertruckPage = () => {
  return (
    <section>
            <div className="containers">
                <div class="main-photo2">
                    <picture>
                        <source srcset="./img/cybertruck/Cybertruck-max-width-599px-port.avif" media="(max-width: 599px) and (orientation: portrait)"/>
                        <source srcset="./img/cybertruck/Cybertruck-max-height-599px-land.avif" media="(max-height: 599px) and (orientation: landscape)"/>
                        <source srcset="./img/cybertruck/Cybertruck-min-width-900px-land.avif" media="(min-width: 900px) and (orientation: landscape) "/>
                        <source srcset="./img/cybertruck/Cybertruck-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)"/>
                        <img id='shadows' src="./img/cybertruck/Cybertruck-normal.avif" alt=""/>
                    </picture> 
                    <div class="content-photo02 cyber-content">
                        <IconSvg/>
                    </div>
                    <div className="cyber-position">
                        <div class="photo-button-cyber">
                            <button class="btn-cyber">GET UPDATES</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CybertruckPage