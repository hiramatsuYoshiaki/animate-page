import React from 'react'
import {Link} from "react-router-dom";

const GlovalNavigation = props => {
    const clickButton = () => {
        props.closeMenu()
        
    }
    return (
        <div className="c-g-nav-wraper">
            <div className="c-nav-element" >
                <Link to="/gsap" onClick={()=>clickButton()}>
                   Gsap
                </Link>
            </div>
            <div className="c-nav-element">
                <Link to="/curtain" onClick={()=>clickButton()}>
                   Curtain.js/Hover-effect/Three.js
                </Link>
            </div>
           <div className="c-nav-element">
               <Link to="/locomotive" onClick={()=>clickButton()}>
                   Locomotive
                </Link>
            </div>
           <div className="c-nav-element">
               <Link to="/Uiux" onClick={()=>clickButton()}>
                   UI/UX
                </Link>
            </div>
           <div className="c-nav-element">
               <Link to="/canvas" onClick={()=>clickButton()}>
                   Canvas
                </Link>
            </div>
        </div>
    )
}

export default GlovalNavigation
