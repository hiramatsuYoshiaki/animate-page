import React from 'react'
import {Link} from 'react-router-dom'


const Curtain = () => {
    return (
        <div>
            <h3>CURTAIN.JS DEMO</h3>
            <div>
                <Link to="/ReactCurtainesSimplePlane">React Curtaines Simple Plane</Link> 
            </div>
            <div>
                <Link to="/ReactCurtainsBasicPlane">React Curtains Basic Plane</Link> 
            </div>
            <div>
                <Link to="/ReactCurtainsMultiplePlanes">React Curtains Multiple Planes</Link> 
            </div>
            <div>
                <Link to="/ReactCurtainsMultipleplanesUsingGSAP">React Curtains Multiple Planes Using GSAP</Link> 
            </div>
            <div>
                <Link to="/ReactCurtainsSelectiveRenderTargets">React Curtains Selective Render Targets</Link> 
            </div>
            <div>
                <Link to="/ReactCurtainsSlideshowGSAP">React Curtains Slide show GSAP</Link> 
            </div>
            <h3>Hover-Effect</h3>
            <div>
                <Link to="/HoverEffect">Hover Effect</Link> 
            </div>
            <h3>Three.js</h3>
            <div>
                <Link to="/ThreeTest">Three Test</Link> 
            </div>
           
        </div>
    )
}

export default Curtain 
