import React from "react";
import "./ContactList.css"; // import css file
import { Link, useNavigate } from "react-router";

export const contacts = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Williams", email: "bob@example.com" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 6, name: "Diana Prince", email: "diana@example.com" },
  { id: 7, name: "Ethan Hunt", email: "ethan@example.com" },
  { id: 8, name: "Fiona Gallagher", email: "fiona@example.com" },
  { id: 9, name: "George Clark", email: "george@example.com" },
  { id: 10, name: "Hannah Lee", email: "hannah@example.com" },
];

function Contact({ id, name, email }) {
    const navigate = useNavigate()
    function toContact(id){
        navigate(`/contact/${id}`)
    }
  return (
    <div className="contact-card">
      <div className="contact-id">{id}</div>
      <h2 className="contact-name">{name}</h2>
      <p className="contact-email">{email}</p>
      {/* <button><Link to={`/contact/${id}`} >Know More</Link></button> */}
      <button onClick={()=>toContact(id)}>Know More</button>

    </div>
  );
}

export default function ContactList() {
  return (
    <div className="container">
      <div className="grid">
        {contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </div>
    </div>
  );
}





