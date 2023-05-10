import React from "react";
import User from "./User";
import "./index.css";
import { useUserContext } from "./useUserContext";

const Users = () => {
  const { users } = useUserContext();
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
