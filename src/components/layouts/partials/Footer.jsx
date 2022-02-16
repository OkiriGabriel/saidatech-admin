// eslint-disable-next-line
/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Footer = () => {

    const history = useHistory();
    const params = useParams();

    useEffect(() => {

    }, []);

  

    return (
        <>

          <footer className="ui-wrapper-large footer bg-fdark">

                <div className="container">

                    <div className="mrgb3">

                        <div className="row">

                            

                            <div className="col-md-12 mx-auto">

                                <div className="row">

                                    <div className="col-md-3 col-sm-6">

                                        <h4 className="onwhite font-mattersemibold fs-13 ui-upcase mrgb1">CONTACT</h4>

                                        <div className="footer-links d-block">
                                            <p className="font-matterregular fs-13 mb-0 onwhite"> NEW YORK, NY</p>
                                            <p className="font-matterregular fs-13 mb-0 onwhite" > UNITED STATES</p>
                                            <p className="font-matterregular fs-13 mb-0 onwhite"> +1 (347) 7577066</p>
                                            <Link className="font-matterregular fs-13 mb-0 onwhite"> INFO@LEARN.saidatech.com</Link>
                                        </div>
                                     



                                    </div>

                                    <div className="col-md-3 col-sm-6">

                                        <h4 className="onwhite font-mattersemibold fs-13 ui-upcase mrgb1">COMPANY</h4>

                                        <div className="footer-links" >
                                            <Link to="/about" className="font-matterregular onwhite fs-13">About us</Link>
                                        </div>
                                        <div className="footer-links" >
                                            <Link to="/blog" className="font-matterregular onwhite fs-13">Blog</Link>
                                        </div>
                                        <div className="footer-links" >
                                            <Link to="/contact" className="font-mattermatterregular onwhite fs-13">Contact</Link>
                                        </div>
                                        <div className="footer-links" >
                                            <Link to="/teacher" className="font-metrolight fs-13 onwhite">Become a teacher</Link>
                                        </div>

                                    </div>

                                    <div className="col-md-3 col-sm-6 sd-footer">

                                        <h4 className="onwhite font-mattersemibold fs-13 ui-upcase mrgb1">Programs</h4>

                                        <div className="footer-links">
                                             <Link to="/check-back" className="font-matterregular fs-13 onwhite">Nanodegree PLUS</Link>
                                        </div>
                                        <div className="footer-links">
                                             <Link to="/check-back" className="font-matterregular fs-13 onwhite">Veterans</Link>
                                        </div>
                                        <div className="footer-links">
                                             <Link to="/check-back" className="font-matterregular fs-13 onwhite">Geogia</Link>
                                        </div> 
                                        <div className="footer-links">
                                             <Link to="/check-back" className="font-matterregular fs-13 onwhite">Self driving car</Link>
                                        </div> 

                                    </div>

                                    <div className="col-md-3 col-sm-6 sd-footer">

                                        <h4 className="onwhite font-mattersemibold fs-13 ui-upcase mrgb1 onwhite" >Support</h4>

                                            <div className="footer-links">
                                                    {/* <a href="mailto:hello@checkaam.com" className="font-matterregular fs-13">E: hello@checkaam.com</a> */}
                                                    <Link  className="font-matterregular fs-13 onwhite">Documentation</Link>

                                            </div>
                                            <div className="footer-links">
                                                    {/* <a href="mailto:hello@checkaam.com" className="font-matterregular fs-13">E: hello@checkaam.com</a> */}
                                                    <Link  className="font-matterregular fs-13 onwhite">Forums</Link>

                                            </div>
                                            <div className="footer-links">
                                                    {/* <a href="mailto:hello@checkaam.com" className="font-matterregular fs-13">E: hello@checkaam.com</a> */}
                                                    <Link  className="font-matterregular fs-13 onwhite">Language</Link>

                                            </div>

                                            <div className="footer-links">
                                                    {/* <a href="mailto:hello@checkaam.com" className="font-matterregular fs-13">E: hello@checkaam.com</a> */}
                                                    <Link  className="font-matterregular fs-13 onwhite">Release status</Link>

                                            </div>

                                    </div>

                                </div>

                                
                            </div>

                        </div>

                    </div>

                    <div className="ui-line bg-silverlight"></div>

                    <div className="row">
                        <div className="col-12 mx-auto">
                        <div className="container ui-text-center">

                                <Link to="/" className="footer-logo onwhite">S A I D A T E C H</Link>
                                <p className="font-matter fs-14 mrgb1 mrgt1" style={{color: '#fff'}}>Copyright &copy; 2022,  Saidatech. All rights reserverd.</p>

                                <ul class="social_media list-inline onwhite mrgt mrgb0">
                                    <li class="list-inline-item "><a href="" target="_blank" className=" link-underlined hover onwhite "><i class="fab fa-instagram onwhite" aria-hidden="true"></i></a></li>
                                    <li class="list-inline-item"><a href="" target="_blank" className=" link-underlined onwhite hover"><i class="fab fa-twitter onwhite" aria-hidden="true"></i></a></li>
                                    <li class="list-inline-item"><a href="" target="_blank" className=" link-underlined onwhite hover"><i class="fab fa-linkedin onwhite" aria-hidden="true"></i></a></li>
                                </ul>

                        </div>
                        </div>
                    </div>

                    </div>

            </footer>
            
        </>
    )

}

export default Footer;