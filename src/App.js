import React from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import UserProvider from "./UsersContext";

const App = () => {
  return (
    <UserProvider>
      <NewUser />
      <Users />
    </UserProvider>
  );
};

export default App;
