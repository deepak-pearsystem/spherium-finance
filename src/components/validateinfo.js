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
        window.location.href = "#/Thanks";   
    }

    return errors;
}   