import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

const FeaturesDetail = () => {
    console.log(Carousel.Item)
    return (
        <section className='featurespage'>
            <div className="detail-container">
                <div className="detail-grid-box">
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <div className="item-content">
                                <h3>Up to 533 km (WLTP) of range and access to more than 50,000 Superchargers globally.</h3>
                            </div>
                            <img src="./img/modelY/page4/Charging/Charging-normal.avif" alt="First slide"/> 
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className="item-content2">
                                <h3>Dual motor powertrain, instant torque, maximum dopamine.</h3>
                            </div>
                            <img src="./img/modelY/page4/Performance/Performance-normal.avif" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="item-content3">
                                <h3>Advanced active safety features that come standard.</h3>
                            </div>
                            <img src="./img/modelY/page4/Active/Active-normal.avif" alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="item-content4">
                                <h3>Seating for five and enough storage for the gear they bring along.</h3> 
                            </div>
                            <img src="./img/modelY/page4/Utillity/Utillity-normal.avif" alt="Four slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="item-content5">
                                <h3>Remote locking, key sharing and vehicle monitoring—all through your phone.</h3>
                            </div>
                            <img src="./img/modelY/page4/Phone/Phone-normal.avif" alt="Five slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default FeaturesDetail



