import React from "react";
import { useParams } from "react-router";
import { contacts } from "./Contact";
function SingleContact() {
   let {id} =  useParams()
   let {name,email} = contacts.find(v=>v.id == id)
  
  return (
    <div>
      <div className="contact-card">
        <div className="contact-id">{id}</div>
        <h2 className="contact-name">{name}</h2>
        <p className="contact-email">{email}</p>
        
      </div>
    </div>
  );
}

export default SingleContact;
