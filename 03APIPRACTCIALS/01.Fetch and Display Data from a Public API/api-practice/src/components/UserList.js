import React, { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false); // Stop loading once data is received
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const toggleDetails = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  return (
    <div>
      <h2>Users List (With View Details & Loader)</h2>

      {/* Show Loader while fetching data */}
      {loading ? (
        <div className="loader"></div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <button onClick={() => toggleDetails(user.id)}>
                {expandedUserId === user.id ? "Hide Details" : "View Details"}
              </button>

              {/* Conditionally render details */}
              {expandedUserId === user.id && (
                <div style={{ marginTop: "10px", paddingLeft: "10px", borderLeft: "2px solid #333" }}>
                  <p><strong>Company:</strong> {user.company.name}</p>
                  <p><strong>Website:</strong> {user.website}</p>
                  <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
                 

                </div>
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
