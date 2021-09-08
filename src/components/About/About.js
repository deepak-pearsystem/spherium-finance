import React, {useEffect} from 'react';
import './about.scss';
import { Link } from 'react-router-dom';
import ABOUTJSONDATA from "../Pageresources/about.json";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Learn more about the vision of Spherium and meet the people behind it</p> 
                </div>
            </div>
            <div className="about-wrapper">
                <div className="container">
                    <div className="commonpagetitle">
                        <h2>Our Mission</h2>
                    </div>
                    <div className="about-wrapper__info">
                        <p>Spherium’s mission is to provide a transparent, decentralized, non-custodial, and user-friendly one-stop platform for all segments of the Financial system, empowering average users to avail the best products and services in the De-Fi space to maximize their investment/loans returns with minimal efforts. Spherium offers a collection of DeFi services including a universally usable wallet, token swap platform, money markets, and inter-Blockchain liquidity transfer, which will further be enriched by integrating new innovative services developed by the Spherium team in the near future. From a broader perspective, Spherium, can function as a banking and investment solution for the 1.7 billion global unbanked population. Further, through our emphasis on connecting the world through our financial solutions, we are planning to implement other innovative features in the DeFi-Blockchain space, which are not available in legacy financial systems.</p>
                    </div>
                    <div className="about-wrapper__mission">
                        <img src={`${process.env.PUBLIC_URL}/images/ourmission.svg`} alt="" className="img-fluid"/>
                    </div>
                    <div className="commonpagetitle">
                        <h2>Our Vision</h2>
                    </div>
                    <div className="about-wrapper__info">
                        <p>Spherium will play a vital part in changing traditional finance and redistributing the profits and power balance of the shared financial system to the users. We are aiming to create an ecosystem where every individual, irrespective of his/her geographical location, faith, and social standing becomes its own “Wealth Manager” that ensures maximum returns on their investments with relatively low risk.</p>
                        <p>To realize this vision, Spherium’s team of global DeFi experts with diverse areas of expertise including fintech, law, smart contract development, business development, AML/KYC, and blockchain research is focusing to develop services that will unleash the potential DeFi revolution.</p>
                    </div>
                </div>
                <div className="about-wrapper__whoweare">
                    <div className="container">
                        <div className="commonpagetitle">
                            <h2>Who we are?</h2>
                        </div>
                        <div className="about-wrapper__infowhoweare">
                            <p className="about-wrapper__description">Spherium is built by a decentralized team of contributors from all over the world.</p>
                            <p className="about-wrapper__description">We don’t believe in traditional companies, hierarchy and management. Anyone is welcome to contribute code, ideas or anything else that can help make our vision a reality!</p>
                        </div>
                        <div className="about-wrapper__members">

                        <div className="row">

                        {ABOUTJSONDATA.map((val, key) => {  
                            return (
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="about-wrapper__card" key={key}>
                                        <div className="animation-tiles">
                                            <div className="hover12 column">
                                                <div>
                                                    <figure>
                                                        <img src={`${process.env.PUBLIC_URL}/images/${val.image}`} alt="" className="img-fluid"/> 
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <img src={`${process.env.PUBLIC_URL}/images/${val.image}`} alt="" className="img-fluid"/>  */}
                                       <h2 className="about-wrapper__name">{val.name}</h2>
                                        <p className="about-wrapper__position">{val.position}</p>
                                        <ul className="about-wrapper__social">
                                           <li>
                                                <a href={val.socialtwitter} target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16.244" viewBox="0 0 20 16.244">
                                                    <path id="Path_8223" data-name="Path 8223" d="M17.944-11.574A8.811,8.811,0,0,0,20-13.693a8.218,8.218,0,0,1-2.36.634,4.088,4.088,0,0,0,1.8-2.259,8.07,8.07,0,0,1-2.6.99,4.089,4.089,0,0,0-2.995-1.294,4.1,4.1,0,0,0-4.1,4.1,4.627,4.627,0,0,0,.1.939A11.651,11.651,0,0,1,1.4-14.873,4.068,4.068,0,0,0,.838-12.8,4.1,4.1,0,0,0,2.665-9.391a4.128,4.128,0,0,1-1.853-.52v.051A4.1,4.1,0,0,0,4.1-5.838,4.334,4.334,0,0,1,3.02-5.7a5.166,5.166,0,0,1-.774-.063A4.106,4.106,0,0,0,6.079-2.919,8.209,8.209,0,0,1,.99-1.167,8.483,8.483,0,0,1,0-1.218,11.583,11.583,0,0,0,6.294.622,11.583,11.583,0,0,0,17.957-11.041C17.957-11.218,17.957-11.4,17.944-11.574Z" transform="translate(0 15.622)"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={val.socialin} target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5" viewBox="0 0 17.5 17.5">
                                                    <path id="Path_8222" data-name="Path 8222" d="M3.917,0V-11.684H.289V0ZM2.1-13.277A2.119,2.119,0,0,0,4.2-15.4a2.1,2.1,0,0,0-2.1-2.1A2.1,2.1,0,0,0,0-15.4,2.119,2.119,0,0,0,2.1-13.277ZM17.5,0h0V-6.418c0-3.141-.675-5.559-4.347-5.559A3.812,3.812,0,0,0,9.72-10.09H9.67v-1.594H6.19V0H9.814V-5.785c0-1.523.289-3,2.175-3,1.859,0,1.886,1.738,1.886,3.094V0Z" transform="translate(0 17.5)"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                           
                        </div>
                            <div className="about-wrapper__advisors">
                                <h4>Advisors</h4>
                                <div className="advisorsicons">
                                    <div className="advisorsicon">
                                        <img src={`${process.env.PUBLIC_URL}/images/Advisorsone.svg`} alt="" className="img-fluid"/> 
                                    </div>
                                    <div className="advisorsicon">
                                        <img src={`${process.env.PUBLIC_URL}/images/Advisorstwo.svg`} alt="" className="img-fluid"/> 
                                    </div>
                                    <div className="advisorsicon">
                                        <img src={`${process.env.PUBLIC_URL}/images/Advisorsthree.svg`} alt="" className="img-fluid"/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <div className="about-wrapper__advisors">
                    <h4>Advisors</h4>
                    <div className="advisorsicons">
                        <div className="advisorsicon">
                            <img src={`${process.env.PUBLIC_URL}/images/Advisorsone.svg`} alt="" className="img-fluid"/> 
                        </div>
                        <div className="advisorsicon">
                            <img src={`${process.env.PUBLIC_URL}/images/Advisorstwo.svg`} alt="" className="img-fluid"/> 
                        </div>
                        <div className="advisorsicon">
                            <img src={`${process.env.PUBLIC_URL}/images/Advisorsthree.svg`} alt="" className="img-fluid"/> 
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default About;