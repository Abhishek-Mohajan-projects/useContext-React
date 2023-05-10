import React, { useState } from "react";
import { useUserContext } from "./useUserContext";
const NewUser = () => {
  const { addUser } = useUserContext();
  const [userName, setUserName] = useState("");
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleASubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: userName };
    addUser(newUser);
    setUserName("");
  };
  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleASubmit}>
        <input type="text" value={userName} onChange={handleNameChange} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
