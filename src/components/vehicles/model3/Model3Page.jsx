import React, { useState,useEffect } from 'react'
import './model3page.css'

const Model3Page = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () =>{ 
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return (
        <>
            <section>
                <div>
                    {scrollPosition > 1 ?
                    <picture>
                        <source srcset="./img/model3/red/Model-3-max-width-599px.avif" media="(max-width: 599px) and (orientation: portrait)"/>
                        <source srcset="./img/model3/red/Model-3-max-height-599px.avif" media="(max-height: 599px) and (orientation: landscape)"/>
                        <source srcset="./img/model3/red/Model-3-min-width-600px.avif" media="(min-width: 600px) and (orientation: portrait)"/>
                        <source srcset="./img/model3/red/Model-3-min-width-900px.avif" media="(min-width: 900px) and (orientation: landscape)"/>
                        <img src="./img/model3/red/Model-3-normal.avif" alt=""/>
                    </picture> 
                    :
                    <picture>
                        <source srcset="./img/model3/white/Model-max-width-599px.avif" media="(max-width: 599px) and (orientation: portrait)"/>
                        <source srcset="./img/model3/white/Model-max-height-599px.avif" media="(max-height: 599px) and (orientation: landscape)"/>
                        <source srcset="./img/model3/white/Model-min-width-600px.avif" media="(min-width: 600px) and (orientation: portrait)"/>
                        <source srcset="./img/model3/white/Model-min-width-900px.avif" media="(min-width: 900px) and (orientation: landscape)"/>
                        <img src="./img/model3/white/Model-normal.avif" alt=""/>
                    </picture>
                    }
                </div>
                <div className="content">
                        <div className="container-content">
                            <div className="box-content">
                                <div className="text-contents" style={{lineHeight:"38px"}}>
                                    <h1>Model 3</h1>
                                    <p>{scrollPosition > 1 ? "Performance" : "Standard and Long Range" }</p>
                                </div>
                                <div className='model3-contents'>
                                    <div className='model3-btn'>
                                        <button className='button02' id='btn-blue'>Order Now</button>
                                        <button className='button01' id='btn-black'>Learn More</button>
                                    </div>
                                    <a href='#' onClick={() => scrollPosition >= 1 ? setScrollPosition(0) : setScrollPosition(8)}>
                                        <span className='down-box'>
                                            {scrollPosition > 1 ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i> }
                
                                        </span>
                                        <span className='text'>
                                            {scrollPosition > 1 ? "Switch to Model 3" : "Switch to Performance" }
                                                <svg className='tird-arrows' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M8.625 17.2499C8.625 17.4423 8.69824 17.6342 8.84521 17.7812C9.13867 18.0737 9.61328 18.0727 9.90625 17.7797L15.1563 12.5161C15.4478 12.2226 15.4482 11.749 15.1558 11.4565L9.93262 6.22015C9.64014 5.92718 9.16553 5.92621 8.87207 6.21918C8.5791 6.51166 8.57715 6.98627 8.87109 7.27972L13.5659 11.9863L8.84375 16.7202C8.69775 16.8666 8.625 17.0585 8.625 17.2499Z" fill="white"></path><path opacity="0.2" d="M0.625 17.2499C0.625 17.4423 0.698242 17.6342 0.845215 17.7812C1.13867 18.0737 1.61328 18.0727 1.90625 17.7797L7.15625 12.5161C7.44775 12.2226 7.44824 11.749 7.15576 11.4565L1.93262 6.22015C1.64014 5.92718 1.16553 5.92621 0.872071 6.21918C0.579102 6.51166 0.577149 6.98627 0.871094 7.27972L5.56592 11.9863L0.84375 16.7202C0.697754 16.8666 0.625 17.0585 0.625 17.2499Z" fill="white"></path><path d="M16.625 17.2499C16.625 17.4423 16.6982 17.6342 16.8452 17.7812C17.1387 18.0737 17.6133 18.0727 17.9063 17.7797L23.1563 12.5161C23.4478 12.2226 23.4482 11.749 23.1558 11.4565L17.9326 6.22015C17.6401 5.92718 17.1655 5.92621 16.8721 6.21918C16.5791 6.51166 16.5771 6.98627 16.8711 7.27972L21.5659 11.9863L16.8438 16.7202C16.6978 16.8666 16.625 17.0585 16.625 17.2499Z" fill="white"></path></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Model3Page


