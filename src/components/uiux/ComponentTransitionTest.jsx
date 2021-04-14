import React,{useState} from 'react'
import {ChildrenTest} from './index'
import {Link} from 'react-router-dom'

const ComponentTransitionTest = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleEnterStart = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div style={{margin:'10px'}}>
            <div>
                <h3 style={{color:'black'}}>Image Loading Test</h3>
                <div style={{margin:'20px 0'}}>
                    <Link to="/uiux">Back GSAP</Link>
                </div>
            </div>
            <button 
                onClick={()=>toggleEnterStart()}
                style={{backgroundColor:'green',color:'white', overflow:'hidden'}}>
                ComponentTransitionTest toggle Conponent View 
            </button>
            <ChildrenTest in={isVisible}/> 
        </div>
    )
}

export default ComponentTransitionTest
// 2021.4.14 removal animation-page
