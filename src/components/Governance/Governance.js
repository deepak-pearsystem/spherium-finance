import React, {useEffect} from 'react';
import './governance.scss';

const Governance = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>Governance</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                </div>
            </div>
            <div className="governance-wrapper">    
                <div className="container">
                    <div className="row">
                        <p>Spherium's ultimate goal is to operate via a decentralised governance model, for which Spherium plans to build a community of stakeholders that will be able to vote on essential issues related to its ecosystem.</p>
                        <p>The complete control of the platform governance will be handed over to SPHRI token holders by March 31, 2022, at noon GMT. In the meantime, the Spherium core team will make decisions whenever needed for the broader interest of the Spherium ecosystem providing a 30-day discussion period between decision and implementation.</p>
                        <h4>The general governance framework includes the following:</h4>
                        <ul>
                            <li>2.14% of the total supply (may include delegated allocation) are required to submit a governance proposal.</li>
                            <li>5% of SPH supply are required to vote ’YES’ to reach quorum.</li>
                            <li>7-day voting period.</li>
                            <li>At least 1 SPHRI token is required to vote.</li>
                            <li>2-day time lock on the execution of the proposal.</li>
                        </ul>
                        <h4>Once the 20% total supply of the tokens is released, the token holders will be able to initiate Spherium Improvement Proposal (SIP) on the Spherium community forum and vote in favour of or against the SIP. Some examples may include.</h4>
                        <ul>
                            <li>Increase or decrease of the HyperSwap liquidity pool fee depending on the volatility of the trade.</li>
                            <li>Adding new liquidity pools for HyperSwap.</li>
                            <li>Adding new money markets to SphereComp.</li>
                            <li>Adjusting the SPHRI allocation weights between different liquidity pools.</li>
                        </ul>
                        <p>Apart from the SIP, the community forum will be used for general discussion on issues related to the Spherium ecosystem and as a platform for the Requests for Comment (RFC).</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Governance;