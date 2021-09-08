import React, {useEffect} from 'react';
import './faq.scss';
import { Link } from 'react-router-dom';
import FAQDATA from "../Pageresources/faq.json";

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>Faq's (Frequently asked questions)</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                </div>
            </div>
            <div className="faq-wrapper">    
                <div className="container">
                    <div className="row">
                        <div className="tabcontainer">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Hyperswap</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Spherium Wallet</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="tabinnerinfo-mask">
                                        <div className="faqinformations">
                                            <h2>Introduction</h2>
                                            <p>Hyperswap is a Decentralised Asset Swap that is based on an Automated Market-Making mechanism.</p>
                                            <p>With application Layer protocols mitigating high transaction costs while maintaining a security guarantee of the Settlement layer, Hyperswap is a protocol that can create liquidity and trading ERC-20 tokens on Ethereum and BEP2 on Binance Smart Chain. This process eliminates intermediaries, unnecessary fees and time, enabling fast and efficient trading. Hence the tradeoffs are decentralisation, censorship and security.</p>
                                            <h2>Hyperswap Exchange</h2>
                                            <p>The HyperSwap exchange allows users to swap any ERC20 token into any other ERC20 token through Automated Market-Making mechanisms liquidity pools. Furthermore, swapping SPHRI tokens from ERC20 to BEP2 using the swap bridge brings cross-chain interoperability to every user.</p>
                                        </div>
                                        <div className="accordion-two">
                                            <div className="accordion-wrapper">
                                                <div id="main">
                                                    <div class="accordion" id="faq">
                                                        {FAQDATA.map((val, key) => {  
                                                            return (
                                                                <div class="card" key={key}>
                                                                    <div class="card-header" id={"faqhead"+val.count}>
                                                                    <Link href="#" className={`${val.count == 1 ? "btn btn-header-link" : "btn btn-header-link collapsed"}`} data-toggle="collapse" data-target={"#faq"+val.count}
                                                                            aria-expanded="true" aria-controls={"faq"+val.count}>{val.faqtitle}</Link>
                                                                    </div>
                                                                    <div id={"faq"+val.count} className={`${val.count == 1 ? "collapse show" : "collapse"}`} aria-labelledby={"faqhead"+val.count} data-parent="#faq">
                                                                        <div class="card-body">{val.faqdescription}</div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="tabinnerinfo-mask">
                                        <div className="faqinformations">
                                            <h2>Introduction</h2>
                                            <p>Hyperswap is a Decentralised Asset Swap that is based on an Automated Market-Making mechanism.</p>
                                            <p>With application Layer protocols mitigating high transaction costs while maintaining a security guarantee of the Settlement layer, Hyperswap is a protocol that can create liquidity and trading ERC-20 tokens on Ethereum and BEP2 on Binance Smart Chain. This process eliminates intermediaries, unnecessary fees and time, enabling fast and efficient trading. Hence the tradeoffs are decentralisation, censorship and security.</p>
                                            <h2>Hyperswap Exchange</h2>
                                            <p>The HyperSwap exchange allows users to swap any ERC20 token into any other ERC20 token through Automated Market-Making mechanisms liquidity pools. Furthermore, swapping SPHRI tokens from ERC20 to BEP2 using the swap bridge brings cross-chain interoperability to every user.</p>
                                        </div>
                                        <div className="accordion-two">
                                            <div className="accordion-wrapper">
                                                <div id="main">
                                                    <div class="accordion" id="faq">
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead1">
                                                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                                                            aria-expanded="true" aria-controls="faq1">A secure native cross-chain capable solution</a>
                                                        </div>

                                                        <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                                            <div class="card-body">
                                                            Spherium implements cutting-edge cybersecurity protocols to ensure secure connections. The solution includes a built-in integration for ETH, BSC and Matic and an easy-to-use interface based on the state of the art security standards ensuring a high-quality user experience.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead2">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                                                            aria-expanded="true" aria-controls="faq2">Store, stake, lend, borrow and swap your tokens in a single wallet</a>
                                                        </div>

                                                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                                            <div class="card-body">
                                                            Users can access the platform and the complete selection of Spherium products using a single wallet allowing them to store, stake, lend, borrow and swap tokens on the individual mobile device or the web app.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                                                            aria-expanded="true" aria-controls="faq3">Connect multiple (web 3.0) wallets</a>
                                                        </div>

                                                        <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Spherium Wallet connects to any DeFi platform via the WalletConnect Protocol. It can therefore be seamlessly integrated with third-party wallets providing support for Metamask, Trust Wallet, Coinbase Wallet and others.</div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Faq;