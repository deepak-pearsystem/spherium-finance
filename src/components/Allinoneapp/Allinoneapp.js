import React from 'react';
import './allinoneapp.scss';
import { Link } from 'react-router-dom';

const Allinoneapp = () => {
    return (
        <section className="allinoneapp-wrapper">
            <div className="container">
                <h2 className="heading">Spherium Finance</h2>
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="countsections one">
                            <img src={`${process.env.PUBLIC_URL}/images/polygon.svg`} alt="" className="img-fluid"/>
                            <p>Polygon</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="countsections two">
                            <img src={`${process.env.PUBLIC_URL}/images/binance-icon.svg`} alt="" className="img-fluid"/>
                            <p>Binance Smart Chain</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="countsections three">
                            <img src={`${process.env.PUBLIC_URL}/images/etharium-icon.svg`} alt="" className="img-fluid"/>
                            <p>Ethereum</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="countsections four">
                            <img src={`${process.env.PUBLIC_URL}/images/clock.svg`} alt="" className="img-fluid"/>
                            <p>More blockchains coming soon...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Allinoneapp;