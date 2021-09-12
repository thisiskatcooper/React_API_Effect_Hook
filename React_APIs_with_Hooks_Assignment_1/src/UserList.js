import React, { useEffect } from "react";
import App from "./App";
import AlbumList from "./AlbumList";

function UserList({ users, setCurrentUser }) { 
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => setCurrentUser(user)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
