import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList/UsersList';

import "./style.css";

export default function App() {

  const [usersList, setUsers] = useState([])
  const getUser = (uName, uAge) => {
    // console.log(data)
    setUsers((prevUsers) => [{name: uName, age: uAge}, ...prevUsers])
    console.log(usersList)
  }

  return (
    <div>
     <AddUser onAddUser={getUser} />
     <UsersList users={usersList} />
    </div>
  );
}
