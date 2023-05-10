import { useContext } from "react";
import { UsersContext } from "./UsersContext";
export const useUserContext = () => {
  return useContext(UsersContext);
};
