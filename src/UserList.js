import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard"; 
import "./UserList.css";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const afficheUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    afficheUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
