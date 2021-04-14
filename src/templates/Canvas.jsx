import React from 'react'
import {Link} from 'react-router-dom'

const Canvas = () => {
    return (
        <div>
            <h3>Canvas DEMO</h3>
            <div>
                <Link to="/CanvasCircle">Canvas Circle</Link> 
            </div>
            <div>
                <Link to="/CanvasTest">Canvas Test</Link> 
            </div>
            
        </div>
    )
}

export default Canvas
