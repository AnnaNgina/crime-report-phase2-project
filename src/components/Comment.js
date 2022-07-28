import React from "react";
import { useState } from "react";
import "./comment.css";


function Comment (){
    const [values, setValues] = useState ({
        firstname:"",
        lastname:"",
        phonenumber:"",
        email:"",
        comment:""
        
    });
    const handleFirstNameInputChange = (event) => {
        setValues({...values,firstname :event.target.value})
    }
    const handleLastNameInputChange = (event) => {
        setValues({...values,lastname :event.target.value})
    }
    const handlePhoneNumberInputChange = (event) => {
        setValues({...values,phonenumber :event.target.value})
    }
    const handleEmailInputChange = (event) => {
        setValues({...values,email :event.target.value})
    }
    const handleCommentInputChange = (event) => {
        setValues({...values,comment :event.target.value})
    }
    const handleSubmit= (event) => {
        event.preventDefault();
    }

    return(

        <div className="form-element">
    
        <form className="form-inputs" onSubmit={handleSubmit}>
            <label> First Name</label><br></br> 
            <input type="text" onChange={handleFirstNameInputChange} value ={values.firstname} placeholder="write your firstname"/><br></br>

            <label> Last Name</label><br></br>
            <input type="text" onChange={handleLastNameInputChange} value ={values.lastname} placeholder="write your last name"/><br></br>

            <label> Phone Number</label><br></br>
            <input type="text" onChange={handlePhoneNumberInputChange} value ={values.phonenumber} placeholder="write your phone number" required/><br></br>

            <label> Email</label><br></br>
            <input type="text" onChange={handleEmailInputChange} value ={values.email} placeholder="write your email"/><br></br>
            
            <label> Comment Us</label><br></br>
            <input type="text" onChange={handleCommentInputChange} value ={values.comment} placeholder="write your comment" required/><br></br>

            <button type="submit">Submit</button>

        </form>
        </div>
        
    );
}
export default Comment;