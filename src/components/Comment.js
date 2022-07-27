import React from "react";
import { useState } from "react";

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

    return(
        <form>
            <label for ="First Name"> First Name</label><br></br> 
            <input type="text" onChange={handleFirstNameInputChange} value ={values.firstname} placeholder="write your firstname"/><br></br>

            <label for ="Last Name"> Last Name</label><br></br>
            <input type="text" onChange={handleLastNameInputChange} value ={values.lastname} placeholder="write your last name"/><br></br>

            <label for ="phone number"> Phone Number</label><br></br>
            <input type="phonenumber" onChange={handlePhoneNumberInputChange} value ={values.phonenumber} placeholder="write your phone number" required/><br></br>

            <label for ="email"> Email</label><br></br>
            <input type="email" onChange={handleEmailInputChange} value ={values.email} placeholder="write your email"/><br></br>
            
            <label for ="comment"> Comment Us</label><br></br>
            <input type="text" onChange={handleCommentInputChange} value ={values.comment} placeholder="write your comment" required/><br></br>

            <button type="submit">Submit</button>


            

        </form>


    );
}
export default Comment;