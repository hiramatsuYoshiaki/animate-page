import React from 'react'
import {Link} from 'react-router-dom'


const UiUx = () => {
    return (
        <div style={{padding:'16px'}}>
            <div styale={{margin:'0 0 16px 0'}}>
                <h3>UI/UX DEMO</h3>
                <p>Landing Page / 
                Loading Animations /
                Page Transitions</p>
            </div>
            
            <div>
                <Link to="/ComponentTransitionTest">
                Component Transition Test with TeenMax(gsap)
                </Link> 
            </div>
            <div>
                <Link to="/ImageLoadingTest">
                Image Loading Test 
                </Link> 
            </div>
            <div>
                <Link to="/LoadingDisplayTest">
                Loading Display Test 
                </Link> 
            </div>
        </div>
    )
}

export default UiUx

