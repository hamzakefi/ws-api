import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <li className="user-card-item">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </li>
  );
};

export default UserCard;
