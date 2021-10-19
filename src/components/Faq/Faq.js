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
                                            <h2>The Spherium Bridge</h2>
                                            <p>The Sphrium bridge links the Ethereum blockchain and the Binance Smart Chain such that ERC-20 tokens and BEP-20 tokens can be easily transferred across either chain.</p>
                                            <p>Below are answers to possible questions you may have regarding the Spherium Bridge. However, if you don’t find what you’re looking for, feel free to reach out to our support team at contact@spherium.finance</p>
                                        </div>
                                        <div className="accordion-two">
                                            <div className="accordion-wrapper">
                                                <div id="main">
                                                    <div className="accordion" id="faq">
                                                    <h4 className="mb-3"><strong>Transactions, Fees and Tokens</strong></h4>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead1">
                                                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#g1faq1"
                                                            aria-expanded="true" aria-controls="g1faq1">What can I do if my transaction seems stuck?</a>
                                                        </div>

                                                        <div id="g1faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                                            <div class="card-body">
                                                            You should wait for at least 30-45 minutes in case of a congested network. But if your transaction gets stuck, you can send a message to admin@Spherium.Finance</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead2">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq2"
                                                            aria-expanded="true" aria-controls="g1faq2">How long does a bridge transfer take?</a>
                                                        </div>

                                                        <div id="g1faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                                            <div class="card-body">
                                                            Transfers between the Ethereum blockchain and the Binance Smart Chain (BSC) and vice-versa could roughly take between 10–20 minutes. The transaction could be terminated after 25-30 minutes if not completed.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq3"
                                                            aria-expanded="true" aria-controls="g1faq3">Why does either side of the bridge take so long?</a>
                                                        </div>

                                                        <div id="g1faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Transactions between both bridges may take seconds to minutes to execute. If the bridge interface shows the transaction is delayed, it might be a problem with the interface. It is advisable to check your wallet and the cross-chain explorer because your assets may have been transferred.</div>
                                                        </div>
                                                    </div>

                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq4"
                                                            aria-expanded="true" aria-controls="g1faq4">What if the gas price is more than the amount I am transferring?
</a>
                                                        </div>

                                                        <div id="g1faq4" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">The Spherium bridge will not approve transfers if the amount being transferred is lower than the gas price.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq5"
                                                            aria-expanded="true" aria-controls="g1faq5">Can I send tokens created on BSC to Ethereum? </a>
                                                        </div>

                                                        <div id="g1faq5" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Yes. Our bridge is designed to support the transfer of tokens created on the BSC to the Ethereum blockchain and vice-versa.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq6"
                                                            aria-expanded="true" aria-controls="g1faq6">Can I send BTC across the bridge? </a>
                                                        </div>

                                                        <div id="g1faq6" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">No. The Spherium bridge supports only ERC-20 tokens and BEP-20 tokens.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq7"
                                                            aria-expanded="true" aria-controls="g1faq7">What if my transaction is not visible in the explorer? </a>
                                                        </div>

                                                        <div id="g1faq7" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Corresponding bridge transfers will appear on explorers for the Ethereum and Binance networks. However, the transactions may take a few minutes to appear on the explorer. To search for your transaction in the explorer, copy and paste your address into Spherium’s cross-chain explorer or Etherscan.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq8"
                                                            aria-expanded="true" aria-controls="g1faq8">Are there tutorials on how to use the Spherium bridge? </a>
                                                        </div>

                                                        <div id="g1faq8" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Yes, you can view video tutorials for bridge functionality.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq9"
                                                            aria-expanded="true" aria-controls="g1faq9">How do I pay for transaction fees on the bridge? </a>
                                                        </div>

                                                        <div id="g1faq9" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">$SPHRI tokens will be used to facilitate transfer fees on the bridge.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq10"
                                                            aria-expanded="true" aria-controls="g1faq10">Can I send tokens to a different address on the other network? </a>
                                                        </div>

                                                        <div id="g1faq10" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">The bridge only allows transfers to the same address on the other network. After the asset is transferred to the other network, it can be sent to any address or contract.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq11"
                                                            aria-expanded="true" aria-controls="g1faq11">Can I speed up my transaction? </a>
                                                        </div>

                                                        <div id="g1faq11" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Although Metamask wallet has a feature to speed up transactions, the Spherium bridge doesn’t.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq12"
                                                            aria-expanded="true" aria-controls="g1faq12">Why is the number of tokens shown on Metamask different from the number I specified? </a>
                                                        </div>

                                                        <div id="g1faq12" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">When transferring from BSC to Ethereum or Vice-versa, Metamask shows that 0 tokens are to be transferred, not the actual number of tokens. This is a known problem with Metamask.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq13"
                                                            aria-expanded="true" aria-controls="g1faq13">What is the Bridge’s address on Ethereum and Binance?</a>
                                                        </div>

                                                        <div id="g1faq13" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Bridge Addresses: <br/> Ethereum: 0x8a0cdfab62ed35b836dc0633482798421c81b3ec <br/> Binance Smart Chain: 0x8B7a0007F6E0ddb16cd14f34af3306947fC698a6 <br/> Note: You should not directly transfer tokens to these addresses. You should use the Bridge’s user interface, which checks for malformed transactions.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq14"
                                                            aria-expanded="true" aria-controls="g1faq14">How do fees work on the Spherium Bridge? </a>
                                                        </div>

                                                        <div id="g1faq14" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">The bridge charges transfer fees in order to cover the cost of the transaction fees on the BSC and Ethereum networks, as well as the operational costs of the bridge infrastructure and a fee for the treasury, in case of future issues. These fees are charged in-kind with the ERC-20 and BEP-20 assets being transferred. That is, when you transfer a token, a portion of the balance transferred is taken by the bridge as a fee.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq15"
                                                            aria-expanded="true" aria-controls="g1faq15">Why doesn’t the number of assets I received on one network match the amount that I sent from the other? </a>
                                                        </div>

                                                        <div id="g1faq15" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">This is because when you make the transfer, a small portion is deducted from it to fuel the execution of the transaction. Hence, always make sure to add in an extra amount as supposed to the exact amount you want to transfer.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq16"
                                                            aria-expanded="true" aria-controls="g1faq16">How is gas estimated? How does the bridge get token prices?</a>
                                                        </div>

                                                        <div id="g1faq16" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">The bridge uses the Oracle price feeds to get gas price information for the Ethereum network. The gas price is padded by a few GWEI to ensure transactions sent by the bridge are quickly included in an Ethereum block. <br/> The bridge also uses Oracle price feeds to determine token prices used to calculate the amount of a token that is equivalent to the bridge fee.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq17"
                                                            aria-expanded="true" aria-controls="g1faq17">My transfer to Binance was successful but I can’t see my assets on my Metamask wallet. What went wrong? </a>
                                                        </div>

                                                        <div id="g1faq17" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">If such occurs, the best solution is to speak to Metamask operators so your tokens can be found. It's also important to add the tokens from the Spherium bridge token list to your Metamask wallet before making the transaction. <br/> You can find more details on MetaMask Support here: <br/> https://metamask.zendesk.com/hc/en-us </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq18"
                                                            aria-expanded="true" aria-controls="g1faq18">What kind of tokens can be transferred across the bridge? </a>
                                                        </div>

                                                        <div id="g1faq18" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Spherium’s Bridge will initially only support ERC20 and BEP20 tokens. Moving ahead more chains will be added to give users a complete cross-chain asset swap experience.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq19"
                                                            aria-expanded="true" aria-controls="g1faq19">How can I add a new token to the bridge? </a>
                                                        </div>

                                                        <div id="g1faq19" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">You can make a request to Whitelist your tokens, this applies to startups or projects that are already listed. They can alternatively message us on telegram in our community channels where our customer service team will take these details.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq20"
                                                            aria-expanded="true" aria-controls="g1faq20">How can I add a token used in the bridge to Metamask?</a>
                                                        </div>

                                                        <div id="g1faq20" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">To perfectly understand how this is done, follow the link to read more: https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq21"
                                                            aria-expanded="true" aria-controls="g1faq21">Why doesn’t the newly bridged token appear in my wallet automatically? </a>
                                                        </div>

                                                        <div id="g1faq21" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Tokens are not held by your Cross-chain address, but rather in the token’s smart contract. You have to tell your wallet (i.e. Metamask) which smart contracts to check for balances held by your addresses.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq22"
                                                            aria-expanded="true" aria-controls="g1faq22">Does the Spherium Bridge support transfer of NFTs? </a>
                                                        </div>

                                                        <div id="g1faq22" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Yes. The Spherium bridge supports the transfer of NFTs. This means that you can transfer your NFTs across the bridge instantly without any hassle.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g1faq23"
                                                            aria-expanded="true" aria-controls="g1faq23">I transferred my ERC20 over the Spherium Bridge. Where can I trade it now? </a>
                                                        </div>

                                                        <div id="g1faq23" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">
                                                                Spherium can be traded on the following sites: <br/>
                                                                Gate.io <br/>
                                                                Uniswap <br/>
                                                                HyperSwap<br/>
                                                                PancakeSwap
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <h4 className="mb-3 mt-4"><strong>Security and Supported Chains</strong></h4>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g2faq1"
                                                            aria-expanded="true" aria-controls="g2faq1">Has the smart contract code been audited?</a>
                                                        </div>

                                                        <div id="g2faq1" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Yes, the code for the Spherium bridge and smart contracts have been audited by Halborn, an elite cybersecurity firm, to ensure that Spherium’s Bridge is trustworthy, not vulnerable and free from any potential cyber-attacks. The audit report can be found HERE</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g2faq2"
                                                            aria-expanded="true" aria-controls="g2faq2">What chains are supported by the Spherium Bridge?</a>
                                                        </div>

                                                        <div id="g2faq2" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Currently, the Spherium bridge supports the Binance Smart Chain and Ethereum Blockchain. Polygon is expected to be deployed, after satisfactory audits.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g2faq3"
                                                            aria-expanded="true" aria-controls="g2faq3">Can I bridge assets from an entirely different network to Spherium?</a>
                                                        </div>

                                                        <div id="g2faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Yes, as long as they are based on Binance smart chain or Ethereum smart chain and later on Polygon.</div>
                                                        </div>
                                                    </div>

                                                    <h4 className="mb-3 mt-4"><strong>Design/Technical</strong></h4>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g3faq1"
                                                            aria-expanded="true" aria-controls="g3faq1">Can a single private key mint tokens?</a>
                                                        </div>

                                                        <div id="g3faq1" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">We have a couple of private keys. They check the bridge requests and vote for the request to be executed. More than 51% of private keys should agree to move a token from the source chain to the destination chain. <br/> For example, if we have 3 private keys, at least 2 of them should agree to transfer the token. After that, one of the two private keys who agree to the transfer can mint the token.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g3faq2"
                                                            aria-expanded="true" aria-controls="g3faq2">Why doesn’t the bridge hold funds in a smart contract?</a>
                                                        </div>

                                                        <div id="g3faq2" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">We believe it's more secure to lock tokens in a treasury, as a result we will ensure tokens are safely moved to our treasury. To prevent any major hacking incident.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g3faq3"
                                                            aria-expanded="true" aria-controls="g3faq3">Can I integrate bridge transfers into my own smart contracts?
</a>
                                                        </div>

                                                        <div id="g3faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Technically, it is possible. But it won’t be straightforward because we are not going to show our bridge functionality to users.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g3faq4"
                                                            aria-expanded="true" aria-controls="g3faq4">I can’t see my tokens in my wallet. Are they lost forever?
</a>
                                                        </div>

                                                        <div id="g3faq4" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">No. It is very likely it’s a user interface issue, and the tokens are there but you just don’t see the tokens.</div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header" id="faqhead3">
                                                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#g3faq5"
                                                            aria-expanded="true" aria-controls="g3faq5">How can I contact someone for support?</a>
                                                        </div>

                                                        <div id="g3faq5" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                            <div class="card-body">Email: admin@Spherium.Finance <br/> You can message us/tag us on Twitter @spheriumfinance <br/> Please note that we aim to respond to most issues within 24-48 hours and urgent ones within 1-2 hours.</div>
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