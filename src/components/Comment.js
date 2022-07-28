import React from "react";
import { useState } from "react";
import "./comment.css";

function Comment() {
  const [firstName, setFirstName] = useState("Peter");
  const [lastName, setLastName] = useState("Kim");
  const [phoneNumber, setPhoneNumber] = useState("07411000");
  const [email, setEmail] = useState("peter@gmail.com");
//   const [comment, setComment] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { firstName: firstName, lastName: lastName ,phoneNumber:phoneNumber ,Email:email };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName} {data.phoneNumber}{data.email}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <input type="text" onChange={handlePhoneNumberChange} value={phoneNumber} />
        <input type="text" onChange={handleEmailChange} value={email} />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}



// function Comment (){
//     const [values, setValues] = useState ({
//         firstname:"",
//         lastname:"",
//         phonenumber:"",
//         email:"",
//         comment:""
        
//     });
//     const handleFirstNameInputChange = (event) => {
//         setValues({...values,firstname :event.target.value})
//     }
//     const handleLastNameInputChange = (event) => {
//         setValues({...values,lastname :event.target.value})
//     }
//     const handlePhoneNumberInputChange = (event) => {
//         setValues({...values,phonenumber :event.target.value})
//     }
//     const handleEmailInputChange = (event) => {
//         setValues({...values,email :event.target.value})
//     }
//     const handleCommentInputChange = (event) => {
//         setValues({...values,comment :event.target.value})
//     }
//     const handleSubmit= (event) => {
//         event.preventDefault();
//     }

//     return(

//         <div className="form-element">
    
//         <form className="form-inputs" onSubmit={handleSubmit}>
//             <label> First Name</label><br></br> 
//             <input type="text" onChange={handleFirstNameInputChange} value ={values.firstname} placeholder="write your firstname"/><br></br>

//             <label> Last Name</label><br></br>
//             <input type="text" onChange={handleLastNameInputChange} value ={values.lastname} placeholder="write your last name"/><br></br>

//             <label> Phone Number</label><br></br>
//             <input type="text" onChange={handlePhoneNumberInputChange} value ={values.phonenumber} placeholder="write your phone number" required/><br></br>

//             <label> Email</label><br></br>
//             <input type="text" onChange={handleEmailInputChange} value ={values.email} placeholder="write your email"/><br></br>
            
//             <label> Comment Us</label><br></br>
//             <input type="text" onChange={handleCommentInputChange} value ={values.comment} placeholder="write your comment" required/><br></br>

//             <button type="submit">Submit</button>

//         </form>
//         </div>
        
//     );
// }
export default Comment;