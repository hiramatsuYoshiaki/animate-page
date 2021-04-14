import React,{useState} from 'react'
import hlogo from '../../assets/img/h-logo.svg'
import hworks from '../../assets/img/h-works1200x600black.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import GlovalNavigation from './GlovalNavigation'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    icon:{
        width:'2rem',
        height:'2rem',
        marginRight:'.2rem',
    },
   
}))

const Navigation = () => {
    const classes = useStyles()
    const [isOpen,setIsOpen] = useState(true)
    const [menuPosition,setMenuPosition] = useState(100)
    const handleClick = () =>{
        setIsOpen(!isOpen)
        if(isOpen){
            setMenuPosition(0)
        }else{
            setMenuPosition(100)
        }
    }
    const closeMenu = () => {
        setIsOpen(true)
        setMenuPosition(100)
    }
    return (
        <div>
            <div className="l-navigation-wrape">
                <div className="c-navigation">
                    <div className="c-brand-area">
                        <img src={hlogo} alt="logo" className="c-logo" />
                        <img src={hworks} alt="h-works" className="c-brand"/>
                    </div>
                    <div className="c-manu-area" onClick={handleClick}>
                        {isOpen ? <MenuIcon className={classes.icon}/> 
                                : <CloseIcon className={classes.icon}/>}
                    </div>
                </div>
            </div>
            <div className="c-menu-list" style={{left:`${menuPosition}%`}}>
                <GlovalNavigation closeMenu = {() => closeMenu()}/>
            </div>
        </div>
    )
}

export default Navigation
