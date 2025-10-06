import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMessage(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
  };
  return (
    <div>
      <p>Name:</p>
      <input
        type="text"
        name="name"
        className="form-control w-50"
        placeholder="Name"
        onChange={handleChange}
      />
      <p>Age:</p>
      <input
        type="text"
        name="age"
        className="form-control w-50"
        placeholder="Age"
        onChange={handleChange}
      />
      <p>Email:</p>
      <input
        type="text"
        name="email"
        className="form-control w-50"
        placeholder="Email"
        onChange={handleChange}
      />
      <button
        className="btn btn-primary"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Submit
      </button>

      <p className="mt-3">{message}</p>
    </div>
  );
}
export default UserProfile;
