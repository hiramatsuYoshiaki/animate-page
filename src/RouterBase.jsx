import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation'
import {Home,Gsap,Curtain,Locomotive,Uiux,Canvas} from './templates/index'
import {
    ScrollTriggerTest,
    ScrollTriggerHorizontal,
    GreenSockTest,

    GsapChengeBackgroundColor,
    GsapDynamicBackgroundColorHorizontal,
    GsapHorizontal,
    GsapScrollingTrigerTest,
    GsapTest,
} from './components/gsap/index'

import {
    ReactCurtainesSimplePlane,
    ReactCurtainsBasicPlane,
    ReactCurtainsMultiplePlanes,
    ReactCurtainsMultipleplanesUsingGSAP,
    ReactCurtainsSelectiveRenderTargets,
    ReactCurtainsSlideshowGSAP,
    HoverEffect,
    ThreeTest

} from './components/curtain/index'
import {LocomotiveScrollSimpleTest} from './components/locomotive/index'
import {CanvasCircle,CanvasTest} from './components/canvas/index'
import {
    ComponentTransitionTest,
    ImageLoadingTest,
    LoadingDisplayTest,

} from './components/uiux/index'


const RouterBase = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gsap" component={Gsap} />
                <Route exact path="/curtain" component={Curtain} />
                <Route exact path="/locomotive" component={Locomotive} />
                <Route exact path="/UiUx" component={Uiux} />
                <Route exact path="/Canvas" component={Canvas} />
               
                <Route exact path="/ScrollTriggerTest" component={ScrollTriggerTest} />
                <Route exact path="/ScrollTriggerHorizontal" component={ScrollTriggerHorizontal} />
                <Route exact path="/GreenSockTest" component={GreenSockTest} />

                <Route exact path="/GsapChengeBackgroundColor" component={GsapChengeBackgroundColor} />
                <Route exact path="/GsapDynamicBackgroundColorHorizontal" component={GsapDynamicBackgroundColorHorizontal} />
                <Route exact path="/GsapHorizontal" component={GsapHorizontal} />
                <Route exact path="/GsapScrollingTrigerTest" component={GsapScrollingTrigerTest} />
                <Route exact path="/GsapTest" component={GsapTest} />


                <Route exact path="/ReactCurtainesSimplePlane" component={ReactCurtainesSimplePlane} />
                <Route exact path="/ReactCurtainsBasicPlane" component={ReactCurtainsBasicPlane} />
                <Route exact path="/ReactCurtainsMultiplePlanes" component={ReactCurtainsMultiplePlanes} />
                <Route exact path="/ReactCurtainsMultipleplanesUsingGSAP" component={ReactCurtainsMultipleplanesUsingGSAP} />
                <Route exact path="/ReactCurtainsSelectiveRenderTargets" component={ReactCurtainsSelectiveRenderTargets} />
                <Route exact path="/ReactCurtainsSlideshowGSAP" component={ReactCurtainsSlideshowGSAP} />
                <Route exact path="/HoverEffect" component={HoverEffect} />
                <Route exact path="/ThreeTest" component={ThreeTest} />
                
                <Route exact path="/LocomotiveScrollSimpleTest" component={LocomotiveScrollSimpleTest} />

                <Route exact path="/CanvasCircle" component={CanvasCircle} />
                <Route exact path="/CanvasTest" component={CanvasTest} />
               
                <Route exact path="/ComponentTransitionTest" component={ComponentTransitionTest} />
                <Route exact path="/ImageLoadingTest" component={ImageLoadingTest} />
                <Route exact path="/LoadingDisplayTest" component={LoadingDisplayTest} />


            </Switch>  
        </Router> 
    )
}

export default RouterBase
