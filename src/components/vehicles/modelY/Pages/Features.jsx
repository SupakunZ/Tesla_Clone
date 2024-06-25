import React from 'react'

const Features = () => {
  return (
    <>
        <section>
            <div className="features-container">
                <div className="features-grid-box">
                    <div className="features-videos">
                        <video src='./img/modelY/Model Y - Feature.webm' autoPlay loop muted/>
                    </div>
                    <div className="features-contents">
                        <h1>The Best Accident is <br/> No Accident</h1>
                        <p>Active safety features can help reduce impact severity or prevent accidents from happening altogether. Features like Forward Collision Warning, Active Emergency Braking and Lane Departure avoidance all come standard.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features