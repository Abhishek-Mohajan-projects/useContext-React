import React from "react";
import "./index.css";
import { useUserContext } from "./useUserContext";

const User = ({ user }) => {
  const { deleteUser } = useUserContext();
  const { id, username } = user;
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };
  return (
    <article className="user">
      <div>
        <h1>{id}</h1>
        <p>{username}</p>
        <button
          onClick={() => {
            handleDeleteUser(id);
          }}
        >
          Remove User
        </button>
      </div>
    </article>
  );
};

export default User;
