import React from 'react';
import './partners.scss';
import { Link } from 'react-router-dom';

const Partners = () => {
    return (
        <div className="auditedverified-wrapper">
            <div className="container">
                <h2 className="heading">Audited and Verified</h2>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="auditedverified-cell">
                            <img src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-1.png`} alt="" className="img-fluid"/> 
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                    <a href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Spherium-v1.0.pdf" target="_blank" className="tileslinkds">
                        <div className="auditedverified-cell">
                            
                                <img src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-2.png`} alt="" className="img-fluid"/> 
                            
                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="auditedverified-cell">
                            <img src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-3.png`} alt="" className="img-fluid"/> 
                        </div>
                    </div>
                </div>
                <div className="partner-top">
                    <h2 className="heading">Partners</h2>
                    <div className="row">
                        <div className="w-100 d-flex justify-content-center">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="auditedverified-cell">
                                    <img src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-1.png`} alt="" className="img-fluid"/> 
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="auditedverified-cell">
                                    <img src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-2.png`} alt="" className="img-fluid"/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;