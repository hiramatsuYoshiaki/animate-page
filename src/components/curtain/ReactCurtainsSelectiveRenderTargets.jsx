import React from 'react'
import {Curtains} from 'react-curtains'
import {SelectiveRenderTargets} from './index'

const ReactCurtainsSelectiveRenderTargets = () => {
    return (
        <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
            <SelectiveRenderTargets />
        </Curtains>
       
    )
}

export default ReactCurtainsSelectiveRenderTargets
// 2021.4.14 removal animation-page 
