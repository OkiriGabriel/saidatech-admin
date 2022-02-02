import React, {useEffect, useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import storage from '../../helpers/storage'
import body from '../../helpers/body'

import "react-modal-video/scss/modal-video.scss"

import Enrol from '../../pages/ErrorModal'


const TopBar = ({ isFixed, backgroundColor, doScroll }) => {

    const [showNotify, setShowNotify] = useState(false);
    let history = useHistory();

    const [show, setShow] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [showJoin, setShowJoin] = useState(false)

    useEffect(() => {

        body.fixNav();

    }, []);


      const goto = (e, url, t) => {

        if(e){
            e.preventDefault()
        }

        history.push(url);
  
    }

    const toggleLogin = (e) => {
        if(e) e.preventDefault()
        setShow(!show);
    }

    const scrollTo = (e, t) => {
        if(e) e.preventDefault();
        doScroll(e, t);
    }

    const toggleJoin = (e) => {
        if(e) e.preventDefault()
        setShowJoin(!showJoin)
    }

    // this: used in pushing
    return (
        <>
         
            <header id="header" className={` header header-nav ${isFixed && isFixed === true ? 'stick' : 'bg-white blocked flat'}`} style={{ backgroundColor: backgroundColor ? backgroundColor : '' }}>
                
                <div className="nav-body">
                
                    <div className="navigation bg-brandcox-firefly">
                        <div className="container-fluid">

                            <nav className="main-nav navbar navbar-right navbar-expand-md">

                                <Link to="/" className="navbar-brand logo brand-blue font-matterbold" to="">S A I D A T E C H </Link>
                            
                            

                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                                    <span className="menu_toggle">
                                       <div className="ml-auto d-flex align-items-center ">
                                    <Link className="sd-menu md-menu onblack"><span className={`fe fe-menu fs-30`}></span></Link>
                                </div>
                                    </span>
                                </button>
                            
                            <div id="navbar-collapse" className="navbar-collapse collapse">
                                {/* left */}
                                <ul className="nav left-nav navbar-nav mx-auto">
                                    <li className="nav-item link"><Link to="/" className="nav-link brand-blue font-matterlight fs-15">Home</Link></li>
                                    <li className="nav-item link"><Link to="/courses" className="nav-link brand-blue font-matterlight fs-15">Course</Link></li>
                                    <li className="nav-item link"><Link to="/instructors" className="nav-link brand-blue font-matterlight fs-15">Instructor</Link></li>
                                    <li className="nav-item link"><Link  className="nav-link brand-blue font-matterlight fs-15" to="/">Event</Link></li>
                                    <li className="nav-item link"><Link   to="/blog"  className="nav-link brand-blue font-matterlight fs-15">Blog</Link></li>
                                    <li className="nav-item link"><Link  className="nav-link brand-blue font-matterlight fs-15">Cloud reality</Link></li>

                                </ul>

                                
                                {/* Right */}
                                <ul class="nav navbar-nav right-nav ml-auto " >
                                    <li className="nav-item link ui-hide-mobile-only" >
                                        <Link o="/courses"className="nav-link nav-btn onwhite font-mattermedium btn sm  ui-rounded bg-brand-blue font-matterbold onwhite " >Get Started</Link>
                                    </li>
                                    <li className="nav-item link">
                                        <Link className="nav-link nav-btn onwhite font-mattermedium btn ui-hide-mobile-only  xsm ui-rounded btn-outlinee brand-blue" to="/login">Log in</Link>
                                    </li>
                                    <li className="nav-item link ui-show-mobile-only">
                                        <Link className="nav-link on-black font-mattersemibold fs-16"to="/login">Log in</Link>
                                    </li>
                                </ul>
                                
                            </div>
                            </nav>
                        </div>
                    </div>
                    
                </div>

                {/* {
                    !isFixed &&
                    <div className="ui-line bg-silverlight"></div>
                } */}
            
            </header>
            
           
            <Enrol isShow={showJoin} closeModal={toggleJoin} modalTitle="Enroll Now" flattened={true} slim="slim-mlg" />
        </>
    )
}

export default TopBar;