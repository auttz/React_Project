import { useState } from "react";

function UserInput() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    setMessage(`Hello ${name}, You are : ${age} years old.`);
  };
  return (
    <div>
      <p>Name: </p>
      <input
        type="text"
        placeholder="Name"
        className="form-control w-50"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Age: </p>
      <input
        type="text"
        placeholder="Age"
        className="form-control w-50"
        onChange={(e) => setAge(e.target.value)}
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
export default UserInput;
