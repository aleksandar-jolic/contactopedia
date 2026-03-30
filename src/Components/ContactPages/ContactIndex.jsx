import { useState } from "react";

function ContactIndex() {
    const [contactList, setContactList] = useState([
        {
            id: 1,
            name: "Ben Parker",
            email: "ben@dotnetmastery.com",
            phone: "555-555-5555",
            isFavourite: false
        },
        {
            id: 2,
            name: "Peter Parker",
            email: "peter@dotnetmastery.com",
            phone: "555-555-5556",
            isFavourite: true
        },
        {
            id: 3,
            name: "Mary Jane",
            email: "mary@dotnetmastery.com",
            phone: "555-555-5557",
            isFavourite: false
        }
    ]);

    return ( 
        <div className="container">
             
        </div>
     );
} 

export default ContactIndex;