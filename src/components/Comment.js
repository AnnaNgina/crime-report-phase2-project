import React from "react";
import { useState } from "react";
import "./comment.css";

function Comment() {
  const [firstName, setFirstName] = useState("Peter");
  const [lastName, setLastName] = useState("Kim");
  const [phoneNumber, setPhoneNumber] = useState("07411000");
  const [email, setEmail] = useState("peter@gmail.com");
  const [reply, setReply] = useState("theft");

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

   function handleReplyChange(event) {
    setReply(event.target.value);
  }
    

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { firstName: firstName, lastName: lastName ,phoneNumber:phoneNumber ,email:email , reply: reply ,};
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setReply("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName} {data.phoneNumber}{data.email} {data.reply}
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
        <input type="text" onChange={handleReplyChange} value={reply} />
        <button type="submit">Submit</button>
      </form>
      {listOfSubmissions}
    </div>
  );
}

export default Comment;