import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";

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
        <div className="container" style={{minHeight: "85vh"}}>
            <div className="py-3">
                <div className="row py-2">
                    <div className="col-6">
                        ADD CONTACT
                    </div>
                    <div className="col-6">
                        REMOVE CONTACT
                    </div>
                </div>
                <div className="py-2">
                    <div className="col-12">
                        FROM TO ADD NEW CONTACT
                    </div> 
                </div>
                <div className="py-2">
                    <div className="col-12">
                        FAVORITES CONTACT
                    </div> 
                    <FavoriteContacts contactList={contactList} />
                </div> 
                <div className="py-2">
                    <div className="col-12">
                        GENERAL CONTACT
                    </div> 
                </div>     
            </div>
        </div>
     );
} 

export default ContactIndex;