import React from "react";
import { useState } from "react";
import "./comment.css";


function ReportCase (onAddValue){
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
    const handleReplyInputChange = (event) => {
        setValues({...values,comment :event.target.value})
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/case", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname:"",
            lastname:"",
            phonenumber:"",
            email:"",
            comment:""
          })
        })
        .then((r) => r.json())
        .then((newValue) => {
            onAddValue(newValue);
            setValues({ ...values, firstname: "", lastname: "", phonenumber: "", email: ""  , comment: ""  });
          });
      }


    return(
     
<nav>
        <div className="report">
            <h1> Report A Crime</h1>
            
        <form className="form-inputs" onSubmit={handleSubmit}>
            <label> First Name</label><br></br> 
            <input type="text" onChange={handleFirstNameInputChange} value ={values.firstname} placeholder="write your firstname"/><br></br>

            <label> Last Name</label><br></br>
            <input type="text" onChange={handleLastNameInputChange} value ={values.lastname} placeholder="write your last name"/><br></br>

            <label> Phone Number</label><br></br>
            <input type="text" onChange={handlePhoneNumberInputChange} value ={values.phonenumber} placeholder="write your phone number" required/><br></br>

            <label> Email</label><br></br>
            <input type="text" onChange={handleEmailInputChange} value ={values.email} placeholder="write your email"/><br></br>
            
            <label> Add your complain</label><br></br>
            <input type="text" onChange={handleReplyInputChange} value ={values.reply} placeholder="write your complain" required/><br></br>

            <button type="submit">Submit</button>

        
        </form>
    
        </div>
        
        </nav>
        
    );
   

}
export default ReportCase;