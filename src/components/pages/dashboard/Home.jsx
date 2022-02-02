import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Axios from 'axios'
import colors from '../../../helpers/colors';
import body from '../../../helpers/body';
import storage from '../../../helpers/storage';
import * as moment from 'moment';
import { VictoryChart, VictoryPie } from 'victory'

import DropDown from '../../../layouts/partials/DropDown'

import Carousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PlaceBox from '../../../layouts/partials/Placeholder'

import UserContext from '../../../../context/user/userContext'

// https://amazing-react-charts.vercel.app/donut-chart#demo-1

const Home = (props) => {

    const history = useHistory();
    const params = useParams();

    const userContext = useContext(UserContext)

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        body.changeBackground('mint-bg')

    }, [])
    


    return (

        <>

            <section className='section ui-wrapper-mini'>

                <div className='row'>

                    <div className='col-md-4'>

                        <div className="ui-dashboard-card c--space">

                            <div className="ui-dashboard-card-body">

                                {
                                    userContext.loading &&
                                    <>
                                        <div><PlaceBox height={'15px'} width={'120px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} /></div>
                                        <div><PlaceBox height={'7px'} width={'320px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} /></div>
                                        <div><PlaceBox height={'7px'} width={'320px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} /></div>
                                    </>
                                }

                                {
                                    !userContext.loading &&
                                    <>

                                        <div className='cardb-inner'>

                                            <h2 className='font-matterregular brandcc-purple fs-20 mrgb-1'>Hello, {  userContext.user.firstName } 👋</h2>
                                            <p className='font-matterregular mrgb0 text-muted fs-13 ui-line-height'>Nice to have you back today. Get ready to continue your course(s) and assignments.</p>

                                        </div>

                                    </>
                                }

                                {/* <div className='ui-line bg-silverlight'></div> */}

                                <div className='cardb-inner'>

                                    <h2 className='font-mattermedium fs-14 mb-3'>Badges</h2>

                                    <div className='d-flex align-items-center badge-list'>

                                        <div className='badge-icon'>
                                            <img src="../../../images/icons/dbegin.svg" alt="badge" />
                                        </div>

                                        <div className='badge-icon'>
                                            <img src="../../../images/icons/dmediate.svg" alt="badge" />
                                        </div>

                                        <div className='badge-icon'>
                                            <img src="../../../images/icons/dprof.svg" alt="badge" />
                                        </div>

                                        <div className='badge-icon'>
                                            <img src="../../../images/icons/dverified.svg" alt="badge" />
                                        </div>

                                    </div>

                                </div>

                                
                                
                            </div>

                        </div>

                    </div>

                    <div className='col-md-8'>

                        <div className="ui-dashboard-card">

                            <div className="ui-dashboard-card-body">

                                {
                                    userContext.loading &&
                                    <>
                                    
                                        <div className='cardb-inner'>

                                            <div className='row'>

                                                <div className='col-md-7'>

                                                    <div className='ov-card purple mrgb1'>
                                                        
                                                        <div className='d-flex align-items-center'>
                                                            <PlaceBox height={'25px'} width={'25px'} bgColor={'#e2ddf1'} radius={'4px'} className={'load-place'} /> &nbsp;
                                                            <PlaceBox height={'10px'} width={'120px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} />
                                                        </div>

                                                        <div className='mrgt1'>

                                                            <h4 className='text-elipsis xl mrgb0'>
                                                                <PlaceBox height={'10px'} width={'160px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} />
                                                            </h4>

                                                            <div className='d-flex align-items-center mt-1'>
                                                                <div className='d-flex align-items-center'>
                                                                    <PlaceBox height={'15px'} width={'15px'} bgColor={'#e2ddf1'} radius={'4px'} className={'load-place'} /> &nbsp;
                                                                    <PlaceBox height={'7px'} width={'45px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} />
                                                                </div>
                                                                <div className='d-flex align-items-center pdl2'>
                                                                    <PlaceBox height={'15px'} width={'15px'} bgColor={'#e2ddf1'} radius={'4px'} className={'load-place'} /> &nbsp;
                                                                    <PlaceBox height={'7px'} width={'45px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} />
                                                                </div>
                                                            </div>

                                                            <div className='mrgt mrgb'>
                                                                <div className='d-flex align-items-center ui-line-height-small'>

                                                                    <PlaceBox height={'10px'} width={'100px'} bgColor={'#e2ddf1'} radius={'100px'} className={'load-place'} />

                                                                    <PlaceBox height={'20px'} width={'20px'} bgColor={'#e2ddf1'} radius={'100%'} className={'load-place ml-auto'} />

                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className='col-md-5'>

                                                    <div className='ov-card blue'>

                                                        <PlaceBox height={'10px'} width={'60px'} bgColor={'#b0e3f7'} radius={'100px'} className={'load-place'} />

                                                        <div className='ui-text-center mrgb1'>
                                                            <PlaceBox height={'77px'} width={'77px'} bgColor={'#b0e3f7'} radius={'7px'} className={'load-place'} />
                                                        </div>

                                                    </div>
                                                    
                                                </div>

                                           </div>

                                        </div>

                                    </>
                                }

                                {
                                    !userContext.loading &&
                                    <>

                                        <div className='cardb-inner'>

                                           <div className='row'>

                                                <div className='col-md-7'>

                                                    <div className='ov-card purple c--space'>
                                                        
                                                        <span className='saidatech-icon lg'><img src={`../../../images/icons/course.svg`} alt="icon" /></span>
                                                        <span className='font-mattersemibold brandcc-purple fs-16 pdl1'>Current Course</span>

                                                        <div className='mrgt1'>

                                                            <h4 className='text-elipsis xl mrgb0'>
                                                                {/* <span className='fe fe-bookmark fs-15 brandcc-purpledark' style={{position: 'relative', top: '1px'}}></span> */}
                                                                <span className='font-matterregular brandcc-purple fs-15'>The Blockchain, Fintech & Crypto Synopsis</span>
                                                            </h4>

                                                            <div className='d-flex align-items-center mt-1'>
                                                                <div>
                                                                    <span className='fe fe-book-open fs-13 brandcc-purpledark' style={{position: 'relative', top: '1px'}}></span>
                                                                    <span className='font-matterregular brandcc-purple fs-14 pdl'>8 Lessons</span>
                                                                </div>
                                                                <div className='pdl1'>
                                                                    <span className='fe fe-clock fs-13 brandcc-purpledark' style={{position: 'relative', top: '1px'}}></span>
                                                                    <span className='font-matterregular brandcc-purple fs-14 pdl'>Short</span>
                                                                </div>
                                                            </div>

                                                            <div className='mrgt mrgb'>
                                                                <div className='d-flex align-items-center ui-line-height-small'>

                                                                    <div className="progress disabled" style={{height: '0.5rem', width: '50%', position: 'relative', top: '2px'}}>
                                                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '40%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>

                                                                    <span className='font-matterregular brandcc-purple fs-13 pdl'>??</span>

                                                                    <Link to="/dashboard/student/courses/98765" className="link-round ml-auto bg-brand-blue sm">
                                                                        <span className="fe fe-chevron-right fs-13 onwhite"></span>
                                                                    </Link>

                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className='col-md-5 ui-hide-mobile-only'>

                                                    <div className='ov-card blue'>

                                                        <p className='font-mattersemibold brandcc-purple fs-16 mrgb1'>Colleagues - 210</p>

                                                        {/* <VictoryPie
                                                            colorScale={["tomato", "orange", "gold"]}
                                                            data={[
                                                                { x: "Cats", y: 35 },
                                                                { x: "Dogs", y: 40 },
                                                                { x: "Birds", y: 55 }
                                                            ]}
                                                            animate={{
                                                                duration: 1000
                                                            }}
                                                            height={320}
                                                            innerRadius={50}
                                                            labels={({ datum }) => ``}
                                                        /> */}

                                                        <div className='ui-text-center mrgb1'>
                                                            <img src="../../../images/assets/img@students.svg" width={'76px'} alt="students" />
                                                        </div>

                                                    </div>
                                                    
                                                </div>

                                           </div>

                                        </div>

                                    </>
                                }
                                
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <div className='pdt pdb'></div>

            <section className='section'>

                <div className='row'>

                    <div className='col-md-8'>

                        <div className="ui-dashboard-card c--space">

                            <div className="ui-dashboard-card-body">

                                <div className='cardb-inner'>

                                    <div className='d-flex align-items-center'>

                                       <div className="adm-status">
                                            <p className='font-mattersemibold brandcc-purple fs-16 mrgb0'>Admission Status</p>
                                            <p className='font-matterlight mrgb0 fs-16 ui-line-height ui-hide-mobile-only'>Your admission status will appear here.</p>
                                       </div>

                                       <a href='https://forms.gle/fsCGFqhmjG4AMR2F8' target='_blank'  to="" className="btn mini gradient-red font-matterbold onwhite ml-auto">Apply Here</a>

                                    </div>

                                    <div className='empty-box xsm flat mrgt2 mrgb1' style={{ backgroundColor: '#f3f6fb' }}>

                                        <div className="ui-text-center">
                                            
                                            <div className='badge-icon'>
                                                <img src="../../../images/icons/dbegin.svg" alt="badge" />
                                            </div>

                                            <div className="row mrgt1 ui-line-height">
                                                <div className="col-md-10 mx-auto">
                                                    
                                                    <p className="font-mattermedium fs-13 mrgb ui-line-height-small brand-greeny">
                                                        Admission is still in progress
                                                    </p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='col-md-4 ui-hide-mobile-only'>

                        <Link>

                            <img width={'348px'} src='../../../images/assets/img@admi.png' alt="admission" className='ui-rounded-large admission-img' />
                        
                        </Link>

                    </div>

                </div>

            </section>

        </>

    )

}

export default Home;