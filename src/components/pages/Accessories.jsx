import React from 'react'

const Accessories = () => {
  return (
    <>
        <section>
            <div className="containers">
                <div class="main-photo5">
                    <picture>
                        <source srcset="./img/homepages/accessories/Acc-max-width-599px.avif" media="(max-width: 599px)"/>
                        <source srcset="./img/homepages/accessories/Acc-min-width-600px-port.avif" media="(min-width: 600px) and (orientation: portrait)"/> {/*แนวตั้ง*/}
                        <source srcset="./img/homepages/accessories/Acc-min-width-600px.avif" media="(min-width: 600px) "/>
                        <img src="./img/homepages/accessories/Acc-normal.avif" alt=""/>
                    </picture> 
                    <div class="content-photo05">
                        <h1>Accessories</h1>
                    </div>
                    <div class="photo-button01">
                        <button class="button02">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Accessories