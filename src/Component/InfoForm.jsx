
const InfoForm = () => {
    const handleAddUser = (e) => {

    }
    return (
        <form onSubmit={handleAddUser}>
            <fieldset className="fieldset bg-base-200 rounded-box w-xs border p-5 border-cyan-400">
                <legend className="fieldset-legend text-xl">User Details</legend>

                <label className="label">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered w-full"
                    required
                />

                <label className="label">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Mail"
                    className="input input-bordered w-full"
                    required
                />

                <label className="label">Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    className="input input-bordered w-full"
                    required
                />

                <button type="submit" className="btn mt-3 btn-info w-full">
                    Add User
                </button>
            </fieldset>
        </form>

    );
};

export default InfoForm;