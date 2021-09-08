import React from 'react';
import './mobilefirst.scss';
import { Link } from 'react-router-dom';

const Mobilefirst = () => {
    return (
        <section className="mobilefirst-wrapper">
            <div className="container">
                <div className="mobilefirst-mask">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-7">
                            <div className="mobilefirst-left">
                                <p>Coming Soon...</p>
                                <div className="banneractonbtn">
                                    <button type="button" className="btn googlepay">&nbsp;</button>
                                    <button type="button" className="btn applestore">&nbsp;</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5">
                            <div className="mobilefirst-right">
                                <img src={`${process.env.PUBLIC_URL}/images/dummy-iphone.png`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobilefirst;