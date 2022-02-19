// eslint-disable-next-line
/* eslint-disable */
import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
import Axios from 'axios'

import storage from '../../helpers/storage'
import body from '../../helpers/body'

import UserContext from '../../../context/user/userContext';

import { useNetworkDetect } from '../../helpers/hooks'

const SideBar = ({ barState }) => {

    const startRef = useRef(null)

    const history = useHistory();
    const params = useParams();
    const location = useLocation();

    const userContext = useContext(UserContext);

    const [dropType, setType] = useState('');
    const [active, setActive] = useState('dashboard');

    const [start, setStart] = useState(false);

    useEffect(() => {

        redirectToLogin();
        setActive(storage.fetch('menu') ? storage.fetch('menu') : 'overview');
        // userContext.getUser();
        // userContext.getStatus(); 

        if(storage.fetch('status')){
            const status = storage.fetch('status');

            if(status.profile === false){
                storage.keep('menu', 'settings')
                history.push('/dashboard/student/account/update')
            }
        }

    }, [])

    useNetworkDetect()


    const config = {
        headers: {
            ContentType: 'application/json',
            lg: "en",
            ch: "web"
        }
            
    }

    const goTo = (e, url) => {
        if(e) e.preventDefault()
        storage.keep('biztab', 'two')
        history.push(url)
    }

    const redirectToLogin = () => {

        if(!storage.checkToken() && !storage.checkUserID()){
            logout()
        }

    }

    const logout = async (e) => {

        if(e) e.preventDefault();

        storage.clearAuth();
        history.push('/');
        await Axios.post(`${process.env.REACT_APP_AUTH_URL}/auth/logout`,{}, config);
    }

    const openDrop = (e,type, t) => {
        if(e) e.preventDefault()
  
        if(dropType === type){
          setType('');
          
        }else{
          setType(type);
          setActive(t);
        }
        
    }

    const goto = (e, url, t) => {

        if(e){
            e.preventDefault()
        }
  
        storage.keep('menu', t);
        setActive(t);
        history.push(url);
  
    }

    return (

        <>
        
        {/* <Link onClick={initializeModal} ref={startRef} className='ui-hide'></Link> */}

          <div className='ui-monitor'>
            <div className='d-flex'>
              <div />
              <div className='ml-auto'>
                <Link to='/' className='pullin--btn onblack'>
                  <span
                    className='fe fe-arrow-left fs-20'
                    style={{ color: '#2F80ED' }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <section id="ui-sidebar" className={`ui-sidebar ssbar--open`}>

            <div className='ui-sidebar-primary ssbar--open'>

                <div className="ui-sidebar-primary-header">

                    <Link to="/dashboard/student"><img className="logo" src="../../../images/assets/logo-sd.svg" alt="" /></Link>

                </div>

                <div className='ui-sidebar-primary-body'>

                    <div className="ui-separate-small ui-show-mobile-only"></div>

                    <ul id="ui-sidebar-primary-links" className={`ui-sidebar-primary-links primary-nav`}>

                        <li className={ `${active === 'home' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/student', 'home')} to='' className='ui-icon-animate link' title='Home'>
                                <span style={{position: 'relative', left: '-3px', lineHeight: '0px'}} className='saidatech-icon sl'><img src={`../../../images/icons/${active === 'home' ? 'd': 'd'}home.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '-2px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Home
                                </span>
                            </Link>
                        </li>

                         <li className={ `${active === 'instructor' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/instructor', 'instructor')} to='' className='ui-icon-animate link' title='Instructor'>
                                <span className='saidatech-icon sl ' style={{position: 'relative', left: '-4px'}}><img src={`../../../images/icons/${active === 'instructor' ? '': 'd'}profile.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '-4px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Instructor
                                </span>
                            </Link>
                        </li>

                        <li className={ `${active === 'course' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/course', 'course')} to='' className='ui-icon-animate link' title='Course'>
                                <span style={{position: 'relative', left: '-4px'}} className='saidatech-icon md'><img src={`../../../images/icons/${active === 'course' ? '': 'd'}cards.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '-4px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Course
                                </span>
                            </Link>
                        </li>

                        {/* <li className={ `${active === 'contracts' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/student', 'contracts')} to='' className='ui-icon-animate link' title='Contracts'>
                                <span style={{position: 'relative', left: '-3px'}} className='saidatech-icon xsl'><img src={`../../../images/icons/${active === 'contracts' ? '': 'd'}book.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '1px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Contracts
                                </span>
                            </Link>
                        </li>

                        <li className={ `${active === 'certificate' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/student', 'certificate')} to='' className='ui-icon-animate link' title='Certificate'>
                                <span style={{position: 'relative', left: '-4px', lineHeight: '0px'}} className='saidatech-icon md'><img src={`../../../images/icons/${active === 'certificate' ? '': 'd'}award.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '-4px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Certificate
                                </span>
                            </Link>
                        </li>
                        
                        <li className={ `${active === 'homework' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/student', 'homework')} to='' className='ui-icon-animate link' title='Homework'>
                                <span style={{position: 'relative', left: '-4px', lineHeight: '0px'}} className='saidatech-icon md'><img src={`../../../images/icons/${active === 'homework' ? '': 'd'}home.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '-4px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Homework
                                </span>
                            </Link>
                        </li>
                       
                        <li className={ `${active === 'notifications' ? 'active' : ''} nav-list` }>
                            <Link onClick={(e) => goto(e, '/dashboard/student', 'notifications')} to='' className='ui-icon-animate link' title='Notifications'>
                                <span style={{position: 'relative', left: '-4px', lineHeight: '0px'}} className='saidatech-icon md'><img src={`../../../images/icons/${active === 'notifications' ? '': 'd'}notification.svg`} alt="icon" /></span>
                                <span style={{position: 'relative', left: '-4px'}} className='lnk--text sb-text font-matterregular fs-13'>
                                    Notifications
                                </span>
                            </Link>
                        </li> */}

                       

                        {/* <li className={`drop ${ active === 'settings' ? 'active' : '' }`}>
                            <Link onClick={ (e) => {
                                openDrop(e,'settings', 'settings');
                                }} className='ui-icon-animate' title='Launch' >
                                <span className='saidatech-icon'><img src="../../../images/icons/dsettings.svg" alt="icon" /></span>
                                <span className='lnk--text font-matterregular fs-15'>Settings</span>
                                <span className="ml-auto fe fs-24" style={{position: 'relative', top: '3px', left: '8px'}}></span>
                            </Link>

                            <div className={`ui-sidebar-dropdown ${dropType === 'trade' ? 'is-open' : ''}`}>

                                <ul className='ui-sidebar-primary-links'>

                                    <li>
                                        <Link onClick={(e) => goto(e, '/salex/launch', 'launch')} to='' className='ui-icon-animate' title='Basic info'>
                                        <span className='lnk--text fs-13 font-montserrat'>
                                            Dashboard
                                        </span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link onClick={(e) => goto(e, '/salex/launch/start-sale', 'launch')} to='' className='ui-icon-animate' title='Basic info'>
                                        <span className='lnk--text  fs-13 font-montserrat'>
                                            Start Sale
                                        </span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link onClick={(e) => goto(e, '/salex/launch/manage', 'launch')} to='' className='ui-icon-animate' title='Basic info'>
                                        <span className='lnk--text  fs-13 font-montserrat'>
                                            Manage Presale
                                        </span>
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                        </li> */}

                    </ul>

                    <div className="ui-line bg-silverlight"></div>

                    <ul id="ui-sidebar-primary-links" className={`ui-sidebar-primary-links`}>

                        <li className={ `nav-list` }>
                            <Link onClick={(e) => logout(e) } to='' className='ui-icon-animate link' title='Logout'>
                                <span className='saidatech-icon smd'><img src="../../../images/icons/dlogout.svg" alt="icon" /></span>
                                <span className='lnk--text sb-text font-matterregular fs-13'>
                                    Logout
                                </span>
                            </Link>
                        </li>

                    </ul>

                </div>
            
            </div>
          
          </section>
        
        </>

    )

}

export default SideBar;