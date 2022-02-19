import React, { useState } from 'react';
import Axios from 'axios';
import MultipleValueTextInput from 'react-multivalue-text-input';

import storage from '../../../helpers/storage'
import Alert from '../../../layouts/partials/Alert'

const Add = () => {

    const [loading, setLoading] = useState(false);
    const [addData, setAddData] = useState({
        emalil: '',
        phone: '',
        firstName: '',
        lastName: '',
        specialty: [],
        gender: '',
        linkedin: '',
        interest: '',
        bio: ''
    });
    const [alert, setAlert] = useState({
        type: '',
        message: '',
        show: false
    });
    const [step, setStep] = useState(0);

    const submit = async (e) => {
        if(e) e.preventDefault();

        const { email, phone, firstName, lastName, specialty, gender, linkedin, interest, bio } = addData;

        if (!email || !phone || !firstName || !lastName || !specialty || !gender || !linkedin || !interest || !bio) {
            setAlert({...alert, type: "danger", show:true, message:'All fields are required'})
            setTimeout(()=> {
                 setAlert({...alert, show:false});
            }, 5000)
        } else {
            setLoading(true);

            await Axios.post(`${process.env.REACT_APP_ADMIN_URL}/users`, { ...addData }, storage.getConfigWithBearer())
            .then((resp) => {
                if (resp.data.status === 200) {
                    setStep(1);
                }
                setLoading(false)
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
        
            <section className='ui-wrapper-mini'>

                <div className="mrgt1">

                    <div className="ui-dashboard-card">

                        <div className="ui-dashboard-card-body">

                            <p className="font-matterbold fs-30">

                            </p>

                            <div className="container">

                                <form onSubmit={(e) => e.preventDefault()} className="form">

                                    <div className="form-group">

                                        <div className="form-row">

                                            <div className="col">
                                                <label className="fs-13 brandcc-purple font-mattermedium mrgb0">First Name</label>
                                                <input 
                                                defaultValue={(e) => {setAddData({...addData, firstName: e.target.value })}}
                                                onChange={(e) => {setAddData({...addData, firstName: e.target.value})}}
                                                type="text" placeholder="John" className="form-control lg font-matter" />
                                            </div>

                                            <div className="col">
                                                <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Last Name</label>
                                                <input
                                                defaultValue={(e) => {setAddData({...addData, lastName: e.target.value })}}
                                                onChange={(e) => {setAddData({...addData, lastName: e.target.value})}}
                                                type="text" placeholder="Doe" className="form-control lg font-matter" />
                                            </div>
                                            
                                            <div className="col">
                                                <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Gender</label>
                                                <input
                                                defaultValue={(e) => {setAddData({...addData, gender: e.target.value })}}
                                                onChange={(e) => {setAddData({...addData, gender: e.target.value})}}
                                                type="text" placeholder="male" className="form-control lg font-matter" />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Bio</label>
                                        <textarea 
                                        defaultValue={(e) => {setAddData({...addData, bio: e.target.value })}}
                                        onChange={(e) => {setAddData({...addData, bio: e.target.value})}}
                                        className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Technical Skills | Specialty</label>
                                        <MultipleValueTextInput
                                            onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                                            onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                                            name="item-input"
                                            className="form-control"
                                            placeholder="Big Data, Python"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Interests</label>
                                        <MultipleValueTextInput
                                            onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                                            onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                                            name="item-input"
                                            className="form-control"
                                            placeholder="Gaming, Football"
                                        />
                                    </div>

                                    <div className="form-group">

                                        <div className="form-row">

                                            <div className="col">
                                                <label className="fs-13 brandcc-purple font-mattermedium mrgb0">Contact</label>
                                                <input 
                                                defaultValue={(e) => {setAddData({...addData, phone: e.target.value })}}
                                                onChange={(e) => {setAddData({...addData, phone: e.target.value})}}
                                                type="tel" placeholder="" className="form-control lg font-matter" />
                                            </div>

                                            <div className="col">
                                                <label className="fs-13 brandcc-purple font-mattermedium mrgb0">LinkedIn</label>
                                                <input 
                                                efaultValue={(e) => {setAddData({...addData, linkedin: e.target.value })}}
                                                onChange={(e) => {setAddData({...addData, linkedin: e.target.value})}}
                                                type="text" placeholder="https://www.linkedin.com/saidatech" className="form-control lg font-matter" />
                                            </div>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        
        </>
    )
}

export default Add