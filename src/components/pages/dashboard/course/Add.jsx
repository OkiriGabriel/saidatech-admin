import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Message from '../../../layouts/partials/Message';
import Axios from 'axios';
import storage from '../../../helpers/storage';
import Alert from '../../../layouts/partials/Alert';

const AddManager = ({isShow, closeModal, modalTitle, flattened, stretch, slim}) => {

    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [addData, setAddData] = useState({
        instructorId: '620d93a16590a337f4a6f37b',
        title: '',
        price: '',
        description: '',
        duration: {
            durationType: 'month',
            durationCount: ''
        }
    });
    const [alert, setAlert] = useState({
        type: '',
        message: '',
        show: false
    });
   
    useEffect( () => {
        
    }, []);


    // functions
    const closeX = (e) => {
        if(e) e.preventDefault();
        setStep(0)
        closeModal();
    }

    const submit = async (e) => {
        if(e) e.preventDefault();

        const { title, price, description, durationType, durationCount } = addData;

        if ( !title || !price || !description  ) {
            setAlert({...alert, type: "danger", show:true, message:'All fields are required'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        } else {
            setLoading(true);
         
            
            await Axios.post(`${process.env.REACT_APP_ADMIN_URL}/courses`, { ...addData }, storage.getConfigWithBearer())
            
            .then((resp) => {
                if (resp.data.status === 200) {
                    setStep(1);
                    
                }
                setLoading(false);
            }).catch((err) => {
                if(err.response.data.errors.length > 0){

                    setAlert({...alert, type: "danger", show:true, message:err.response.data.errors[0]})
                    setTimeout(()=> {
                        setAlert({...alert, show:false});
                    }, 5000)
    
                }else{

                    setAlert({...alert, type: "danger", show:true, message: err.response.data.message })
                    setTimeout(()=> {
                        setAlert({...alert, show:false});
                    }, 5000)
                }

                setLoading(false);
            })
        }

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

                                            <Alert show={alert.show} type={alert.type} message={alert.message} />

                                            <div className="form-group">

                                                <div className="form-row">

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Course Title</label>
                                                        <input 
                                                        defaultValue={(e) => {setAddData({...addData, title: e.target.value })}}
                                                        onChange={(e) => {setAddData({...addData, title: e.target.value})}}
                                                        type="text" placeholder="Data Science" className="form-control lg font-matter" />
                                                    </div>

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Price</label>
                                                        <input
                                                        defaultValue={(e) => {setAddData({...addData, price: e.target.value })}}
                                                        onChange={(e) => {setAddData({...addData, price: e.target.value})}}
                                                        type="text" placeholder="2000" className="form-control lg font-matter" />
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="form-group">

                                                <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Description</label>
                                                <textarea 
                                                defaultValue={(e) => {setAddData({...addData, description: e.target.value })}}
                                                onChange={(e) => {setAddData({...addData, description: e.target.value})}}
                                                className="form-control" rows={3} />
                                                
                                            </div>

                                            <div className="form-group">

                                                <div className="form-row">

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Duration Type</label>
                                                        <select 
                                                        defaultValue={(e) => {setAddData({...addData, duration: {...addData.durationType, durationType: e.target.value, }})}}
                                                        onChange={(e) => {setAddData({...addData, duration: {durationType: e.target.value}})}}
                                                        className='form-control md-select font-matter fs-14 custom-select'
                                                        name="duration-type" >
                                                            <option value="month">Month</option>
                                                            <option value="year">Year</option>
                                                            <option value="day">Day</option>
                                                            <option value="week">Week</option>
                                                        </select>
                                                    </div>

                                                    <div className="col">
                                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Duration Count</label>
                                                        <input
                                                             defaultValue={(e) => {setAddData({...addData, duration: {durationCount: e.target.value}})}}
                                                             onChange={(e) => {setAddData({...addData, duration: {durationCount: e.target.value}})}}
                                                        type="text" placeholder="20" className="form-control lg font-matter" />
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="mrgt3 d-flex align-items-center">
                                                {
                                                    loading &&
                                                    <Link to="/" className="btn md bg-brand-sd-lightblue ml-auto font-matterbold onwhite disabled-lt">
                                                        <div className="spinner-border" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </Link>
                                                }
                                                {
                                                    !loading &&
                                                    <Link 
                                                    onClick={(e) => submit(e)}
                                                    to="" 
                                                    className={`btn md bg-brand-sd-lightblue font-matterbold onwhite ml-auto`}>
                                                        Submit
                                                    </Link>
                                                }
                                            </div>

                                        </>
                                    }

                                    {
                                        step === 1 &&
                                        <>
                                            <Message 
                                            title={'Thank You!'} 
                                            message={`Course added successfully.`} 
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