import React from 'react'
import {Link} from 'react-router-dom'

const Gsap = () => {
    return (
        <div>
            <h3>GSAP DEMO</h3>
            <div>
                <Link to="/ScrollTriggerTest">ScrollTrigger Test</Link> 
            </div>
            <div>
                <Link to="/ScrollTriggerHorizontal">Scroll Trigger Horizontal</Link>
            </div>
            <div>
                <Link to="/GreenSockTest">Green Sock Test</Link>
            </div>
            <div>
                <Link to="/GsapChengeBackgroundColor">Gsap Chenge Background Color</Link>
            </div>
            <div>
                <Link to="/GsapDynamicBackgroundColorHorizontal">Gsap Dynamic Background Color Horizontal</Link>
            </div>
            <div>
                <Link to="/GsapHorizontal"> Gsap Horizontal</Link>
            </div>
            <div>
                <Link to="/GsapScrollingTrigerTest"> Gsap Scrolling Triger Test</Link>
            </div>
            <div>
                <Link to="/GsapTest"> Gsap Test</Link>
            </div>
        </div>
    )
}

export default Gsap
