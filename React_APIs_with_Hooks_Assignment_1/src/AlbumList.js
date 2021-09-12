import React, { useEffect, useState } from "react";
import App from "./App";
import UserList from "./UserList";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]);

    // Load Albums for Current User
  useEffect(() => {
    const abortController = new AbortController();
    async function loadUserAlbums() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`, { signal: abortController.signal });
        const userAlbums = await response.json();
        setAlbums(userAlbums);
      } catch(error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    if (user.id) {
      loadUserAlbums();
    }
    return() => {
      abortController.abort();
    };
  }, [user]);
  
  if (!user.id) {
    return ( <p>Please click on a user name to the left</p>
   );
  }
      return (
        <div> <h3>{user.name}</h3>
          <ul> {albums.map((album) => ( <li key={album.id}> {album.id} {album.title} </li> ))} </ul> </div>
  );
}

export default AlbumList;
