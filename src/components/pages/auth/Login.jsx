// eslint-disable-next-line
/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Axios from 'axios';

import SEO from '../../layouts/partials/SEO'
import Footer from '../../layouts/partials/Footer'
import storage from '../../helpers/storage';
import body from '../../helpers/body';
import Alert from '../../layouts/partials/Alert';
import Message from '../../layouts/partials/Message'

import Carousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";




const Login = (props) => {

    const history = useHistory();

    const [loading, setLoading] = useState();
    const [pass, setPass] = useState('password');
    const [step, setStep] = useState(0)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [confirmPassword, setConfirm] = useState('')

    const [alert, setAlert] = useState({
        type: '',
        show: false,
        message: ''
    })

    useEffect(() => {

        Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        setStep(0)

    }, [])

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const showPass = (e) => {
        e.preventDefault();
        if(pass === 'password'){
            setPass('text');
        }else{
            setPass('password');
        }
    }

    // login fuunction
    const login = async (e) => {

        if(e) e.preventDefault();

        if(!loginData.email && !loginData.password){
            setAlert({...alert, type: "danger", show:true, message:'All fields are required'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        }else if(!loginData.email){
            setAlert({...alert, type: "danger", show:true, message:'Please enter your email'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        }else if(!loginData.password){
            setAlert({...alert, type: "danger", show:true, message:'Please enter your password'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        } else {
            setLoading(true);
            // setTimerLoading(true);
            await Axios.post(`${process.env.REACT_APP_ADMIN_URL}/admin/signin`, {...loginData}, storage.getConfig())
            .then(async (resp) => {
              console.log(resp)
                if (resp.status === 200) {

                    storage.saveCredentials(resp.data.token, resp.data.data._id);
                    storage.saveStatus(resp.status);

                    history.push('/dashboard/student')
                  
                    if (resp.data.data.isUser && resp.data.data.isActive) {
                        
                        if (resp.data.data.user.adminType) {
                           
                            history.push('/dashboard/student')
                        } else {
                            setAlert({ ...alert, type:"danger", show:true, message:"Access only for admin and superadmin" })
                            setTimeout(() => {
                                setAlert({ ...alert, show:false });
                            }, 5000);
                        }
                        
                    } else {
                        setAlert({ ...alert, type:"danger", show:true, message:"Your account is deactivated. Please contact support." })
                        setTimeout(() => {
                            setAlert({ ...alert, show:false });
                        }, 5000);
                    }
                }

                setLoading(false);

              }).catch((err) => {
             
                if(err.response.data.errors[0] === 'invalid credentials'){

                    setAlert({...alert, type: "danger", show:true, message:'Incorrect email or password'})
                    setTimeout(() => {
                      setAlert({...alert, show: false});
                    }, 5000)

                    setLoading(false);

                }else{

                    if(err.response.data.errors.length > 0){

                        setAlert({...alert, type: "danger", show:true, message:err.response.data.errors[0]})
                        setTimeout(()=> {
                            setAlert({...alert, show:false});
                        }, 5000)

                    }else{
                        setAlert({...alert, type: "danger", show:true, message:err.response.data.message})
                        setTimeout(()=> {
                            setAlert({...alert, show:false});
                        }, 5000)
                    }
                    
                }

                console.log(err);   

                setLoading(false);
               
              });
        }

    }

    // login fuunction
    const chnagePassword = async (e) => {

        if(e) e.preventDefault();

        if(!confirmPassword && !loginData.password){
            setAlert({...alert, type: "danger", show:true, message:'All fields are required'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        }else if(!loginData.password){
            setAlert({...alert, type: "danger", show:true, message:'Please enter a new password'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        }else if(!confirmPassword){
            setAlert({...alert, type: "danger", show:true, message:'Type password again'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        }else if(confirmPassword.toString() !== loginData.password.toString()){
            setAlert({...alert, type: "danger", show:true, message:'Password does not match'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        }else {
            setLoading(true);
            // setTimerLoading(true);
            const data = {
                email: loginData.email,
                password: loginData.password
            }
            await Axios.post(`${process.env.REACT_APP_AUTH_URL}/auth/force-password`, {...data}, storage.getConfigWithBearer())
            .then(async (resp) => {
    
                if(resp.data.error === false && resp.data.status === 200){

                    setStep(2);
                
                }

                setLoading(false);

              }).catch((err) => {
             
                if(err.response.data.errors[0] === 'invalid credentials'){

                    setAlert({...alert, type: "danger", show:true, message:'Incorrect email or password'})
                    setTimeout(() => {
                      setAlert({...alert, show: false});
                    }, 5000)

                    setLoading(false);

                }else if(err.response.data.errors[0] === 'user does not exist'){

                    setAlert({...alert, type: "danger", show:true, message:'Invalid credentials'})
                    setTimeout(() => {
                      setAlert({...alert, show: false});
                    }, 5000)

                    setLoading(false);

                }else if(err.response.data.errors[0] === 'password is self generated'){

                    setAlert({...alert, type: "danger", show:true, message:'An error has been detected. Contact support'})
                    setTimeout(() => {
                      setAlert({...alert, show: false});
                    }, 5000)

                    setLoading(false);

                }else{

                    if(err.response.data.errors.length > 0){

                        setAlert({...alert, type: "danger", show:true, message:err.response.data.errors[0]})
                        setTimeout(()=> {
                            setAlert({...alert, show:false});
                        }, 5000)

                    }else{
                        setAlert({...alert, type: "danger", show:true, message:err.response.data.message})
                        setTimeout(()=> {
                            setAlert({...alert, show:false});
                        }, 5000)
                    }
                    
                }  

                setLoading(false);
               
              });
        }

    }

    return(
        <>

            <SEO pageTitle="Saidatech | Home" type="main"/>

            {/* <NavBar isFixed={true} doScroll={scrollTo} /> come back for */}

            <section className="hero hero-home ui-full-bg-norm  bg-"style={{ backgroundImage: 'url("../../images/assets/section.png")' }}>

                <div className="container">

                    <div className='row no-gutters'>

                        <div className='col-lg-8 col-md-12 mx-auto'>


                            <div className='row'>

                                <div className='col-lg-6 col-md-7 mx-auto'>

                                    <div className='flex-height d-flex justify-content-center align-items-center'>

                                        <div className='form-box ui-line-height bg-white'>

                                            <div className='ui-text-center mrgb2'>

                                                {/* <Link to='/'><img src="../../../images/assets/logo-white.svg" alt="logo-white" width={'195px'} /></Link> */}
                                                <Link to='/' className="font-matterbold ui-text-center brand-blue fs-24">S A I D A T E C H</Link>
                                            </div>

                                        
                                                
                                            <Alert show={alert.show} type={alert.type} message={alert.message} />


                                                <form onSubmit={(e) => e.preventDefault()} className='form auth-form mrgt1 '>
                                                    {
                                                        step === 0 &&
                                                        <>

                                                            <div>
                                                                <h3 className="font-matterregular ui-text-center onblack  mrgb2 mrgt1 fs-16">
                                                                    Welcome! Please login
                                                                </h3>

                                                                <div className="form-group">
                                                                    <input 
                                                                    defaultValue={(e) => {setLoginData({...loginData, email: e.target.value })}}
                                                                    onChange={(e) => {setLoginData({...loginData, email: e.target.value})}}
                                                                    type="email" className="form-control fs-13 lg font-matterregular" 
                                                                    placeholder="Your email" />
                                                                </div>

                                                                <div className="form-group password-input mt-4"> 
                                                                    <Link  onClick={(e) => showPass(e)} className="eye">
                                                                        <span className="saidatech-icon md"><img src={`../../../images/icons/${pass === "password" ? 'eye' : 'eye-off'}.svg`} alt="icon eye" /></span>
                                                                    </Link>
                                                                    <input 
                                                                    defaultValue={(e) => {setLoginData({...loginData, password: e.target.value })}}
                                                                    onChange={(e) => {setLoginData({...loginData, password: e.target.value})}}
                                                                    type={pass} 
                                                                    className="form-control fs-13  font-matterregular lg" placeholder="Type password" />
                                                                </div>

                                                                <div className="ui-group-button mrgt2">
                                                                    {
                                                                        loading &&
                                                                            <Link to="/" className="spinner-border" role="status">
                                                                                <span className="sr-only">Loading...</span>
                                                                            </Link>
                                                                    }
                                                                    {
                                                                        !loading &&
                                                                        <Link onClick={(e) => login(e)} to="/" className="btn btn-block md bg-brand-blue  fs-16 gradient-org font-mattermedium onwhite">
                                                                            Login
                                                                        </Link>
                                                                    }
                                                                </div>
                                                                    
                                                            </div>
                                                                
                                                        </>

                                                    }  
                                    
                                                    
                                                </form>

                                        </div>
                                    
                                    
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </section>


        </>
    )

}

export default Login;