import React from 'react'
import {Curtains} from 'react-curtains'
import {MultipleplanesUsingGSAP} from './index'

const ReactCurtainsMultipleplanesUsingGSAP = () => {
    return (
        <Curtains
            pixelRatio={Math.min(1.5, window.devicePixelRatio)}
            autoRender={false} // we'll use gsap ticker in App.js instead
        >
           <MultipleplanesUsingGSAP />
        </Curtains>
        
    )
}

export default ReactCurtainsMultipleplanesUsingGSAP
// 2021.4.14 removal animation-page 