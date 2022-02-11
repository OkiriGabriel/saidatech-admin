import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
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
                                            <Link className="btn mini bg-brand-sd-lightblue onwhite font-matterbold">Add Manager</Link>
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
                                            <th className="fs-14 font-mattermedium onblack">Phone number</th>
                                            <th className="fs-14 font-mattermedium onblack">Invite status</th>
                                            <th className="fs-14 font-mattermedium onblack">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className="ui-table-row">

                                            <td className="fs-14 font-matterlight onblack"></td>
                                            <td className="fs-14 font-matterlight onblack"></td>
                                            <td className="fs-14 font-matterlight onblack ui-hide-mobile-only"></td>
                                            <td className="fs-14 font-matterlight onblack ui-hide-mobile-only"></td>
                                            <td className=''></td>
                                            <td className="fs-14 font-matterbold ui-group-button">
                                                <Link className="brandcc-lblue font-matterbold fs-14">Details</Link>
                                            </td>
                                        
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

      </>
  );
};

export default Overview;
