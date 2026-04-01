import Actions from "./Actions";

function FavoriteContacts(props) {
    return (
        <div>
            <table border="1" className="table table-striped">
                   <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.contactList.filter(contact => contact.isFavourite).map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td><Actions /></td>
                            </tr>
                        ))}
                    </tbody>     
            </table>
        </div>
    );
}

export default FavoriteContacts;