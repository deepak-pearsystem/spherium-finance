import React from 'react';

const Banner = () => {
    return (
        <section className="banner-wrapper">
            <div className="container">
                <div className="contentover-wrapper">
                    <div className="bannercontent-wrapper">
                        <div className="bannertoptext">Mobile-first, cross-chain wallet which optimizes return on crypto assets while minimising risks.</div>
                        <div className="bannerbtn-mask">
                            <button type="button" className="btn btn-light commfillbtn">Documentation</button>
                            <button type="button" className="btn btn-outline-light commborbtn">FAQ's</button>
                        </div>
                        <div className="bannerbottom">
                            <div className="bottom-statics">
                                <div className="counter-value">
                                    <h2>$293B+</h2>
                                    <p>All Time Volume</p>
                                </div>
                                <div className="counter-value">
                                    <h2>72K+</h2>
                                    <p>Liquidity Providers</p>
                                </div>
                                <div className="counter-value">
                                    <h2>55M+</h2>
                                    <p>All Time Trades</p>
                                </div>
                                <div className="counter-value">
                                    <h2>200+</h2>
                                    <p>Defi Integrations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-container">
                <video id="ocScreencapVideo" autoPlay="autoPlay" muted="muted" loop="loop" playsInline="playsInline" preload="metadata" data-aos="fade-up">
                    <source src={`${process.env.PUBLIC_URL}/videos/sphrilogoann.mp4`} type="video/mp4"/>
                </video>
            </div>
            
            {/* <video id="ocScreencapVideo" autoplay="autoplay" muted="muted" loop="loop" playsinline="playsinline" preload="metadata" data-aos="fade-up">
                <source src={`${process.env.PUBLIC_URL}/videos/sphrilogoann.mp4`} type="video/mp4"/>
            </video> */}
        </section>
    );
};

export default Banner;  