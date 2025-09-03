import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const userData = useLoaderData();
    const [users, setUsers] = useState(userData);

    const handleDelete = (_id) => {
        console.log('Delete', _id);
        fetch(`http://localhost:1500/users/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                    // remove delete object from ui
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }
    return (
        <div>
            <h2>Users : {userData.length}</h2>
            <div>
                {
                    userData.map((user) => <p key={user._id}>Name : {user.name} : Email : {user.email} : ID : {user._id} <button onClick={() => handleDelete(user._id)} className="btn btn-primary ml-2">X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;