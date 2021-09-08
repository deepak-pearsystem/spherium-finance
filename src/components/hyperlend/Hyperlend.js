import React, {useEffect} from 'react';
import './spherecomp.scss';
import { Link } from 'react-router-dom';

const Hyperlend = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>HyperLend</h2>
                    <p>Decentralised Money Markets to Lend and Borrow Digital Assets</p> 
                </div>
            </div>
            <div className="spherecomp-wrapper">
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>HyperLend Advantage</h2>
                    </div>
                    <div className="sphadvantage">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="sphadvantage__card">
                                    <img src={`${process.env.PUBLIC_URL}/images/advantageone.svg`} alt="" className="img-fluid"/>
                                    <h2>Decentralized Money Markets to Lend and Borrow Digital Assets</h2>
                                    <ul>
                                        <li>Ethereum-asset-based money market.</li>
                                        <li>Support for multiple lending pools.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="sphadvantage__card">
                                    <img src={`${process.env.PUBLIC_URL}/images/advantagetwo.svg`} alt="" className="img-fluid"/>
                                    <h2>Algorithmic interest rates based on supply and demand</h2>
                                    <ul>
                                        <li>Interest rates are algorithmically driven based on the supply and demand of assets.</li>
                                        <li>Transparent floating interest rates for every participant.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="sphadvantage__card">
                                    <img src={`${process.env.PUBLIC_URL}/images/advantagethree.svg`} alt="" className="img-fluid"/>
                                    <h2>Open money market for lenders and borrowers</h2>
                                    <ul>
                                        <li>Lenders and borrowers interact directly with SphereComp.</li>
                                        <li>No negotiations for security, collateral, or interest rates.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="howorks">
                        <div className="commonpagetitle">
                            <h2>How HyperLend Works</h2>
                        </div>
                        <div className="howorks__wrapper">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="howorks__info">
                                        <img src={`${process.env.PUBLIC_URL}/images/countone.svg`} alt="" className="img-fluid"/>
                                        <h2>AMM providers</h2>
                                        <p>AMM providers can earn interest on the supply of their digital assets into the protocol.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="howorks__images">
                                        <img src={`${process.env.PUBLIC_URL}/images/workone.png`} alt="" className="img-fluid"/>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="howorks__images--web">
                                        <img src={`${process.env.PUBLIC_URL}/images/worktwo.png`} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="howorks__info">
                                        <img src={`${process.env.PUBLIC_URL}/images/counttwo.svg`} alt="" className="img-fluid"/>
                                        <h2>Smart contract</h2>
                                        <p>Smart contract aggregates the total liquidity of each asset into a pooled fund, which is available for borrowers to borrow.</p>
                                    </div>
                                    <div className="howorks__images--responsive">
                                        <img src={`${process.env.PUBLIC_URL}/images/worktwo.png`} alt="" className="img-fluid"/>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="howorks__info">
                                        <img src={`${process.env.PUBLIC_URL}/images/counthree.svg`} alt="" className="img-fluid"/>
                                        <h2>Borrowers Pay Interest</h2>
                                        <p>Loans are not matched individually between lenders and borrowers but are taken from the pooled fund. Borrowers pay interest, which is distributed proportionately to the liquidity lenders provide.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="howorks__images">
                                        <img src={`${process.env.PUBLIC_URL}/images/workthree.png`} alt="" className="img-fluid"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                 </div>
                </div>
            </div>
        </section>
    );
};

export default Hyperlend;