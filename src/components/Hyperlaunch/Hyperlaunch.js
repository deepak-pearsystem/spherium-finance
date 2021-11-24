import React, {useEffect} from 'react';
import './hyperlaunch.scss';
import { Link } from 'react-router-dom';

const Hyperlaunch = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>Hyperlaunch</h2>
                    <p>Decentralised Asset Swap based on an Automated Market-Making Mechanism</p> 
                </div>
            </div>
            <div className="hyperlaunch">
                <div className="container">
                    <div className="hyperlaunchinfo">
                        <h1>Comming Soon...</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hyperlaunch;