import React,{useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

const ImageLoadingTest = () => {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= urls.length) {
          setLoading(false);
        }
      }
    const urls = [
        "https://placeimg.com/100/100/any&rnd=" + Math.random(),
        "https://placeimg.com/100/100/any&rnd=" + Math.random(),
        "https://placeimg.com/100/100/any&rnd=" + Math.random()
      ];
    return ( 
        <div>
            <div>
                <h3 style={{color:'black'}}>Image Loading Test</h3>
                <div style={{margin:'20px 0'}}>
                     <Link to="/uiux">Back GSAP</Link>
                </div>
             </div>
            <div>
                <div style={{display: loading ? "block" : "none"}}>
                <h1>Loading images.....</h1> 
                </div>
                <div style={{display: loading ? "none" : "block"}}>
                    {urls.map(url => 
                        <img key={url} src={url} onLoad={imageLoaded} /> )}
                </div>
            </div>
            
        </div>
    )
}

export default ImageLoadingTest
