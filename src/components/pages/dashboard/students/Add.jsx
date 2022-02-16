import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Message from '../../../layouts/partials/Message'

const AddManager = ({isShow, closeModal, modalTitle, flattened, stretch, slim}) => {

    const [step, setStep] = useState(0);
   
    useEffect( () => {
        
    }, []);


    // functions
    const closeX = (e) => {
        if(e) e.preventDefault();
        setStep(0)
        closeModal();
    }
   
    return (

        <>

            <Modal show={isShow} 
                onHide={closeX} 
                size="sm"
                fade={false}
                keyboard={false}
                aria-labelledby="medium-modal"
                centered
                className={`custom-modal ${slim ? slim : ''} ${stretch ? 'stretched' : ''} ${flattened ? 'flat' : ''} lg`}
            >

                <Modal.Body>

                     <div className="d-flex">

                        <div className="dm--dbx ui-full-bg-norm" style={{backgroundImage: 'url("../../../images/assets/img@add-m.jpg")'}}>
                            <div className="dm--d">
                                <div>
                                    {/* <img src="../../../images/assets/i" alt="icon" /> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="dm--body ui-full-bg-norm" style={{backgroundImage: 'url("../../../images/assets/foopat.svg")'}}> */}
                        <div className="dm--body">

                            <div className="d-flex align-items-center mrgb1">
                                <h2 className="onblack mrgb0 font-matterbold fs-18">
                                    { modalTitle }
                                </h2>
                                <div className="ml-auto">
                                    <Link onClick={(e) => closeX(e)}  className="dot-link md ui-icon-animate">
                                        <span className="fe fe-x fs-12"></span>
                                    </Link>
                                </div>
                            </div> 

                            <div className="dm--ct mrgt2">

                                <form className="form" onSubmit={(e) => e.preventDefault()}>

                                    
                                    {
                                        step === 0 &&
                                        <>

                                            <div className="form-group">

                                                <div className="form-row">

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">First name</label>
                                                        <input 
                                                        type="text" placeholder="John" className="form-control lg font-matter" />
                                                    </div>

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Last name</label>
                                                        <input
                                                        type="text" placeholder="Doe" className="form-control lg font-matter" />
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="form-group">

                                                <div className="form-row">

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Email address</label>
                                                        <input type="email" placeholder="you@example.com" className="form-control lg font-matter" />
                                                    </div>

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Course</label>
                                                        <input type="text" placeholder="Data structure" className='form-control lg font-matter' />
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="mrgt3 d-flex align-items-center">
                                                <Link to="" 
                                                className={`btn md bg-brand-sd-lightblue font-matterbold onwhite ml-auto`}>Submit</Link>
                                            </div>

                                        </>
                                    }

                                    {
                                        step === 1 &&
                                        <>
                                            <Message 
                                            title={'Thank You!'} 
                                            message={`Student added successfully.`} 
                                            action={closeX}
                                            status="success"
                                            lottieSize={100}
                                            loop={false}
                                            actionType="close"
                                            buttonText='Close'
                                            />
                                        </>
                                    }

                                </form>

                            </div>                                  
                        </div>
                    </div> 
                     
                </Modal.Body>

            </Modal>
        
        
        </>

    )

}

export default AddManager;