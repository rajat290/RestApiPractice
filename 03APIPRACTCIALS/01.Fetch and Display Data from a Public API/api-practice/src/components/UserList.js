import React, { useState, useEffect } from 'react';

const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("failed to fetch users");

                }
                return response.json();
            })
            .then((data) => {
                setUsers(data); //store api in state 
                setUsers(data); //store api in state 
                setloading(false);

            });

    }, []);

    if (loading) return <p>Loading Users....</p>
    if (error) return <p> Error: {error.message} </p>;

    return (

        <div>
            <h1> Userlist </h1>
            <ul> {users.map((user) => (
                <li key={user.name}>{user.name}</li> // display user names
            ))}</ul>

            <ul> {users.map((users) => (
                <li key={users.id}>
                    <strong> Name:</strong> {users.name} <br />
                    <strong> Email: </strong> {users.email} <br />
                    <strong> Phone: </strong> {users.phone} <br />
                    <hr />

                </li>

            ))}

            </ul>
        </div>


    )


}

export default Userlist;
