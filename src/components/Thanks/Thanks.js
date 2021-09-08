import React from 'react';
import './thanks.scss';
import { Link } from 'react-router-dom';
const Thanks = () => {
    return (
        <section className="thankswrapper">
                <div className="thankscenter">
                    <img src={`${process.env.PUBLIC_URL}/images/thanks-img.svg`} alt="" className="img-fluid"/>
                    <h2>Thanks you for contacting us!</h2>
                    <p>Your message has been received and we will be contacting you shortly to follow-up.</p>
                    <Link to="/"><button className="btn">Back to Homepage</button></Link>
                </div>
        </section>
    );
};

export default Thanks;