import React from 'react';
import './supportedwallets.scss';
import { Link } from 'react-router-dom';

const Supportedwallets = () => {
    return (
    <div className="supportedwall-wrapper">
        <div className="container">
            <div className="tabcontainer">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Supported Wallets</a>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Spherium Built On</a>
                    </li> */}
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="tabinnerinfo-mask">
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Wallet-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Porties-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Metama-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Coinbase-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Fortmatic-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="tabinnerinfo-mask">
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Metama-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Wallet-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Coinbase-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Fortmatic-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                            <div className="supportiles">
                                <img src={`${process.env.PUBLIC_URL}/images/Porties-logo.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Supportedwallets;