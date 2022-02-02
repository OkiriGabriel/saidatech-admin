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




const ResetPassword = (props) => {

    const history = useHistory();

    const [loading, setLoading] = useState();
    const [pass, setPass] = useState('password');
    const [step, setStep] = useState(0)

    const [forgotData, setForgotData] = useState({
        email: '',
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


    const resetPassword = async (e) => {

        if(e) e.preventDefault();

        

    }



    return(
        <>

            <SEO pageTitle="Saidatech | Home" type="main"/>

            {/* <NavBar isFixed={true} doScroll={scrollTo} /> come back for */}

            <section className="hero hero-home ui-full-bg-norm " style={{ backgroundImage: 'url("../../images/assets/section.png")' }}>

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
                                                <h3 className="font-matterregular ui-text-center onblack  mrgb2 mrgt1 fs-14">
                                                    Please input a new password
                                                </h3>

                                                <div className="form-group password-input mt-4"> 
                                                    <Link  onClick={(e) => showPass(e)} className="eye">
                                                        <span className="saidatech-icon md"><img src={`../../../images/icons/${pass === "password" ? 'eye' : 'eye-off'}.svg`} alt="icon eye" /></span>
                                                    </Link>
                                                    <input type={pass} 
                                                    className="form-control fs-13  font-matterregular lg" placeholder="Type new  password" />
                                                </div>

                                                <div className="form-group password-input mt-4"> 
                                                    <Link  onClick={(e) => showPass(e)} className="eye">
                                                        <span className="saidatech-icon md"><img src={`../../../images/icons/${pass === "password" ? 'eye' : 'eye-off'}.svg`} alt="icon eye" /></span>
                                                    </Link>
                                                    <input type={pass} 
                                                    className="form-control fs-13  font-matterregular lg" placeholder="Confirm new password" />
                                                </div>

                                                <div className="ui-group-button mrgt2">
                                                    {
                                                        loading &&
                                                        <Link to="/" className="btn btn-block lg bg-brand-blue font-matterbold onwhite disabled-lt">
                                                            <span className='concreap-loader white sm'></span>
                                                        </Link>
                                                    }
                                                    {
                                                        !loading &&
                                                        <Link to="/" className="btn btn-block md bg-brand-blue  fs-16 gradient-org font-mattermedium onwhite">
                                                            Send reset link
                                                        </Link>
                                                    }

                                                </div>
                                                    <div className='ui-text-center mrgt1'>
                                                        <Link to="/forgot-password" className="font-matterregular brandcc-lightblue fs-12">Remember password? Log in</Link>
                                                    </div>

                                                    <div className='ui-text-center mrgt pb-2'>
                                                        <Link to="/register" className="font-matterregular brandcc-indigo fs-12">New User ? Create account</Link>
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

export default ResetPassword;