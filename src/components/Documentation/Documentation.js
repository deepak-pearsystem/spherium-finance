import React from 'react';
import './documentation.scss';
import $ from "jquery";

const Documentation = () => {    
    $(function () {
        $(".menu-trigger").click(function () {
          $(this).next(".menu").toggleClass("open"); // Selects only the next one!
          $(this).html($(this).next(".menu").hasClass("open") ? '-' : '+');
          return false;
        });
    });                           
    return (
        <section className="documentation-wrapper">
        <div className="menutopsection">&nbsp;</div>
        <div className="documentation-cms">
            <div className="container">
            <div class="row">
                <div class="col-12 col-md-5 col-lg-4">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <h3>Documentations</h3>
                        
                        <a class="nav-link active" id="v-pills-one-tab" data-toggle="pill" href="#v-pills-one" role="tab" aria-controls="v-pills-one" aria-selected="true">Spherium Ecosystem <svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                        
                        <a class="nav-link" id="v-pills-two-tab" data-toggle="pill" href="#v-pills-two" role="tab" aria-controls="v-pills-two" aria-selected="false">Advanced Concepts<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                        <a class="nav-link" id="v-pills-three-tab" data-toggle="pill" href="#v-pills-three" role="tab" aria-controls="v-pills-three" aria-selected="false">Governance<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                        <a class="nav-link" id="v-pills-four-tab" data-toggle="pill" href="#v-pills-four" role="tab" aria-controls="v-pills-four" aria-selected="false">Bug Bounty Program<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                        <a class="nav-link" id="v-pills-five-tab" data-toggle="pill" href="#v-pills-five" role="tab" aria-controls="v-pills-five" aria-selected="false">Developers<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                        <a class="nav-link" id="v-pills-six-tab" data-toggle="pill" href="#v-pills-six" role="tab" aria-controls="v-pills-six" aria-selected="false">Spherium Labs Grants<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                        <a class="nav-link" id="v-pills-seven-tab" data-toggle="pill" href="#v-pills-seven" role="tab" aria-controls="v-pills-seven" aria-selected="false">Whitepaper<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                            <a class="nav-link" id="v-pills-eight-tab" data-toggle="pill" href="#v-pills-eight" role="tab" aria-controls="v-pills-eight" aria-selected="false">Tokenomics<svg width="9.999999999999998" height="9.999999999999998" xmlns="http://www.w3.org/2000/svg">
                                    <title/>

                                    <g>
                                    <rect fill="#fff" id="canvas_background" height="12" width="12" y="-1" x="-1"/>
                                    </g>
                                    <g>
                                    <path stroke="null" transform="rotate(90.01243591308594 4.883902072906494,5.103638172149659) " id="svg_1" d="m9.4051,6.945985l-3.919573,-4.703482a0.810365,0.810365 0 0 0 -1.203424,0l-3.919573,4.703482a0.78374,0.78374 0 1 0 1.203424,1.004386l3.317861,-3.980819l3.317861,3.980819a0.78374,0.78374 0 1 0 1.203424,-1.004386z"/>
                                    </g>
                                    </svg></a>
                    </div>
                </div>
                <div class="col-12 col-md-7 col-lg-8">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-one" role="tabpanel" aria-labelledby="v-pills-one-tab">
                            <div className="tebdetail-wrapper">
                                <h2>Spherium Ecosystem</h2>
                                <p>Spherium's ultimate goal is to operate via a decentralised governance model, for which Spherium plans to build a community of stakeholders that will be able to vote on essential issues related to its ecosystem.</p>
                                <h4>How HyperSwap works</h4>
                                <p>HyperSwap provides a decentralised platform for swapping ERC20 tokens using a cutting-edge Automated Market Maker (AMM) algorithm that enables the liquidity providers, rather than arbitrageurs, to capture profits by reducing the price skew (for an asset in a pool) and bringing the asset price back to the market price.</p>
                                <p>HyperSwap will create different liquidity pools and incentivise the liquidity providers via Liquidity Mining or yield farming. Users can add liquidity for any asset pair on HyperSwap liquidity protocols. Smartlink intends to introduce SPHRI tokens for LPs for approved asset pairs, but final announcements will be made at a later date.</p>
                                <p>Spherium will add liquidity pools for popular token pairs including ERC20 tokens (e.g., SPHRI/ETH, SPHRI/LINK, ETH/REN, etc.) of equal worth.</p>
                                <div className="detailsimg">
                                    <img src={`${process.env.PUBLIC_URL}/images/Spherium-Staking-Pool.svg`} alt="" className="img-fluid"/>
                                </div>
                                <p>Liquidity providers can deposit any of the supported tokens to Spherium’s liquidity pools and receive liquidity pool shares against their deposit. These shares can then be redeemed for the desired tokens (a lock-in period may apply).</p>
                                <p>Spherium charges a standard 0.30% for every trade/swap, with 0.27% distributed among liquidity providers and 0.03% among SPHRI stakers.</p>
                                <h4>How HyperSwap works</h4>
                                <p>All current pairs available on HyperSwap for trading/swaps are listed indicating total liquidity, liquidity (12 hours/24 hours) and total fees generated by specific pairs. You can click the pair you want to trade/swap from the list as the application consistently pulls data from the smart contract to show current figures.</p>
                                <h4>Swap</h4>
                                <p>The users looking to access the Swap feature can choose the token pair they prefer for swapping, with ‘From’ field indicating the token that should be used as a swapped asset and ‘To’ field indicating the desired token to be swapped into.</p>
                                <p>After choosing a token pair, the user is able to see the conversion price, liquidity, fees, price impact ratio (~0.01%), and slippage. Slippage is an auto-feature for volatility protection indicating the difference in prices between the opening of a trade and its execution. The user can choose a slippage tolerance before a swap; in the case of Spherium it is set at maximum 1% for every trading pair. </p>
                                <p>Other factors your can adjust before a swap are</p>
                                <ul>
                                    <li>Transaction deadline: You can set a transaction deadline for your swap; the system will inform you if the transaction takes longer than the default value of 20 minutes.  </li>
                                    <li>Interface settings: During a swap, you can remove default slippage and choose ”Expert Mode” to execute a trade (advisable only for experienced traders).</li>
                                </ul>
                                <h4>Pool</h4>   
                                <p>Liquidity pools are essential for swaps/trading to take place. Liquidity providers on Spherium will earn rewards in the form of fees generated by the swaps on the platform. </p>
                                <p>Pooling allows users to become liquidity providers. You can either contribute to a pool by adding liquidity or create a new pool for a token pair.</p>
                                <p>When contributing to a pool, choose the “add liquidity” option. Select the amount of respective tokens you want to add to a pool and the corresponding pair value will populate automatically. You can see the size of the pool and exchange rate before adding liquidity. Approve the transaction to add liquidity. Spherium will send SPHRI-X tokens in proportion to your contribution to your address. These tokens entitle you to receive a portion of the transaction fees earned by the pool. You can redeem SPHRI-X tokens at any time.</p>
                                <p>Liquidity providers looking to withdraw their liquidity can start by selecting “removing liquidity portion”. Select the token that you provided liquidity for. You’ll be able to see a current SPHRI-X balance right above the ticker symbol and will have to select this number to remove 100% of your liquidity. You should be able to see an output comprising your liquidity and the fees earned during the lock-in/contribution period. Click “remove liquidity”. Once the transaction is confirmed, you will receive your tokens along with transaction fees in your wallet.</p>
                                <p>When creating a new pool, you have to consider transaction deadline, slippage rate, and adjust interface settings as per your preferences. Also, when creating a new pair, make sure that you have both currencies in your wallet in sufficient and equal value.</p>

                                <h2>Participants in the Spherium Ecosystem</h2>
                                <p>The Spherium ecosystem has three main participants: liquidity providers, traders and the Spherium team and community.</p>
                                <h4>Liquidity Providers</h4>
                                <p>Liquidity providers play a critical role by providing liquidity across various pools. They’re incentivised in the form of trading fees ($0.27 out of $0.30 goes to the liquidity providers). The users can become liquidity providers by contributing to the available pools. We broadly classify liquidity providers into two groups: LPs who are seeking long-term, passive returns and DeFi projects contributing liquidity to propel their platforms forward</p>
                                <h4>Traders</h4>
                                <p>Traders are market actors using Spherium for token swaps. We classify traders across various groups including retail traders, arbitrage bots and users seeking tokens for use within a platform.</p>
                                <h4>Governance</h4>
                                <p>Spherium intends to implement an on-chain governance making it a community-driven project in the coming months. Therefore, the Spherium community plays a crucial role in the success of the project, more details to follow.</p>

                                <h2>How HyperLend Works</h2>
                                <p>Content to be added before the Product launch in our next phase.</p>

                                <h2>How Spherium Wallet Works</h2>
                                <p>Coming Soon...</p>

                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-two" role="tabpanel" aria-labelledby="v-pills-two-tab">
                        <div className="tebdetail-wrapper">
                                <h2>Advanced Concepts</h2>
                                <h4>HyperSwap</h4>
                                <h4>Fees, Liquidity Mining, Pricing</h4>
                                <p>Spherium will charge a default fee of 0.30% for token swaps with 0.27% going to the liquidity providers as rewards for liquidity mining and 0.03% going to SPHRI stakers as staking rewards. Spherium deposits transaction fees immediately into the liquidity reserve. Liquidity providers will burn these SPHRI-X tokens to redeem rewards. It is critical to understand that in the case of major market movements, liquidity providers may sustain losses. In terms of pool pricing, all liquidity pools follow a constant product formula that ensures constant reserve value. In an equation, a∗b=c, c represents the constant invariant and a and b represent crypto pairs whose values adjust to keep c constant.</p>
                                <h4>Security</h4>
                                <p>Halborn, Quillash and PeckShield, three of the global leaders in blockchain security and infrastructure, audited the smart contracts for $SPHRI.</p>
                                <p>As of August 2021, the Spherium smart contracts are verified and confirmed to be secure.</p>
                                <p>Smart contracts often contain owner variables to designate an entity with special privileges to make modifications to a smart contract; however, COP needs to be made clear to users, mostly depending on the owner-related factors (i.e., vesting).</p>
                                <p>The $SPHRI token is held in a multi-sig Gnosis-based wallet that relies on multiple signatories for a successful transaction. In short, sudden changes to token vesting or malicious acts by a single actor become impossible. </p>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-three" role="tabpanel" aria-labelledby="v-pills-three-tab">
                        <div className="tebdetail-wrapper">
                                <h2>Governance</h2>
                                <p>Spherium's ultimate goal is to operate via a decentralized governance model, for which Spherium plans to build a community of stakeholders that will be able to vote on essential issues related to its ecosystem. </p>
                                <p>The full control of the platform governance will be handed over to SPHRI token holders by March 31, 2022, at noon GMT. In the meantime, the Spherium core team will make decisions whenever needed for the wider interest of the Spherium ecosystem providing a 30-day discussion period between decision and implementation.</p>
                                <p>The general governance framework includes the following:</p>
                                <ul>
                                    <li>2.14% of the total supply (may include delegated allocation) are required to submit a governance proposal;</li>
                                    <li>5% of SPHRI supply are required to vote ’YES’ to reach quorum;</li>
                                    <li>7-day voting period;</li>
                                    <li>at least 1 SPHRI token is required to vote;</li>
                                    <li>2-day time lock on the execution of the proposal.</li>
                                </ul>
                                <p>Once the 20% total supply of the tokens is released, the token holders will be able to initiate Spherium Improvement Proposal (SIP) on the Spherium community forum and vote in favour of or against the SIP. Some examples may include</p>
                                <ul>
                                    <li>increase or decrease of the HyperSwap liquidity pool fee depending on the volatility of the trade;</li>
                                    <li>adding new liquidity pools for HyperSwap;</li>
                                    <li>adding new money markets to HyperLend;</li>
                                    <li>adjusting the SPHRI allocation weights between different liquidity pools.</li>
                                </ul>
                                <p>Apart from the SIP, the community forum will be used for general discussion on issues related to the Spherium ecosystem and as a platform for the Requests for Comment (RFC).</p>
                                <h4>Communities</h4>
                                <ul>
                                    <li>Twitter: https://twitter.com/spheriumfinance?s=21</li>
                                    <li>Telegram Announcements: https:// t.me/spheriumwallet</li>
                                    <li>Telegram Global: https://t.co/PhiYkoO1ep?amp=1</li>
                                    <li>Telegram Africa: https://t.me/SpheriumAfrica </li>
                                    <li>Telegram Korea: https://t.me/Spheriumkorea</li>
                                    <li>Medium: https://spheriumlabs.medium.com/</li>
                                    <li>Reddit: https://www.reddit.com/user/Spherium-Finance/posts</li>
                                    <li>LinkedIn: https://www.linkedin.com/company/64719370/admin/</li>
                                    <li>Facebook: https://www.facebook.com/spherium.finance/</li>
                                    <li>Instagram : https://instagram.com/spheriumfinanceofficial?igshid=13oe099hdc3ec</li>
                                </ul>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-four" role="tabpanel" aria-labelledby="v-pills-four-tab">
                        <div className="tebdetail-wrapper">
                                <h2>Bug Bounty Program</h2>
                                <p>Our main concern is the security of the Spherium platform and its users. And while we have conducted professional audits on the Hyperswap and HyperLend components of the platform, the discovery of vulnerabilities through users remains essential. We therefore strongly encourage our community to run the audits of smart contracts and security protocols as well as the responsible disclosure and reporting of any issues. We very much appreciate the input from ethical hackers acting in good faith that can assist us with the standards of IT safety and rule compliance. Considering our community our main asset with regard to independent research, Spherium encourages everyone to provide us with their views of how to make our platform and our products better and to raise the security level of the platform.</p>
                                <h4>Scope and Rewards</h4>
                                <p>The goal of the bug bounty program is the discovery of defects, bugs and vulnerabilities affecting the protocol and code deployed to the Ethereum Mainnet that can lead to data loss and theft as well as the detection of weaknesses of smart contracts and user interface code used in the process. We would like to emphasize that we can provide rewards exclusively for the defects that are reported for the first time and are confirmed by our tech team.</p>
                                <p>Spherium offers token rewards for discoveries that can prevent the loss of assets, protocol breaches, code defects and damages to users providing a reward of 500 USD to 150K USD (depending on the significance and impact of the discovery) for eligible reports according to the terms and conditions provided below.</p>
                                <p>All reward details, including eligibility and payment amount, remain at the sole discretion of the management of Spherium Pte. Ltd. Spherium reserves the right to reject submissions and alter the terms and conditions of this program.</p>
                                <h4>Terms & Conditions</h4>
                                <p>To be considered for the bug bounty rewards, you mus</p>
                                <ul>
                                    <li>identify an original, previously unreported, non-public protocol or code defect leading to a significant weakness of the Spherium platform and report it to Spherium immediately upon discovery;</li>
                                    <li>take precautions and observe the confidentiality provisions for the details of any discovered defects until these are fixed or remedied;</li>
                                    <li>include sufficient detail in your disclosure to enable our tech team to quickly reproduce, understand, and trace the problem;</li>
                                    <li>neither be associated with the Spherium team nor have been employed by Spherium as a vendor, contractor, consultant, advisor or in any other capacity;</li>
                                    <li>not be a member of a government institution or enterprise;</li>
                                    <li>avoid violating the privacy of users or investors, disrupting systems, destroying data and information or negatively affecting user experience;</li>
                                    <li>perform testing only on in-scope systems;</li>
                                    <li>only use the accounts you have personally created or reserved and/or with the explicit permission of the account holder;</li>
                                    <li>remain free of suspicion of blackmail, extortion or any other unlawful conduct.</li>
                                    <li>provide generous rewards for eligible discoveries based on the severity and exploitability of the defect and</li>
                                    <li>shall collaborate with you with the purpose to validate your input and find remedies in a timely manner.</li>
                                </ul>
                                <h4>Reporting</h4>
                                <p>We encourage all users and ethical hackers that detect vulnerabilities as described above to submit their findings to contact@spherium.finance. As mentioned above, we would ask you to include a clear description of the problem and, if possible, the steps that you took with regard to the discovery along with the course of action that would allow us to trace and reproduce the discovered defect.</p>
                                <p><strong>Spherium holds the sole discretion on the eligibility of submissions and payment, we reserve the right to reject submissions and alter the terms and conditions of this program.</strong></p>
                                <p><strong>We are looking forward to hearing from you!</strong></p>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-five" role="tabpanel" aria-labelledby="v-pills-five-tab">
                        <div className="tebdetail-wrapper">
                                <h2>Developers</h2>
                                <p>Spherium ecosystem comprises open-source components</p>
                                <ul>
                                    <li>Links 1</li>
                                    <li>Links 2</li>
                                    <li>Links 3</li>
                                </ul>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-six" role="tabpanel" aria-labelledby="v-pills-six-tab">
                        <div className="tebdetail-wrapper">
                                <h2>Spherium Labs Grants</h2>
                                <p>Spherium Labs aims to be a community-driven project and as a part of this initiative, we’re dedicated to allocating resources to projects that will take Spherium Finance ahead. If you have a project that aligns with our platform, submit your proposal for further discussion.</p>
                                <p>Step 1: Submit your proposal. Spherium Labs will review projects based on the current development goals of the foundation and the overall value addition to the community.</p>
                                <p>Step 2: The second stage involves technical feasibility study and due diligence. Spherium Labs will be responsible for conducting this review.</p>
                                <p>Step 3: Spherium executive board analyses and approves the applications based on their technical, economic feasibility.</p>
                                <p>Step 4: Approved grants are released in phases, ideally upon reaching set development milestones</p>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-seven" role="tabpanel" aria-labelledby="v-pills-seven-tab">
                            <div className="tebdetail-wrapper">
                                <h2>Whitepaper</h2>
                                <ul>
                                    <li><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/pdf/Spherium-Finance-Whitepaper-EN.pdf`} target="_blank">Whitepaper(EN)</a></li>
                                    <li><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/pdf/Spherium-Finance-Whitepaper-CN.pdf`} target="_blank">Whitepaper(CN)</a></li>
                                </ul>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-eight" role="tabpanel" aria-labelledby="v-pills-eight-tab">
                            <div className="tebdetail-wrapper">
                                <h2>Whitepaper</h2>
                                <p>The process of Spherium token allocation will be based on a community-type distribution, whereby every stakeholder will play an important part in the Spherium ecosystem.</p>
                                <ul>
                                    <li>Ticker: SPHRI </li>
                                    <li>Network: ERC20</li>
                                    <li>Total supply: 100,000,00</li>
                                </ul>
                                <p>Each group is critical to the network’s development, growth, and maintenance:</p>
                                <div className="detailsimg">
                                    <img src={`${process.env.PUBLIC_URL}/images/tokenomics-doc.jpg`} alt="" className="img-fluid"/>
                                </div>
                                <p><strong>*Detailed token paper will be published before the IDO date.</strong></p>
                                <div className="bottomborder">&nbsp;</div>
                                <p><span>Last updated 6 months ago</span></p>
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

export default Documentation;