import React, {useEffect} from 'react';
import './hyperswap.scss';
import { Link } from 'react-router-dom';

const Hyperswap = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>Hyperswap</h2>
                    <p>Decentralised Asset Swap based on an Automated Market-Making Mechanism</p> 
                </div>
            </div>
            <div className="hyperswap">
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>What Spherium Means For You</h2>
                    </div>
                    <div className="whatspheriummask">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="card">
                                    <img src={`${process.env.PUBLIC_URL}/images/svg-icons/aam.svg`} alt="" className="img-fluid"/>
                                    <h3>Mobile First AMM</h3>
                                    <ul>
                                        <li>Do immediate ERC20 token swaps on your mobile phone.</li>
                                        <li>Cross-chain interoperable token swaps, with growing liquidity pools.</li>
                                        <li>Get rewarded for trading on HyperSwap.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="seperaterow"></div>
                            <div className="col-12 col-md-12 col-lg-6">
                                <div className="card cardlast">
                                    <img src={`${process.env.PUBLIC_URL}/images/svg-icons/pie-chart.svg`} alt="" className="img-fluid nonscroll-logo"/>
                                    <h3>Liquidity Providers</h3>
                                    <ul>
                                        <li>Liquidity mining protocol that rewards liquidity providers instead of arbitrageurs.</li>
                                        <li>Liquidity providers receive 90% of the trading fees.</li>
                                        <li>Protection against front running through virtual balances and gradual price adjustments.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="commonpagetitle">
                        <h2>One Platform for Everything DeFi!</h2>
                        <p>Best Rewards in the DeFi Swap Industry</p>
                    </div>
                    <div className="customtwocard">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="card">
                                    <h2>Earn Spherium tokens via liquidity mining</h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="card">
                                    <h2>Earn Pool's trading fee and staking rewards</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hyperswapadvantage-wrapper">
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>HyperSwap Advantage</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="swapadvantage-tiles">
                                <img src={`${process.env.PUBLIC_URL}/images/svg-icons/layer2solution.svg`} alt="" className="img-fluid"/>
                                <h2>Built on Layer 2 Solutions</h2>
                                <p>HyperSwap Leverages the Application layer to mitigate high transaction costs. HyperSwap V1.0 is built on layer 1, with its upcoming versions built on Layer 2.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="swapadvantage-tiles">
                                <img src={`${process.env.PUBLIC_URL}/images/svg-icons/faster.svg`} alt="" className="img-fluid"/>
                                <h2>Faster, Cheaper, Simple</h2>
                                <p>HyperSwap transactions are low-cost and faster in comparison to other atomic swaps because of its layer-2 design.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="swapadvantage-tiles">
                                <img src={`${process.env.PUBLIC_URL}/images/svg-icons/eth.svg`} alt="" className="img-fluid"/>
                                <h2>Developed on BSC & ETH</h2>
                                <p>HyperSwap provides cross-chain functionality as it is developed on both ETH and BSC network. Spherium will introduce cross-chain features across other blockchain networks in the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hyperswap;