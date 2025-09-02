import { useLoaderData } from "react-router-dom";

const Users = () => {
    const userData = useLoaderData();
    return (
        <div>
            <h2>Users : {userData.length}</h2>
            <div>
                {
                    userData.map((user) => <p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;