import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const UsersData = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })); // Include document ID
      setUsers(userDocs); // Update state with transformed data
    } catch (error) {
      console.error("Error fetching user data:", error); // Use console.error for logging errors
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <p key={user.id}>
            {user.username} (Email: {user.email})
          </p>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UsersData;
