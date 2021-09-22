
import axios from "axios";
import { API_ROOT } from '../apiConfig';

export default function validateInfo(values){
    let errors = {}
    console.log(values);
    if(!values.firstname.trim()){
        errors.firstname = "First Name Required"
    }else if(!/^[A-Za-z]+$/i.test(values.firstname)){
        errors.firstname = "Enter alphabets only"
    }

    if(!values.lastname.trim()){
        errors.lastname = "Last Name Required"
    }else if(!/^[A-Za-z]+$/i.test(values.lastname)){
        errors.lastname = "Enter alphabets only"
    }

    if(!values.email){
        errors.email = "Email Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email Address is Invalid"
    }

    if(!values.phoneno){
        errors.phoneno = "Phone Number is Required"
    }else if(!/^\d{10}$/i.test(values.phoneno)){
        errors.phoneno = "Phone Number is Invalid"
    }

    if(!values.message.trim()){
        errors.message = "Message is Required"
    }

    if(values.firstname !== "" && values.lastname !== "" && values.email !== "" && values.phoneno !== "" && values.message !== ""){
        var reportdata = {name:values.firstname, lname:values.lastname, phone:values.phoneno, email:values.email, message:values.message};
        return axios.post(`${API_ROOT}/contact`,reportdata)
        .then(function (response) {
            console.log(response.data);
            if(response.data.api_status == 200){
                window.location.href = "#/Thanks";  
            }
        })
        .catch(function (error) {
            console.log(error);
        }); 
        }
        
    return errors;
}   