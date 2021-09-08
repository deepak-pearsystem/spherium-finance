import React from 'react';
import './countfigures.scss';
import { Link } from 'react-router-dom';

const Countfigures = () => {
    return (
        <section className="countfigures-wrapper">
            <div className="container">
                <h2 className="heading">Spherium Finance</h2>
                <div className="countsectionsmask">
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="countsections">
                                <h2>$293B+</h2>
                                <p>All Time Volume</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="countsections">
                                <h2>72K+</h2>
                                <p>Liquidity Providerse</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="countsections">
                                <h2>55M+</h2>
                                <p>All Time Trades</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="countsections">
                                <h2>200+</h2>
                                <p>Defi Integrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countfigures;