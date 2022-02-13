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
                                            <Link onClick={() => toggleAdd()} className="btn mini bg-brand-sd-lightblue onwhite font-matterbold">Add Student</Link>
                                            <Link className="btn mini ghost  brand-sd-blue font-matterregular ui-hide-mobile-only">Export</Link>
                                        </div>

                                    </div>
                                    
                                </div>

                                <table class="table ui-table courses-table">

                                    <thead>
                                        <tr>
                                            <th className="fs-14 font-mattermedium onblack">First name</th>
                                            <th className="fs-14 font-mattermedium onblack">Last name</th>
                                            <th className="fs-14 font-mattermedium onblack">Email</th>
                                            <th className="fs-14 font-mattermedium onblack">Course</th>
                                            <th className="fs-14 font-mattermedium onblack">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className="ui-table-row">

                                            <td className="fs-14 font-matterlight onblack">John</td>
                                            <td className="fs-14 font-matterlight onblack">Doe</td>
                                            <td className="fs-14 font-matterlight onblack ui-hide-mobile-only">john@gmail.com</td>
                                            <td className="fs-14 font-matterlight onblack ui-hide-mobile-only">Data structure</td>
                                            <td className="fs-14 font-matterbold ui-group-button">
                                                <Link to="/dashoard/student/details" className="brandcc-lblue font-matterbold fs-14">Details</Link>
                                            </td>
                                        
                                        </tr>

                                    </tbody>

                                </table>

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
