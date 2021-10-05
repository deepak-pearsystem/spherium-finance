import React, {useEffect} from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <section className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="logofooterinfo">
                            <img src={`${process.env.PUBLIC_URL}/images/footer-logo.svg`} alt="" className="img-fluid"/>
                            <p>Spherium is being built on Layer 2 solutions hence reducing cost and increasing the speed of transaction execution.</p>
                        </div>
                        <div class="footersociallist">
                            <a className="navbar-brand" href="https://www.facebook.com/spherium.finance/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.375" height="19.258" viewBox="0 0 19.375 19.258">
                                <path id="Path_8224" data-name="Path 8224" d="M19.688-7.5A9.686,9.686,0,0,0,10-17.187,9.686,9.686,0,0,0,.313-7.5,9.691,9.691,0,0,0,8.486,2.07V-4.7H6.025V-7.5H8.486V-9.634A3.418,3.418,0,0,1,12.145-13.4a14.91,14.91,0,0,1,2.169.189v2.383H13.092a1.4,1.4,0,0,0-1.579,1.513V-7.5H14.2l-.43,2.8H11.514V2.07A9.691,9.691,0,0,0,19.688-7.5Z" transform="translate(-0.313 17.188)"/>
                                </svg>
                            </a>
                            <a className="navbar-brand" href="https://twitter.com/spheriumfinance?s=21" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16.244" viewBox="0 0 20 16.244">
                                <path id="Path_8223" data-name="Path 8223" d="M17.944-11.574A8.811,8.811,0,0,0,20-13.693a8.218,8.218,0,0,1-2.36.634,4.088,4.088,0,0,0,1.8-2.259,8.07,8.07,0,0,1-2.6.99,4.089,4.089,0,0,0-2.995-1.294,4.1,4.1,0,0,0-4.1,4.1,4.627,4.627,0,0,0,.1.939A11.651,11.651,0,0,1,1.4-14.873,4.068,4.068,0,0,0,.838-12.8,4.1,4.1,0,0,0,2.665-9.391a4.128,4.128,0,0,1-1.853-.52v.051A4.1,4.1,0,0,0,4.1-5.838,4.334,4.334,0,0,1,3.02-5.7a5.166,5.166,0,0,1-.774-.063A4.106,4.106,0,0,0,6.079-2.919,8.209,8.209,0,0,1,.99-1.167,8.483,8.483,0,0,1,0-1.218,11.583,11.583,0,0,0,6.294.622,11.583,11.583,0,0,0,17.957-11.041C17.957-11.218,17.957-11.4,17.944-11.574Z" transform="translate(0 15.622)"/>
                                </svg>
                            </a>
                            <a className="navbar-brand" href="https://www.linkedin.com/company/64719370/admin/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5" viewBox="0 0 17.5 17.5">
                                <path id="Path_8222" data-name="Path 8222" d="M3.917,0V-11.684H.289V0ZM2.1-13.277A2.119,2.119,0,0,0,4.2-15.4a2.1,2.1,0,0,0-2.1-2.1A2.1,2.1,0,0,0,0-15.4,2.119,2.119,0,0,0,2.1-13.277ZM17.5,0h0V-6.418c0-3.141-.675-5.559-4.347-5.559A3.812,3.812,0,0,0,9.72-10.09H9.67v-1.594H6.19V0H9.814V-5.785c0-1.523.289-3,2.175-3,1.859,0,1.886,1.738,1.886,3.094V0Z" transform="translate(0 17.5)"/>
                                </svg>
                            </a>
                            <a className="navbar-brand" href="https://www.instagram.com/spheriumfinanceofficial/?hl=en" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.51" height="17.506" viewBox="0 0 17.51 17.506">
                                <path id="Path_8221" data-name="Path 8221" d="M8.754-11.992A4.481,4.481,0,0,0,4.266-7.5,4.481,4.481,0,0,0,8.754-3.016,4.481,4.481,0,0,0,13.242-7.5,4.481,4.481,0,0,0,8.754-11.992Zm0,7.406A2.923,2.923,0,0,1,5.836-7.5a2.921,2.921,0,0,1,2.918-2.918A2.921,2.921,0,0,1,11.672-7.5,2.923,2.923,0,0,1,8.754-4.586Zm5.719-7.59a1.047,1.047,0,0,0-1.047-1.047,1.047,1.047,0,0,0-1.047,1.047,1.044,1.044,0,0,0,1.047,1.047A1.044,1.044,0,0,0,14.473-12.176Zm2.973,1.063a5.181,5.181,0,0,0-1.414-3.668A5.215,5.215,0,0,0,12.363-16.2c-1.445-.082-5.777-.082-7.223,0a5.207,5.207,0,0,0-3.668,1.41A5.2,5.2,0,0,0,.059-11.117c-.082,1.445-.082,5.777,0,7.223A5.181,5.181,0,0,0,1.473-.227,5.221,5.221,0,0,0,5.141,1.188c1.445.082,5.777.082,7.223,0A5.181,5.181,0,0,0,16.031-.227a5.215,5.215,0,0,0,1.414-3.668C17.527-5.34,17.527-9.668,17.445-11.113Zm-1.867,8.77A2.954,2.954,0,0,1,13.914-.68c-1.152.457-3.887.352-5.16.352s-4.012.1-5.16-.352A2.954,2.954,0,0,1,1.93-2.344C1.473-3.5,1.578-6.23,1.578-7.5s-.1-4.012.352-5.16a2.954,2.954,0,0,1,1.664-1.664c1.152-.457,3.887-.352,5.16-.352s4.012-.1,5.16.352a2.954,2.954,0,0,1,1.664,1.664c.457,1.152.352,3.887.352,5.16S16.035-3.492,15.578-2.344Z" transform="translate(0.003 16.257)"/>
                                </svg>
                            </a>
                            <a className="navbar-brand" href="https://medium.com/spherium-finance" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.895" height="14.992" viewBox="0 0 18.895 14.992">
                                <path id="Path_8220" data-name="Path 8220" d="M2.793-11.941V-3.59a.952.952,0,0,1-.254.828L.555-.352v.313H6.18V-.355L4.2-2.762a.984.984,0,0,1-.273-.828v-7.223L8.859-.035h.574L13.68-10.812v8.586c0,.227,0,.273-.148.422L12-.324v.316h7.41V-.324L17.941-1.77a.44.44,0,0,1-.168-.422V-12.816a.44.44,0,0,1,.168-.422l1.508-1.445V-15H14.227L10.5-5.715,6.27-15H.793v.316l1.762,2.125A.738.738,0,0,1,2.793-11.941Z" transform="translate(-0.555 15)"/>
                                </svg>
                            </a>
                            <a className="navbar-brand" href="https://t.me/spheriumcommunity" target="_blank"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.498" height="14.675" viewBox="0 0 17.498 14.675">
                                <path id="Path_8219" data-name="Path 8219" d="M17.449-13.648c.234-1.1-.395-1.527-1.113-1.258L.812-8.926C-.246-8.512-.23-7.918.633-7.648L4.6-6.406l9.219-5.8c.434-.289.828-.129.5.16L6.867-5.312l-.289,4.1a1.01,1.01,0,0,0,.809-.395L9.328-3.477,13.352-.512c.738.414,1.258.2,1.457-.684Z" transform="translate(-0.001 14.984)"/>
                                </svg>
                            </a>
                            <a className="navbar-brand" href="https://www.reddit.com/user/Spherium-Finance/posts" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.375" height="19.375" viewBox="0 0 19.375 19.375">
                                <path id="Path_8216" data-name="Path 8216" d="M7.871-5.566a.963.963,0,0,0,.961-.961A.965.965,0,0,0,7.871-7.5a.97.97,0,0,0-.973.973A.968.968,0,0,0,7.871-5.566ZM19.688-7.5A9.686,9.686,0,0,0,10-17.187,9.686,9.686,0,0,0,.313-7.5,9.686,9.686,0,0,0,10,2.188,9.686,9.686,0,0,0,19.688-7.5ZM14.52-9.109A1.289,1.289,0,0,1,15.1-6.668a2.494,2.494,0,0,1,.074.617c0,2.055-2.313,3.719-5.168,3.719S4.852-4,4.852-6.051a2.818,2.818,0,0,1,.066-.605A1.29,1.29,0,0,1,5.48-9.109a1.294,1.294,0,0,1,.941.4,6.372,6.372,0,0,1,3.34-1.047l.746-3.375a.231.231,0,0,1,.27-.172l2.391.531a.978.978,0,0,1,.863-.539A.975.975,0,0,1,15-12.34a.975.975,0,0,1-.973.973.963.963,0,0,1-.961-.961l-2.164-.488-.68,3.059A6.315,6.315,0,0,1,13.59-8.719,1.307,1.307,0,0,1,14.52-9.109ZM11.828-4.57a3.424,3.424,0,0,1-3.656,0,.236.236,0,0,0-.324,0,.229.229,0,0,0,0,.336,3.8,3.8,0,0,0,4.3,0,.229.229,0,0,0,0-.336A.236.236,0,0,0,11.828-4.57Zm.3-2.93a.965.965,0,0,0-.961.973.963.963,0,0,0,.961.961.968.968,0,0,0,.973-.961A.968.968,0,0,0,12.129-7.5Z" transform="translate(-0.313 17.188)"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Quick Link</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/">Home</Link></li>
                                        <li><Link className="navbar-brand" to="/about">About</Link></li>
                                        <li><Link className="navbar-brand" to="/contact">Contact us</Link></li>
                                        <li><Link className="navbar-brand" to="/faq">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Our products</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/hyperswap">HyperSwap</Link></li>
                                        <li><Link className="navbar-brand" to="/hyperlend">HyperLend</Link></li>
                                        <li><Link className="navbar-brand" to="/wallet">Wallet</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Developers</h2>
                                    <ul>
                                        <li><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/pdf/Spherium-Finance-Whitepaper-EN.pdf`} target="_blank">Whitepaper(EN)</a></li>
                                        <li><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/pdf/Spherium-Finance-Whitepaper-CN.pdf`} target="_blank">Whitepaper(CN)</a></li>
                                        <li><Link className="navbar-brand" to="/governance">Governance</Link></li>
                                        <li><Link className="navbar-brand" to="/tokenomics">Tokenomics</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-3 pr-lg-0">
                                <div className="footermenulist">
                                    <h2>Legal</h2>
                                    <ul>
                                        <li><Link className="navbar-brand" to="/termsofservice">Terms of Use</Link></li>
                                        <li><Link className="navbar-brand" to="/privacypolicy">Privace Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footercopyright-mask">
                        <div className="copyrightext">Copyright © 2021 - Spherium</div>
                    </div>
                    <a id="back-to-top" href="#" class="back-to-top" role="button">
                        <img src={`${process.env.PUBLIC_URL}/images/top.svg`} alt="" className="img-fluid"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;