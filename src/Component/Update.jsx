import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    return (
        <div>
            <h2>Update information of {loadedUser.name}</h2>
            <form >
                <input type="text" name="name" className="input input-bordered w-full" required defaultValue={loadedUser?.name} id="" />
                <br />
                <input type="email" name="email" className="input input-bordered w-full" required defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" className="input input-bordered w-full" required value="update" />
            </form>
        </div>
    );
};

export default Update;