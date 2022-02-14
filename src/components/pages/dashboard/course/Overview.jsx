import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AddModal from "./Add"

const Overview = () => {

    const [show, setShow] = useState(false);

    const toggleAdd = (e) => {
        if(e) e.preventDefault();
        setShow(!show);
    }

    return (
        <>

            <section className='section ui-wrapper-mini'>

                <div className="mrgt2">

                    <div className="ui-dashboard-card ">

                        <div className="ui-dashboard-card-body">

                            <div className='cardb-inner'>

                                <div className="ui-page-header mrgb">

                                    <div className="form ui-hide-mobile-only">
                                        <div className="icon-input">
                                            {/* <span className="checkaam-icon sm icon"><img src="../../../images/icons/search.svg" alt="icon"/></span> */}
                                            <input type="text" placeholder="Search" className="form-control md search font-metrolight fs-14"></input>
                                        </div>
                                    </div>

                                    <div className="pdl pdr1"></div>

                                    <div className="ui-page-header-options">

                                        <div className="ui-group-button">
                                            <Link onClick={() => toggleAdd()} className="btn mini bg-brand-sd-lightblue onwhite font-matterbold">Add Course</Link>
                                            <Link className="btn mini ghost  brand-sd-blue font-matterregular ui-hide-mobile-only">Export</Link>
                                        </div>

                                    </div>
                                    
                                </div>

                                <div>

                                    <>
                                        <div className="empty-box md" style={{ backgroundColor: '#fff' }}>

                                            <div className="ui-text-center">
                                                <div className="row">
                                                    <div className="col-md-10 mx-auto">
                                                        <span className="tma-loader md"></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </>

                                    <>
                                        <div className="empty-box md" style={{ backgroundColor: '#f3f6fb' }}>

                                            <div className="ui-text-center">
                                                
                                                {/* <span className="checkaam-icon xl" style={{position: 'relative', left: '0px'}}><img src={`../../../images/icons/dstore.svg`} alt="icon" /></span> */}

                                                <div className="row mrgt1">
                                                    <div className="col-md-10 mx-auto">

                                                        <span style={{position: 'relative', left: '0', top: '1px', color: '#000', opacity: '0.3'}} className='tma-talents'>
                                                            <span className='path1 fs-30'></span>
                                                            <span className='path2 fs-30'></span>
                                                        </span>
                                                        
                                                        <p className="font-matterregular fs-14 mrgb ui-line-height  onblack">
                                                            There are no courses currently. You can add a new course now.
                                                        </p>
                                                                    
                                                        <div className="ui-group-button mrgt1">
                                                            <Link onClick={(e) => toggleAdd(e)} className="btn btn-lg bg-brand-sd-lightblue onwhite font-mattermedium fs-14">Add Course</Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </>

                                </div>

                                <div className="ui-wrapper-small table-responsive">

                                    <table class="table ui-table courses-table">

                                        <thead>
                                            <tr>
                                                <th className="fs-14 font-mattermedium onblack">Course name</th>
                                                <th className="fs-14 font-mattermedium onblack">Tag</th>
                                                <th className="fs-14 font-mattermedium onblack">Price</th>
                                                <th className="fs-14 font-mattermedium onblack">Instructor Assigned</th>
                                                <th className="fs-14 font-mattermedium onblack">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="ui-table-row">

                                                <td className="fs-14 font-matterlight onblack">Data Structure</td>
                                                <td className="fs-14 font-matterlight onblack">Data</td>
                                                <td className="fs-14 font-matterlight onblack ui-hide-mobile-only">$1,900</td>
                                                <td className="fs-14 font-matterlight onblack ui-hide-mobile-only">Okiri Gabriel</td>
                                                <td className="fs-14 font-matterbold ui-group-button">
                                                    <Link to="/dashboard/course/:id" className="brandcc-lblue font-matterbold fs-14">Details</Link>
                                                </td>
                                            
                                            </tr>

                                        </tbody>

                                    </table>
                                    
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <AddModal isShow={show} closeModal={toggleAdd} modalTitle="Add Student" flattened={true} slim="slim-lg" />

        </>
    );
};

export default Overview;
