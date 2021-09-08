import React, {useEffect} from 'react';
import './wallet.scss';

const Wallet = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>Spherium Wallet</h2>
                    <p>Non-custodial, cross-chain capable Wallet created for the ultimate user experience in the Spherium ecosystem</p> 
                </div>
            </div>
            <div className="wallet-wrapper">    
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>Benifits of Spherium Wallet</h2>
                    </div>
                    <div className="row">
                        <div className="advantages-tiles">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <img src={`${process.env.PUBLIC_URL}/images/wallet-one.svg`} alt=""/> 
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9">
                                        <div className="cardinfo">
                                            <h2>A secure native cross-chain capable solution</h2>
                                            <p>Spherium implements cutting-edge cybersecurity protocols to ensure secure connections. The solution includes a built-in integration for ETH, BSC and Matic and an easy-to-use interface based on the state of the art security standards ensuring a high-quality user experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <img src={`${process.env.PUBLIC_URL}/images/wallet-two.png`} alt=""/> 
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9">
                                        <div className="cardinfo">
                                            <h2>Store, stake, lend, borrow and swap your tokens in a single wallet</h2>
                                            <p>Users can access the platform and the complete selection of Spherium products using a single wallet allowing them to store, stake, lend, borrow and swap tokens on the individual mobile device or the web app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row">
                                    <div className="col-12 col-md-4 col-lg-3">
                                        <img src={`${process.env.PUBLIC_URL}/images/wallet-three.png`} alt=""/> 
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-9">
                                        <div className="cardinfo">
                                            <h2>Connect multiple (web 3.0) wallets</h2>
                                            <p>Spherium Wallet connects to any DeFi platform via the WalletConnect Protocol. It can therefore be seamlessly integrated with third-party wallets providing support for Metamask, Trust Wallet, Coinbase Wallet and others.</p>
                                        </div>
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

export default Wallet;