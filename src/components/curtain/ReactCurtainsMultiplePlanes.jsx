import React from 'react'
import {Curtains} from 'react-curtains'
import {MultiplePlane} from './index.js'


const ReactCurtainsMultiplePlanes = () => {
    return (
        <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
            <MultiplePlane />  
        </Curtains>
    )
}

export default ReactCurtainsMultiplePlanes
// react-curtains
// https://www.npmjs.com/package/react-curtains
// https://codesandbox.io/s/react-curtains-multiple-planes-zh9bt?file=/src/components/MultiplePlanes/index.js:1959-1978
// 2021.4.14 removal animation-page 
