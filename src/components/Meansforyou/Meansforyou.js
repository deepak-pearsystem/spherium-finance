import React from 'react';
import './meansforyou.scss';
import { Link } from 'react-router-dom';

const Meansforyou = () => {
    return (
        <section className="meansforyou-wrapper">
            <h2 className="heading">Spherium Finance</h2>
            <div className="twocoloumlayoutleft">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-left">
                                <h2>A decentralised wallet with the experience of a centralised one.</h2>
                                <p>Safety of decentralization but convenience of centralization. UI and UX of the App are optimized by professionals with over five years of experience in the industry.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageright">
                                <img src={`${process.env.PUBLIC_URL}/images/decentralisedWallet.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutright">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageleft">
                                <img src={`${process.env.PUBLIC_URL}/images/multiChange.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-right">
                                <h2>Multi-Chain & Multi-Source Assets Management</h2>
                                <p>Creating or importing wallets, and managing all your digital assets in one place.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutleft">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-left">
                                <h2>Absolute Privacy & Security</h2>
                                <p>Taking full control of your assets with Biometric Authentication and Private Keys: managed by you, none of your personal data collected by The App.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageright">
                                <img src={`${process.env.PUBLIC_URL}/images/privacySecurity.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutright">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageleft">
                                <img src={`${process.env.PUBLIC_URL}/images/keepingTrack.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-right">
                                <h2>Keeping Track of Every Market Movement</h2>
                                <p>You are updated with what's going on right now in this vibrant crypto industry by market-watch tools integrated into the App.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutleft">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-left">
                                <h2>Interoperable Exchange</h2>
                                <p>Swap 100s of tokens on different chains, such as BSC, Ethereum and polygon.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageright">
                                <img src={`${process.env.PUBLIC_URL}/images/enterpolableExchange.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutright">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageleft">
                                <img src={`${process.env.PUBLIC_URL}/images/easyCreptoearning.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-right">
                                <h2>Easy Crypto Earning</h2>
                                <p>Getting paid in cryptocurrencies by using DApps, completing tasks and more!</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutleft">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-left">
                                <h2>Native DApps</h2>
                                <p>Taking DApp using experiences to the next level.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageright">
                                <img src={`${process.env.PUBLIC_URL}/images/nativeDapps.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="twocoloumlayoutright">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="imageleft">
                                <img src={`${process.env.PUBLIC_URL}/images/makePayment.svg`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="information-right">
                                <h2>Make Payments Within Minutes</h2>
                                <p>Send crypto as easy as messages to anyone. No need for complicated interfaces.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Meansforyou;