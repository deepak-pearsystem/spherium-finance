import React, {useEffect} from 'react';
import './contact.scss';
import { Link } from 'react-router-dom';
import useForm from '../useForm';
import validate from '../validateinfo';

const Contact = () => {
    //useEffect(() => {
        //window.location.reload();
        // setTimeout(()=>{
        //     window.location.reload();
        // }, 500);
     // })
     useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
      const { handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
        <section className="contact-wrapper">
            <div className="contact-left">
                <div className="contactimgsection">
                    <h2>We'd love to here from you</h2>
                    <p>Fill up the form and our team will get back to you within 24 hours.</p>
                </div>
            </div>
            <div className="contact-right">
                <div className="contactformsection">
                    <form className="contactform" onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="firstname" htmlFor="firstname">FIRST NAME</label>
                                <input type="text" className="form-control" name="firstname" id="firstname" value={values.firstname} onChange={handleChange} placeholder="Enter your first name"/>
                                {errors.firstname && <span className="errormessage">{errors.firstname}</span>}
                            </div>
                            <div className="form-group col-md-6">
                                <label for="lastname" htmlFor="lastname">LAST NAME</label>
                                <input type="text" className="form-control" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} placeholder="Enter your last name"/>
                                {errors.lastname && <span className="errormessage">{errors.lastname}</span>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email" htmlFor="email">EMAIL</label>
                                <input type="email" className="form-control" name="email" id="email" value={values.email} onChange={handleChange} placeholder="Enter your email"/>
                                {errors.email && <span className="errormessage">{errors.email}</span>}
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phoneno" htmlFor="phoneno">PHONE NUMBER</label>
                                <div className="row">
                                    <div className="form-group col-md-5">
                                        {/* <select class="form-control" id="selectcountrycode">
                                            <option>+91</option>
                                            <option>+65</option>
                                            <option>+22</option>
                                            <option>+55</option>
                                            <option>+86</option>
                                        </select> */}
                                        <input type="text" className="form-control" name="countrycode" id="countrycode" placeholder="Country Code"></input>
                                    </div>
                                    <div className="form-group col-md-7 pl-0">
                                        <input type="text" className="form-control" name="phoneno" id="phoneno" value={values.phoneno} onChange={handleChange} placeholder="Enter your phone number"/>
                                        {errors.phoneno && <span className="errormessage">{errors.phoneno}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress" htmlFor="message">MESSAGE</label>
                            <input type="text" className="form-control" name="message" id="inputAddress" value={values.message} onChange={handleChange} placeholder="Enter your message"/>
                            {errors.message && <span className="errormessage">{errors.message}</span>}
                        </div>
                        <div className="formbtnmask">
                            <button type="submit" class="btn fromsubmit">Submit</button>
                            <button type="button" class="btn formcancel">Cancel</button>
                        </div>
                        <div className="enquirymask">
                            <h4>YOU CAN ALSO EMAIL US</h4>
                            <a href="mailto:enquiries@spherium.com">enquiries@spherium.com</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;